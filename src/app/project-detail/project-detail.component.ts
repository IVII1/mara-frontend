import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ExtendedProject } from '../models/extended-project.model';
import { Image } from '../models/image.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  standalone: true,
  imports: [NgbCarouselModule, CommonModule]
})
export class ProjectDetailComponent implements OnInit {
  project!: ExtendedProject;
  allImages: string[] = [];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.getProjectDetails(id);
      }
    });
  }

  getProjectDetails(id: number): void {
    this.projectService.getSingle(id).subscribe({
      next: (response: any) => {
        this.project = response.data;
        
  
        this.allImages = [];
        
        if (this.project.thumbnail) {
          this.allImages.push(this.project.thumbnail);
        }
        

        if (this.project.images && this.project.images.length > 0) {
          const additionalImages = this.project.images.map(img => img.image_url);
          this.allImages.push(...additionalImages);
        }
        
     
      },
      error: (err) => {
        console.error('Error fetching project:', err);
      },
    });
  }
  getDimensions(): string {
    return `${this.project.height}${this.project.units} x ${this.project.width}${this.project.units} x ${this.project.depth}${this.project.units}`;
  }
}