import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	usersURL: string = 'http://localhost:1337/users/';
  uploadURL: string = 'http://localhost:1337/upload/';
  profileImageFile = null; 

	constructor(private http: HttpClient) {}

 setProfileImageFile(file){
  this.profileImageFile = file;
  console.log("profileImageFile  " + this.profileImageFile);
 }
	uploadProfileImage(file) {
		const token = window.localStorage.getItem('jwt');
		const options = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		if (file) {
			const formData = new FormData();
			formData.append('files', file, file.name);
			this.http.post(this.uploadURL, formData, options).subscribe((data) => console.log(data));
			console.log('uploadProfileImage çalışıyore');
		}
	}
}
