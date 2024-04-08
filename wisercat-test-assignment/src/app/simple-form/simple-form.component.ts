import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MessageComponent],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css'
})
export class SimpleFormComponent {
  nameForm: FormGroup;

  constructor () {
      this.nameForm = new FormGroup({
        firstName: new FormControl("", [Validators.pattern("^[a-zžšõäöüA-ZŽŠÕÄÖÜ'-]+$")]),
        surname: new FormControl("", [Validators.pattern("^[a-zžšõäöüA-ZŽŠÕÄÖÜ'-]+$")]),
        email: new FormControl("", [Validators.email]),
        workingExperience: new FormControl("", [Validators.pattern("^[0-9,]+$")]),
      });
  }

  onSubmit() {
    // Check if the form is valid before submitting
    if (this.nameForm.valid) {
      // Form is valid, perform form submission logic here
      console.log("Form submitted successfully!");
    } else {
      // Form is invalid, handle invalid form state
      console.log("Form is invalid, please check fields.");
    }
  }
  
  get firstName() {
    return this.nameForm.get('firstName');
  }
  get surname() {
    return this.nameForm.get('surname');
  }
  get email() {
    return this.nameForm.get('email');
  }
  onChange(event: any) {
    console.log(event.target.value);
  }
}

