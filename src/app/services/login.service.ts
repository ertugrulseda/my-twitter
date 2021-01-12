import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	jwt: string = '';
	user: any = '';
	errorMsg: string = '';


	constructor(private http: HttpClient,
		private router :Router) {}

	login(username: string, pass: string) {
		this.http
			.post('http://localhost:1337/auth/local', {
				identifier: username,
				password: pass
			})
			.subscribe((data: any) => {
				this.jwt = data.jwt;
				console.log("Jwt "+this.jwt)
				this.user = data.user;
				window.localStorage.setItem('jwt', data.jwt);
				this.errorMsg = '';
				this.router.navigateByUrl('/home');
			}, (err) => (this.errorMsg = err.error.data[0].messages[0].message));
			
	}
}
