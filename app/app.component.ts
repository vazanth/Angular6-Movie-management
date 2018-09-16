import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLogin = true;
  showLogout = false;
  showSignup = true;
  title = 'Movie DataBase';
  footer = 'Movie Database © 2018. All Rights Reserved.';
  constructor(){};
}
  // @ViewChild(BrowseMoviesComponent) childValueLogout;
  // @ViewChild(BrowseMoviesComponent) childValueSignup;
    // this.showLogin = this.child.cshowLogin;
   // this.showLogout = this.childValueLogout.showLogout;
    // this.showSignup = this.childValueSignup.showSignup;