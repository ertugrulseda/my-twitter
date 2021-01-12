import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service'; 

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
		private registerSer: RegisterService
	) {}

	ngOnInit(): void {} 
	register() {
		this.registerSer.register(this.name,this.email,this.password);		
	}
	get alert() {
		return 'this.loginSer.errorMsg;';
	}
}
