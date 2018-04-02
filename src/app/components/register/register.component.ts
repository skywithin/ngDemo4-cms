import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userExists: boolean = false;
  displayMsgTimeout: number = 2000;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.router.navigateByUrl('');
    }
  }

  register({value, valid}){
    if (valid) {
      value.isAdmin = "no";
      this.userService.register(value).subscribe(response => {
        if (response == 'userExists') {
          this.userExists = true;
          setTimeout(function() {
            this.errorMsg = false;
          }.bind(this), this.displayMsgTimeout)
        } else {
          // Success
          localStorage.setItem("userRegistered", "true");
          this.router.navigateByUrl('login');
        }
      });
    } else {
      console.log('Form is not valid.')
    }
  }

}
