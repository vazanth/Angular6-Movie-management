import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import {Router} from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'Create a New Account';
  signupDetails: FormGroup;
  constructor(private formbuilder: FormBuilder, private as: AuthService, 
    private AngDB: AngularFireDatabase, private route: Router){}
  ngOnInit(){
    this.signupDetails=this.formbuilder.group({
      FirstName:['',Validators.compose([
        Validators.required
      ])],
      SurName: ['',Validators.compose([
        Validators.required
      ])],
      Email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      Password:['', Validators.compose([
        Validators.required
      ])],
      DOB: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  createDetailObj(signupDetails){
    const details: any = {
      FirstName: signupDetails.FirstName,
      SurName: signupDetails.SurName,
      Email: signupDetails.Email,
      DOB: JSON.stringify(signupDetails.DOB).slice(1,11)
    }
    return details;
  }

  submit(signupDetails){
    let details=this.createDetailObj(signupDetails);
     this.AngDB.list('/userdetails').push(details).key;
    this.as.signup(signupDetails.Email, signupDetails.Password).
    then((success)=>{
      console.log('Signup is Sucess');
      this.route.navigate(['/login']);
    })
   // this.as.getdetails();
  }
}
