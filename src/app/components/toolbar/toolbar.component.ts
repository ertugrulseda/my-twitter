import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private loginServis : LoginService
  ) { }

  public get User(){
    return this.loginServis.user;
  }
  get isAuthenticated() {
    return !!this.loginServis.jwt;
  }
  
  logout(){
    this.loginServis.user = null;
    this.loginServis.jwt ="";
    console.log("Logout")
  }
 
  ngOnInit(): void {
  }

}
