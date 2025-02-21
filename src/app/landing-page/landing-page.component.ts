import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { ProjectComponent } from "../project/project.component";
import { Project } from '../models/project.model';

@Component({
  selector: 'app-landing-page',
  imports: [ProjectComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  projects: Project[] = [];
  
  constructor(private projectsService: ProjectService) {}
  
  ngOnInit() {
    this.projectsService.get().subscribe({
      next: (response: any) => {
        this.projects = response.data;
      },
      error: (err) => {
        this.projects = [];
      },
    });
  }
}
