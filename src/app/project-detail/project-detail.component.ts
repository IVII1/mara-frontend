import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {
 @Input() project!: Project;

 constructor(private http: HttpClient){}

 getImages(id: string){
  
 }
}
