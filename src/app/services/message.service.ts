import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  sendMessage(data: any ){
    const url = `${environment.apiBaseUrl}/api/messages`
    return this.http.post<Message>(url, data)
  }
}
