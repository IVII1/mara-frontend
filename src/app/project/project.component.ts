import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { Router, RouterModule,  } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [RouterModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project!: Project;

  // Helper method to format dimensions
  getDimensions(): string {
    return `${this.project.height}${this.project.units} x ${this.project.width}${this.project.units} x ${this.project.depth}${this.project.units}`;
  }
}