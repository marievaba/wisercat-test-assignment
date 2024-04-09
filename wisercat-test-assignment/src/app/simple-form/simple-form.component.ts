import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageComponent } from '../message/message.component';
import { workingExperienceValidator } from '../validator/workExperienceValidator';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MessageComponent],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css'
})
export class SimpleFormComponent {
  nameForm: FormGroup;
  userClickedSubmit: boolean = false;
  userClickedReset: boolean = false;

  constructor() {
    this.nameForm = new FormGroup({
      firstName: new FormControl("", [Validators.pattern("^[ a-zžšõäöüA-ZŽŠÕÄÖÜ'-]+$"), Validators.required]),
      surname: new FormControl("", [Validators.pattern("^[ a-zžšõäöüA-ZŽŠÕÄÖÜ'-]+$"), Validators.required]),
      email: new FormControl("", [Validators.email, Validators.required]),
      workingExperience: new FormControl("", [workingExperienceValidator(1), Validators.required]),
    });
  }

  onSubmit() {
    if (this.nameForm.valid) {
    } else {
    }
    this.userClickedSubmit = true;
    this.userClickedReset = false;
  }

  onReset() {
    this.nameForm.reset();
    this.userClickedReset = true;
    this.userClickedSubmit = false;
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
  get workingExperience() {
    return this.nameForm.get('workingExperience');
  }
  onChange(event: any) {
    console.log(this.workingExperience?.errors);
  }
}

