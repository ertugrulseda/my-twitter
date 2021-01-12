import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	username: string = '';
	password: string = '';

	constructor(private loginSer: LoginService, private router: Router) {}

	ngOnInit(): void {}

	login() {
		this.loginSer.login(this.username, this.password);
		this.username = '';
		this.password = '';
	}
	get alert() {
		return this.loginSer.errorMsg;
	}
}
