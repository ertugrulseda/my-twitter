import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {
	urlForRegister: string = 'http://localhost:1337/auth/local/register';
	user: any = null;
	jwt: string = null;

  constructor(private router: Router, private http: HttpClient) {}
  
	setUser(data: any) {
		this.user = data.user;
		this.jwt = data.jwt;
		window.localStorage.setItem('jwt', this.jwt);
    this.router.navigateByUrl('/');
    console.log('jwt'+this.jwt);
	}

	register(
    name: string ,
    email: string,
    password: string 
  ) {
		this.http
			.post(this.urlForRegister, {
				username: name,
				email: email,
				password: password
			})
			.subscribe((resp) => this.setUser(resp));
	}
}
