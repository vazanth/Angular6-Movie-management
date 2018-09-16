import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Log in to Application';
  loginDetails: FormGroup;
  showLogin  = false;
  showLogout  = true;
  showSignup  = false;
  constructor(private formbuilder: FormBuilder, private as: AuthService, private route: Router) { }

  ngOnInit() {
    this.loginDetails = this.formbuilder.group({
      userName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])]
    });
  }

  clearForm() {
    this.loginDetails.reset();
  }

  submit(value) {
    this.as.login(value.userName, value.password).then((res) => {
      this.route.navigate(['/bmovie']);
    },(err)=>{
      console.log('Error', err);
    })
  }

  tryGoogleLogin() {
    this.as.googleLogin().then((res)=>{
      this.route.navigate(['/bmovie']);
    },(err)=>{
      console.log('Error', err);
    })
}
  logout() {
    this.as.logoutfromGoogle()
      .then((res) => {
        this.route.navigate(['/home']);
      }, (error) => {
        console.log('Logout error', error);
      });
   // this.route.navigate(['/home']);
  }
}
