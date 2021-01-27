import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from '../atomic-components/my-modal';

@Component({
	selector: 'app-home-left',
	templateUrl: './home-left.component.html',
	styleUrls: [ './home-left.component.scss' ]
})
export class HomeLeftComponent implements OnInit {
	imageSource = null;
	srcImageForUpload = null;
	constructor(
		private modalService: ModalService,
		private authServis: AuthenticationService,
    private userServis: UserService
	) {}

	ngOnInit(): void {}
	notifyClicked() {
		console.log('notify');
	}
	openModal(id: string) {
		this.modalService.open(id);
	}
	closeModal(id: string) {
		this.modalService.close(id);
	}

	uploadImage() {
		//avatar compoenentteki file'ı nasıl alırım ??
		const file = this.userServis.profileImageFile;
		this.userServis.uploadProfileImage(file);
		//console.log('User ' + this.authServis.user.username);
	}
}
