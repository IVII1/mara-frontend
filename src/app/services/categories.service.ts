import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/categories.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private http: HttpClient) { }

  getCategories(){
    return this.http.get<Categories[]>(`${environment.apiBaseUrl}/api/categories`)
  }
  
}
