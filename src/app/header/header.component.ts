import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileUser;

  showLogIn: boolean = false;
  constructor(private logInService: LogInService, private router: Router) { }

  ngOnInit(): void {
    this.getProfileUser();
  }
    
  closePopUp(){
    this.showLogIn = false;
    this.getProfileUser();
  }

  getProfileUser() {
    this.profileUser = this.logInService.getProfileUser();
  }

  logOut() {
    this.profileUser = [];
    this.logInService.logOut();
    this.router.navigateByUrl('/home');
  }

}
