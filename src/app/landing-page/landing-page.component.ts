import { Component, OnInit, QueryList, ViewChildren, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { ProjectComponent } from "../project/project.component";
import { Project } from '../models/project.model';
import { CategoriesService } from '../services/categories.service';
import { Categories } from '../models/categories.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [ProjectComponent, CommonModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  projects: Project[] = [];
  categories: Categories[] = [];
  selectedCategories: { [key: number]: boolean } = {};
  filteredProjects: Project[] = [];
  

  @ViewChildren('checkbox') checkboxes!: QueryList<ElementRef>;
  
  constructor(
    private projectsService: ProjectService,
    private categoriesService: CategoriesService,
    private renderer: Renderer2
  ) {}
  
  ngAfterViewInit() {

    this.checkboxes.changes.subscribe(() => {

    });
  }
  
  ngOnInit() {
    this.loadProjects();
    this.getCategories();
  }
 
  loadProjects() {
    this.projectsService.get().subscribe({
      next: (response: any) => {
        this.projects = response.data;
        this.filteredProjects = this.projects;
        console.log(this.projects);
      },
      error: (err) => {
        console.error('Error loading projects:', err);
        this.projects = [];
        this.filteredProjects = [];
      },
    });
  }
  
  getCategories() {
    this.categoriesService.getCategories().subscribe({
      next: (response: any) => {
        this.categories = response.data;

      },
      error: (err) => {
        console.error('Error loading categories:', err);
      }
    });
  }
 
  onCheckboxChange(categoryId: number) {
    this.selectedCategories[categoryId] = !this.selectedCategories[categoryId];
    this.applyFilters();
  }
 
  applyFilters() {
    const selectedCategoryIds = Object.keys(this.selectedCategories)
      .filter(key => this.selectedCategories[+key])
      .map(key => +key);
      
    if (selectedCategoryIds.length === 0) {
      this.loadProjects();
      return;
    }
   
    const queryParams = `category_id=${selectedCategoryIds.join(',')}`;
 
    this.projectsService.filterProjects(queryParams).subscribe({
      next: (response: any) => {
        this.filteredProjects = response.data;
 
        this.projects = this.filteredProjects;
      },
      error: (err) => {
        console.error('Error filtering projects:', err);
        this.filteredProjects = [];
      }
    });
  }
  
  clearSelection() {
    this.selectedCategories = {};
    if (this.checkboxes) {
      this.checkboxes.forEach(checkboxRef => {
        const input = checkboxRef.nativeElement;
        this.renderer.setProperty(input, 'checked', false);
      });
    }
    
    // Reload all projects
    this.loadProjects();
    

  }
}
