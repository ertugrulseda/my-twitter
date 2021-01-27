import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-standart',
  templateUrl: './btn-standart.component.html',
  styleUrls: ['./btn-standart.component.scss']
})
export class BtnStandartComponent implements OnInit {
  @Input() id :string = '' ;
  @Input() name :string=''; 
  constructor() { }

  ngOnInit(): void {
  }
}
