import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  isEmailOccupied = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  register() {
    this.isEmailOccupied = false;
    this.authService.registerUser(this.loginForm.value.email, this.loginForm.value.name, this.loginForm.controls.password.value)
      .subscribe( () => {
        this.router.navigate(['/chat']).then();
      }, error => {
        if (error.status === 422) {
          this.isEmailOccupied = true;
        }
      });
  }

  isEmailInvalid() {
    return  this.loginForm.controls.email.invalid && this.loginForm.controls.email.touched && this.loginForm.controls.email.dirty;
  }

  isEmailRequired() {
    return this.loginForm.controls.email.errors.required;
  }

  emailOccupiedClass() {
    return this.isEmailOccupied ? 'email-occupied' : '';
  }

  isEmailError() {
    return this.loginForm.controls.email.errors.email;
  }

  isNameInvalid() {
    return  this.loginForm.controls.name.invalid && this.loginForm.controls.name.touched && this.loginForm.controls.name.dirty;
  }

  isNameRequired() {
    return this.loginForm.controls.name.errors.required;
  }

  isPasswordInvalid() {
    return  this.loginForm.controls.password.invalid && this.loginForm.controls.password.touched && this.loginForm.controls.password.dirty;
  }

  isPasswordRequired() {
    return this.loginForm.controls.password.errors.required;
  }

  isPasswordSmall() {
    return this.loginForm.controls.password.errors.minlength;
  }

}
