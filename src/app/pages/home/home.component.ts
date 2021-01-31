import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router,
              private autSer :AuthenticationService) {
  
	}

	ngOnInit(): void {
    const user = this.autSer.user;
		if (!user) {
			this.router.navigateByUrl('/login');
		}
  }
}
