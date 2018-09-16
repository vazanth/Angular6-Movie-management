import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {AppMaterialModule} from './material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { rootRouterConfig } from './app.route';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from './auth/auth.service';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';

export const fireBaseConfig = {
    apiKey: 'AIzaSyAaPAUuX4EGsEWh1lDuPzXw_CoQa0_9aiY',
    authDomain: 'myapp-6794.firebaseapp.com',
    databaseURL: 'https://myapp-6794.firebaseio.com',
    projectId: 'myapp-6794',
    storageBucket: '',
    messagingSenderId: '1048991363877'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    BrowseMoviesComponent
  ],
  imports: [
    RouterModule.forRoot(rootRouterConfig),
    BrowserModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    CommonModule,
    AppMaterialModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(fireBaseConfig)
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
