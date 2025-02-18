import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
constructor(private messageService: MessageService){}

form = new FormGroup({
  name: new FormControl('',{
    validators: [Validators.required, Validators.max(30)]
  }),
  email: new FormControl('', {
    validators:[Validators.required, Validators.email]
  }),
  subject: new FormControl('',{
    validators: [Validators.required]
  }),
  content: new FormControl('',{
    validators: [Validators.required]
  }),
})
message!: string
loading!: boolean;
onSubmit(): void {
  if (this.form.invalid) {
    this.message = 'Please fill out all required fields.';
    return;
  }

  this.loading = true;
  this.message = '';

  this.messageService.sendMessage(this.form.value)
    
    .subscribe({
      next: (response) => {
        if (response) {
          this.message = 'Message sent successfully!';
          this.form.reset();
          this.form.markAsPristine();
          this.form.markAsUntouched();
        }
        this.loading = false; 
      },
      error: () => {
        this.loading = false; 
        this.message = 'Failed to send message. Please try again later.';
      }
    });
}

get nameIsInvalid(){
  return this.form.controls.name.touched && 
  this.form.controls.name.dirty && 
  this.form.controls.name.invalid
}
get emailIsInvalid(){
  return this.form.controls.email.touched && 
  this.form.controls.email.dirty && 
  this.form.controls.email.invalid
}
get subjectIsInvalid(){
  return this.form.controls.subject.touched && 
  this.form.controls.subject.dirty && 
  this.form.controls.subject.invalid
}
get messageIsInvalid(){
  return this.form.controls.content.touched && 
  this.form.controls.content.dirty && 
  this.form.controls.content.invalid
}
}
