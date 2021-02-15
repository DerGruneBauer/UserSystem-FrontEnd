import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  profileUser: any[] = [];

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = 'http://localhost:80/users';

  getUsers(){
    return this.httpClient.get(this.apiUrl, { responseType: "json" });
  }

  getUser(id: number) {
    return this.httpClient.get(`http://localhost:80/users/${id}`, { responseType: "json" });
  }
  getProfilePic(name: string) {
    return this.httpClient.get(`http://localhost:80/images/${name}`, { responseType: "blob" });
  }

  updateUser(value, id: number) {
    console.log(id);
    console.log(value);
    return this.httpClient.put(`http://localhost:80/users/${id}`, {fName: value}, { responseType: "json" } );
  }

  createUser(fName: string, lName: string, email: string, password: string) {
    return this.httpClient.post("http://localhost:80/users/", {fName: fName, lName: lName, email: email, password: password }, { responseType: "json" } );
    // THIS WORKS!
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`http://localhost:80/users/${id}`, { responseType: "json" } );
  }

  setProfileUser(user) {
    this.profileUser.push(user);
    if (this.profileUser.length > 1){
      this.profileUser.splice(0, 1);
      return this;
    } else {
      return this;
    }

  }

  logOut() {
    this.profileUser = [];
  }

  getProfileUser() {
    return this.profileUser;
  }

}
