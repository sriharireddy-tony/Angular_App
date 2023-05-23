import { DatePipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../Shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

selectedCountry: any='';
signupFlag:string='none';
signinFlag:string='none';
countries = [{ name: 'Andhra Pradesh'},{ name: 'Telangana'},{ name: 'Karnataka'},{ name: 'Tamilnadu'},{ name: 'Kerala'},
  { name: 'Goa'},{ name: 'Maharashtra'},{ name: 'Gujarath'},{ name: 'Rajasthan'},{ name: 'Madhya Pradhesh'}];

signupForm = this.fb.group({
  name:['',Validators.required],
  teamName:[''],
  email:['',Validators.required],
  mobileNo:['',Validators.required],
  password:['',Validators.required],
  cPassword: ['',Validators.required],
  dob:['',Validators.required],
  city:[''],
  state:['',Validators.required],
  gender:[''],
  isAgree: ['',Validators.required]
})

  constructor(private fb:FormBuilder, private datepipe: DatePipe, private service:ApiService) { }

  ngOnInit(): void {
  }
  signUp(){
    this.signupFlag = 'block';
    const body: any = document.querySelector("body");
    body.style.overflow = "hidden";
  }
  closeSignup(){
    this.signupFlag = 'none';
    const body: any = document.querySelector("body");
    body.style.overflow = "auto";
  }
  signIn(){
    this.signinFlag = 'block';
    const body: any = document.querySelector("body");
    body.style.overflow = "hidden";
  }
  closeSignin(){
    this.signinFlag = 'none';
    const body: any = document.querySelector("body");
    body.style.overflow = "auto";
  }
  footSignup(){
    this.closeSignin();
    this.signUp();
  }
  footSignin(){
    this.closeSignup();
    this.signIn();
  }
  signupClear(){
    this.signupForm.reset();
  }
  submitSignupForm(){
   let obj = {
    name : this.signupForm.controls['name'].value,
    teamName : this.signupForm.controls['teamName'].value,
    email : this.signupForm.controls['email'].value,
    mobileNo : this.signupForm.controls['mobileNo'].value,
    password : this.signupForm.controls['password'].value,
    dob : this.datepipe.transform(this.signupForm.controls['dob'].value, 'dd-MM-yyyy'),
    city : this.signupForm.controls['city'].value,
    state : this.signupForm.controls['state'].value==null ? '' : this.signupForm.controls['state'].value.name,
    gender : this.signupForm.controls['gender'].value
   }

   this.service.signUp(obj).subscribe({
    next: (response:any) => {
     alert('saved')
    },
    error: (error) => {
     alert('Error occured')
    }
  })
  }

  }
