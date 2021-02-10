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

  updateUser(value, id: number) {
    console.log(id);
    console.log(value);
    return this.httpClient.put(`http://localhost:80/users/${id}`, {fName: value}, { responseType: "json" } );
  }

  createUser() {
    return this.httpClient.put("http://localhost:80/users/", {fName: "doge"}, { responseType: "json" } );
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`http://localhost:80/users/${id}`, { responseType: "json" } );
  }

  // addUser(newUser){
  //   return this.httpClient.post(this.apiUrl, {fName: example }, { responseType: "json" })
  // }

}
