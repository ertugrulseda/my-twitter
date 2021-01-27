import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: [ './avatar.component.scss' ]
})
export class AvatarComponent implements OnInit {
	@Input() name: string = '';
	@Input() class: string = 'profile-picture-dump';
	selectedProfileImage = null;
	srcImage = null;

	constructor(private userServis: UserService) {}


	ngOnInit(): void {}

  
  setImage(event) {
    const file = event.target.files[0];
		if (file) {
			this.selectedProfileImage = file;
			console.log('User Servis Fİle ' + file.name);
			const reader = new FileReader();
			reader.onload = () => {
        this.srcImage = reader.result;
        console.log("User Servis srcImage "+this.srcImage);
      };
      this.userServis.setProfileImageFile(file);
      reader.readAsDataURL(file);
      
		}
	}
}
