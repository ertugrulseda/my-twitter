import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	username: string = '';
	password: string = '';

	constructor(private authSer: AuthenticationService, private router: Router) {}

	ngOnInit(): void {}

	login() {
		this.authSer.login(this.username, this.password);
		this.username = '';
		this.password = '';
	}
	get alert() {
		return this.authSer.errorMsg;
	}
}
