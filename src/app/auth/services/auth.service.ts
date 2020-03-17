import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(email: string, name: string, password: string): Observable<any> {
    return this.http.post('//localhost:3000/api/auth/register', {email, name, password})
      .pipe(
        map((value: {token: string; name: string}) => {
          localStorage.setItem('token', value.token);
          localStorage.setItem('user', value.name);
          return value;
        })
      );
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post('//localhost:3000/api/auth/login', {email, password})
      .pipe(
        map((value: {token: string; name: string}) => {
          localStorage.setItem('token', value.token);
          localStorage.setItem('user', value.name);
          return value;
        })
      );
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']).then();
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
