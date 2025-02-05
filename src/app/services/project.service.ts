import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { Project } from '../models/project.model';
 // Import environment



 @Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  
  get(): Observable<Project[]> {  // Change return type to Project[]
    return this.http
      .get<Project[]>(`${environment.apiBaseUrl}/api/projects`)  // Change type to Project[]
      .pipe(
        tap((response) => console.log('API Response:', response)),
        map((response) => {
          console.log('Extracted Data:', response);
          return response;  // Return the array directly
        })
      );
  }
  getSingle(){}
}