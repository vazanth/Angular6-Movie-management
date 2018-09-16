import { Injectable } from '@angular/core';
import { AngularFireModule, FirebaseAuth } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs';
import { from } from 'rxjs';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authstate: any
  constructor(private af: AngularFireAuth, private route: Router, private AngDB: AngularFireDatabase ) { 
    this.af.authState.subscribe((value)=>{
      this.authstate = value;
    });
  }

  signup(email, password) {
    return new Promise((resolve, reject) => {
      this.af.auth.createUserWithEmailAndPassword(email, password)
      .then((res) =>{
        console.log('Success');
        resolve();
      },(err) =>{
        console.log('error');
        reject();
      })
    })
  }

  login(userName, password) {
    console.log('username:', userName , 'password:', password);
   return new Promise((resolve, reject) => {
      this.af.auth.signInWithEmailAndPassword(userName, password)
      .then((res) =>{
        this.authstate=res;
        resolve();
      },(err)=>{
        this.authstate = null;
        console.log(err);
        reject();
      })
    })
  }

  googleLogin(){
    return new Promise((resolve, reject) =>{
      let provider = new firebase.auth.GoogleAuthProvider();
      this.af.auth.signInWithPopup(provider).then(res=>{
        resolve();
      }, err =>{
        reject();
      })
    })
   // var observableFromPromise = fromPromise(promiseSrc);
    /*let provider = new firebase.auth.GoogleAuthProvider();
    let login= this.af.auth.signInWithPopup(provider);
    var observable =  from(login);
    return observable;*/
  }

  logoutfromGoogle() {
    return new Promise((resolve, reject) => {
      this.af.auth.signOut().then((res) => {
         window.location.assign('https://accounts.google.com/logout');
        document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:4200/home"
        resolve();
      },(err)=>{
        reject();
      }
      )
    });
  }

  /*getdetails() {
    const value = this.AngDB.list('/userdetails').valueChanges();
    console.log(value);
  }*/
}
