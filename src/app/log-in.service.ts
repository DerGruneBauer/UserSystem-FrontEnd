import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = 'http://localhost:80/users';

  getUsers(){
    return this.httpClient.get(this.apiUrl, { responseType: "json" });
  }

  getUser(email) {
    return this.httpClient.get(`http://localhost:80/users/${email}`, { responseType: "json" });
  }

  updateUser(value, id: number) {
    console.log(id);
    console.log(value);
    return this.httpClient.put(`http://localhost:80/users/${id}`, {fName: value}, { responseType: "json" } );
  }

  createUser(fName: string, lName: string, email: string) {
    return this.httpClient.post("http://localhost:80/users/", {fName: fName, lName: lName, email: email }, { responseType: "json" } );
    // THIS WORKS!
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`http://localhost:80/users/${id}`, { responseType: "json" } );
  }

}
