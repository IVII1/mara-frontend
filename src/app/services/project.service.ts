import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { Project } from '../models/project.model';
import { ExtendedProject } from '../models/extended-project.model';




 @Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  
  get(): Observable<Project[]> {  
    return this.http
      .get<Project[]>(`${environment.apiBaseUrl}/api/projects`)     
  }
  getSingle(id: number){
    return this.http
    .get<ExtendedProject>(`${environment.apiBaseUrl}/api/projects/${id}?include=images`)   
  }
}