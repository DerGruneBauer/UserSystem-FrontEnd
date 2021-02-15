import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<void>();

  users;

  constructor(private logInService: LogInService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  closePopUp = () => {
    this.closeEvent.emit();
  };

  getUserByEmail() {
    let x = document.querySelector('.emailInput') as HTMLInputElement;
    let y = document.querySelector('.passwordInput') as HTMLInputElement;
    let error = document.querySelector('.errorMessage') as HTMLElement;
    let password = y.value;
    let email = x.value;
    
    for (let user in this.users) {
      if (email.toLowerCase() == this.users[user].email.toLowerCase()) {
          if (password == this.users[user].password.toLowerCase()) {
            console.log("congrats on signing in");
            let index = parseInt(user);
            this.logInService.getUser(index).subscribe((data) => {
              this.logInService.setProfileUser(data);
              this.router.navigateByUrl('/profile');
              this.closePopUp();
        })
          } else {
            console.log("not the correct password");
            error.style.display = "inline-block";
          }
        return;
      } 
    }
    console.log("No user could be found with that email and password combination.");
    error.style.display = "inline-block";
  }

  getUsers() {
    this.logInService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }

}
