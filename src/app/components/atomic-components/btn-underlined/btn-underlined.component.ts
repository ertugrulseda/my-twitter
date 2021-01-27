import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-btn-underlined',
	templateUrl: './btn-underlined.component.html',
	styleUrls: [ './btn-underlined.component.scss' ]
})
export class BtnUnderlinedComponent implements OnInit {
	@Input() name: string = '';
	@Input() id: string = '';

	constructor() {}

	ngOnInit(): void {}

	clicked() {
		console.log('Clicked');
	}
}
