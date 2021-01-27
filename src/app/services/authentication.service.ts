import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService  {
	urlForRegister: string = 'http://localhost:1337/auth/local/register';
	jwt: string = '';
	user: any = '';
	errorMsg: string = '';

	constructor(private http: HttpClient, private router: Router) {}

	login(username: string, pass: string) {
		this.http
			.post('http://localhost:1337/auth/local', {
				identifier: username,
				password: pass
			})
			.subscribe((data: any) => {
        this.setUser(data)
				this.errorMsg = '';			
			}, (err) => (this.errorMsg = err.error.data[0].messages[0].message));
	}

  register(name: string, email: string, password: string) {
		this.http
			.post(this.urlForRegister, {
				username: name,
				email: email,
				password: password
			})
			.subscribe((resp) => this.setUser(resp));
  }
  
	setUser(data: any) {
		this.user = data.user;
		this.jwt = data.jwt;
		window.localStorage.setItem('jwt', this.jwt);
		this.router.navigateByUrl('/home');
		console.log('jwt' + this.jwt);
		console.log('user auth' +  data.user.username);
	}


}
