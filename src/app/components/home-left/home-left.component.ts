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
	srcImage = null;
	srcImageUpdated = null;
	uploadedMessage = "";
	placeholderImg: string = 'data:image/png;base64,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';
	constructor(
		private modalService: ModalService,
		private userServis: UserService,
		private authService: AuthenticationService
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

	public get imageSource() {
		if(this.srcImageUpdated){
			this.srcImage = this.srcImageUpdated;
		} else {
			console.log("this.authService.user " +this.authService.user);
			this.srcImage = this.authService.user.profileImage
			? `http://localhost:1337${this.authService.user.profileImage.url}`
			: null;
		}	
		const img = this.srcImage ? this.srcImage : this.placeholderImg;
		console.log('HomeLeft ' + img);
		return img;
	}
	uploadImage() {
		const file = this.userServis.profileImageFile;
		this.userServis.uploadProfileImage(file);
		this.uploadedMessage = "Resim Yüklendi";
	}

	setImage(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				this.srcImageUpdated = reader.result;
			};
			this.userServis.setProfileImageFile(file);
			reader.readAsDataURL(file);
		}
	}

	setUser() {
		if (this.authService.user.id) {
			const userId = this.authService.user.id;
			this.userServis.readUser(userId);
			/**
			 * 	this.srcImage = !!this.authService.user
			? `http://localhost:1337${this.authService.user.profileImage.url}`
			: null;
			 */
		}
	}
}
