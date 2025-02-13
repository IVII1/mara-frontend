import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';

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
onSubmit(): void {
  if (this.form.valid) {
    this.messageService
      .sendMessage(this.form.value)
      .subscribe({
        next: () => {
          this.message = 'Message sent, thank you!';
          this.form.reset(); // Reset the form to its initial state
          this.form.markAsPristine(); // Mark the form as pristine
          this.form.markAsUntouched(); // Mark the form as untouched
        },
        error: () => {
          this.message = 'An error occurred while sending the message.';
        },
      });
  } else {
    this.message = 'Form is invalid, please fill out all the required fields.';
  }
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
