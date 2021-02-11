import { Component, OnInit } from '@angular/core';
import { LogInService } from '../log-in.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private logInService: LogInService) { }

  ngOnInit(): void {
  }


  getUser() {
    let x = document.querySelector('.emailInput') as HTMLInputElement;
    let email = x.value;
    this.logInService.getUser(email).subscribe((data) => {
      console.log(data);
    })
  }

}
