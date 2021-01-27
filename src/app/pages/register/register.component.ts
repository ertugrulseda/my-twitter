import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service'; 

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	name: string = '';
	email: string = '';
	password: string = '';
	
	constructor(
		private registerSer: AuthenticationService
	) {}

	ngOnInit(): void {} 
	register() {
		this.registerSer.register(this.name,this.email,this.password);		
	}
	get alert() {
		return 'this.loginSer.errorMsg;';
	}
}
