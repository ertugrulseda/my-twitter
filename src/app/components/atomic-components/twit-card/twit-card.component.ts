import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-twit-card',
  templateUrl: './twit-card.component.html',
  styleUrls: ['./twit-card.component.scss']
})
export class TwitCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  get avatarImg(){
    
    return '';
  }
}
