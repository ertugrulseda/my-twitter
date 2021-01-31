import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private authServis : AuthenticationService
  ) { }

  public get User(){
    return this.authServis.user;
  }
  get isAuthenticated() {
    return !!this.authServis.jwt;
  }
  
  get avatarImg(){
    
    return this.authServis.user.profileImage ? this.authServis.user.profileImage.url : null;
  }

  logout(){
    this.authServis.user = null;
    this.authServis.jwt ="";
  }
 
  ngOnInit(): void {
  }

}
