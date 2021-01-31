import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	usersURL: string = 'http://localhost:1337/users/';
	uploadURL: string = 'http://localhost:1337/upload/';
	profileImageFile = null;
	user = null;

	constructor(private http: HttpClient, private auth: AuthenticationService) {}

	setProfileImageFile(file) {
		this.profileImageFile = file;
	}

	uploadProfileImage(file) {
		const token = window.localStorage.getItem('jwt');
		const userId = this.auth.user.id;
		const options = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		if (file) {
			const formData = new FormData();
			formData.append('files', file, file.name);
			this.http.post(this.uploadURL, formData, options).subscribe((data) => {
				const imageId = data[0].id;
				const updatedUser = {
					profileImage: imageId
				};
				this.http.put(this.usersURL + userId, updatedUser, options).subscribe((data) => {
					console.log('User Put ' + data);
				});
			});
			
		}
	}
	readUser(id :string) {
		this.http.get(this.usersURL + id).subscribe((data) => console.log("User Servisi "+ data));
	}
}
