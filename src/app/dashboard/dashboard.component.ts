import { Component, OnInit } from '@angular/core';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: object;

  constructor(private logInService: LogInService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.logInService.getUsers().subscribe((data) => {
      this.users = data;

    })
  }

  // get users() {
  //   console.log(this.logInService.getUsers());
  //   return this.logInService.getUsers();
  // }


  //Both work after refreshing page.
  updateUser(id: number) {
    let x = document.querySelector('.changeName') as HTMLInputElement;
    let value = x.value;
    this.logInService.updateUser(value, id).subscribe((data) => {
      console.log(data);
    })
  }

  deleteUser(id: number) {
    this.logInService.deleteUser(id).subscribe((data) => {
      console.log(data);
    })
  }

}
