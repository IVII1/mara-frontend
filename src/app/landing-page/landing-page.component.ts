import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { ProjectComponent } from "../project/project.component";
import { Project } from '../models/project.model';

@Component({
  selector: 'app-landing-page',
  imports: [ProjectComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  projects: Project[] = [];
  
  constructor(private projectsService: ProjectService){}
  
  ngOnInit() {
    this.projectsService.get().subscribe({
      next: (data) => {
        this.projects = data;
        console.log('Projects loaded:', this.projects);
      },
      error: (err) => {
        console.error('Error fetching projects:', err);
      },
    });
}
}
