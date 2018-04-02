import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed: boolean = false;
  userRegistered: boolean = false;
  displayMsgTimeout: number = 2000;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.router.navigateByUrl('');
    }
    
    if (localStorage.getItem("userRegistered")) {
      this.userRegistered = true;
      localStorage.removeItem("userRegistered");
    }
  }

  login({value, valid}){
    if (valid) {
      this.userService.login(value).subscribe(response => {
        if (response == 'invalidLogin') {
          this.loginFailed = true;
          setTimeout(function() {
            this.loginFailed = false;
          }.bind(this), this.displayMsgTimeout)
        } else {
          // Success
          localStorage.setItem("user", JSON.stringify(response));

          if (localStorage.getItem("user") === "\"admin\"") {
            this.router.navigateByUrl('admin/pages');
          } else {
            this.router.navigateByUrl('');
          }
        }
      });
    } else {
      console.log('Form is not valid.')
    }
  }
}
