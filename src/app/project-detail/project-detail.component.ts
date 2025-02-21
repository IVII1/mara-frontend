import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { NgbCarouselModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  standalone: true,
  imports: [NgbCarouselModule, CommonModule,]
})
export class ProjectDetailComponent implements OnInit {
  allImages: any[] = [];
  activeSlide = 0; 
  projectData: any = {}; 

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => Number(params['id'])),
      filter(id => !isNaN(id)),
      switchMap(id => this.projectService.getSingle(id))
    ).subscribe({
      next: (response: any) => {
       

        this.projectData = response.data;
        // Ensure we're working with arrays and handle potential null/undefined
        const images = response.data.images || [];
        this.allImages = Array.isArray(images) 
          ? [this.projectData, ...images]
          : [this.projectData];
        
     // Debug log
      },
      error: (err) => {
        console.error('Error fetching project:', err);
        this.allImages = [];
      }
    });
  }

  onSlideChange(event: NgbSlideEvent): void {
    // Extract the slide number from the ID string "ngb-slide-0", "ngb-slide-1", etc.
    const slideIndex = Number(event.current.replace('ngb-slide-', ''));
    // Update the activeSlide property to track which slide is currently shown
    this.activeSlide = slideIndex;
  }

  get currentImage(): any {
    const image = this.allImages[this.activeSlide] || {};
    
    return {
      title: image.title || this.projectData.title || 'No Title',
      material: image.material || this.projectData.material || 'N/A',
      production_year: image.production_year || this.projectData.production_year || 'N/A',
      description: image.description || this.projectData.description || null,
      height: image.height || this.projectData.height,
      width: image.width || this.projectData.width,
      depth: image.depth || this.projectData.depth,
      units: image.units || this.projectData.units
    };
  }

  getDimensions(image: any): string {
    return image.height && image.width && image.depth
      ? `${image.height}${image.units || ''} x ${image.width}${image.units || ''} x ${image.depth}${image.units || ''}`
      : this.getDimensions(this.projectData); 
  }
}

