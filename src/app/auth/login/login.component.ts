import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isAuthError = false;

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
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  login() {
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.controls.password.value).subscribe( () => {
      this.router.navigate(['/chat']).then();
    }, () => {
      this.isAuthError = true;
    });
  }

  isEmailInvalid() {
    return  this.loginForm.controls.email.invalid && this.loginForm.controls.email.touched && this.loginForm.controls.email.dirty;
  }

  isEmailRequired() {
    return this.loginForm.controls.email.errors.required;
  }

  isEmailError() {
    return this.loginForm.controls.email.errors.email;
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
