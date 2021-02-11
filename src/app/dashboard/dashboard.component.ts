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
    
  }

  getUsers() {
    this.logInService.getUsers().subscribe((data) => {
      this.users = data;

    })
  }

  createUser() {
    let first = document.querySelector('.fNameInput') as HTMLInputElement;
    let last = document.querySelector('.lNameInput') as HTMLInputElement;
    let mail = document.querySelector('.emailInput') as HTMLInputElement;
    let fName = first.value;
    let lName = last.value;
    let email = mail.value;

    this.logInService.createUser(fName, lName, email).subscribe((data) => {
      console.log(data);
    })
  }


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
