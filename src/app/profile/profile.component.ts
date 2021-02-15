import { Component, OnInit } from '@angular/core';
import { LogInService } from '../log-in.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileUser;
  profilePic;
  examples: string[] = ["Learn Javascript", "Learn Node.JS", "Learn C#", "Learn HTML"];
  constructor(private logInService: LogInService) { }

  ngOnInit(): void {
    this.getProfileUser();
  }

  getProfileUser() {
    this.profileUser = this.logInService.getProfileUser();

    this.logInService.getProfilePic(this.profileUser[0].pic).subscribe((data) => {
      this.profilePic = URL.createObjectURL(data);
      
    })
    
  }

}
