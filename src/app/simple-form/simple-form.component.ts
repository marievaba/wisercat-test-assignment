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
  focusedInput: string | null = null;

  constructor() {
    this.nameForm = new FormGroup({
      firstName: new FormControl("", [Validators.pattern("^[ a-zžšõäöüA-ZŽŠÕÄÖÜ'-]+$"), Validators.required]),
      surname: new FormControl("", [Validators.pattern("^[ a-zžšõäöüA-ZŽŠÕÄÖÜ'-]+$"), Validators.required]),
      email: new FormControl("", [Validators.email, Validators.required]),
      workingExperience: new FormControl("", [workingExperienceValidator(1), Validators.required]),
    });
  }

  isFirstNameValid() {
    if (!this.firstName || !this.firstName.value) {
      return false;
    }
    if (this.firstName.value.trim().length === 0) {
      return false;
    }
    if (this.firstName.errors) {
      if (this.firstName.errors['required']) {
        return false;
      }
      if (this.firstName.errors['pattern']) {
        return false;
      }
    }
    return true;
  }

  isSurnameValid() {
    if (!this.surname || !this.surname.value) {
      return false;
    }
    if (this.surname.value.trim().length === 0) {
      return false;
    }
    if (this.surname.errors) {
      if (this.surname.errors['required']) {
        return false;
      }
      if (this.surname.errors['pattern']) {
        return false;
      }
    }
    return true;
  }

  isEmailValid() {
    if (!this.email || !this.email.value) {
      return false;
    }
    if (this.email.errors) {
      if (this.email.errors['required']) {
        return false;
      }
      if (this.email.errors['email']) {
        return false;
      }
    }
    return true;
  }

  isWorkingExperienceValid() {
    if (!this.workingExperience || !this.workingExperience.value) {
      return false;
    }
    if (this.workingExperience.errors) {
      if (this.workingExperience.errors['required']) {
        return false;
      }
      if (this.workingExperience.errors['workingExperience']) {
        return false;
      }
    }
    return true;
  }

  onBlur() {
    this.focusedInput = null;
  }

  onFocus(id: string) {
    this.focusedInput = id;
  }

  showSubmitMessage() {
    this.hideMessages();
    const errorMessage = document.getElementById("app-message-error")!;
    const successMessage = document.getElementById("app-message-success")!;
    if (this.isFirstNameValid() && this.isSurnameValid() && this.isEmailValid() && this.isWorkingExperienceValid()) {
      successMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'block';
    }
  }

  showResetMessage() {
    this.hideMessages();
    const infoMessage = document.getElementById("app-message-info")!;
    infoMessage.style.display = 'block';
  }

  hideMessages() {
    document.getElementById("app-message-error")!.style.display = 'none';
    document.getElementById("app-message-success")!.style.display = 'none';
    document.getElementById("app-message-info")!.style.display = 'none';
  }

  handleClose = () => {
    this.hideMessages();
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

}
