import { DatePipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ApiService } from '../Shared/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signupForm!: FormGroup;
  signinForm!: FormGroup;

  signupFlag: string = 'none';
  signinFlag: string = 'none';
  countries = [{ name: 'Andhra Pradesh' }, { name: 'Telangana' }, { name: 'Karnataka' }, { name: 'Tamilnadu' }, { name: 'Kerala' },
  { name: 'Goa' }, { name: 'Maharashtra' }, { name: 'Gujarath' }, { name: 'Rajasthan' }, { name: 'Madhya Pradhesh' }];
  signupSubm: boolean = false;
  signinSubm: boolean = false;

  get email() {
    return this.signupForm.get('email');
  }
  get name() {
    return this.signupForm.get('name');
  }
  get mobileNo() {
    return this.signupForm.get('mobileNo');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get cPassword() {
    return this.signupForm.get('cPassword');
  }
  get dob() {
    return this.signupForm.get('dob');
  }
  get isAgree() {
    return this.signupForm.get('isAgree');
  }

  constructor(private fb: FormBuilder, private datepipe: DatePipe, private service: ApiService, private toastr: ToastrService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      teamName: [''],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, this.mobileNumberValidator]],
      password: ['', Validators.required],
      cPassword: ['', Validators.required],
      dob: ['', Validators.required],
      city: [''],
      state: ['', Validators.required],
      gender: [''],
      isAgree: ['', Validators.required],
      isAdmin: ['']
    }, {
      validator: this.passwordMatchValidator()
    })

    this.signinForm = this.fb.group({
      loginemail: ['', Validators.required],
      loginpassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  mobileNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && !/^\d{10}$/.test(value)) {
      return { 'invalidMobileNumber': true };
    }
    return null;
  }
  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.get('password');
      const confirmPassword = control.get('cPassword');

      return password && confirmPassword && password.value !== confirmPassword.value
        ? { 'passwordMismatch': true }
        : null;
    };
  }

  signUp() {
    this.signupFlag = 'block';
    const body: any = document.querySelector("body");
    body.style.overflow = "hidden";
  }
  closeSignup() {
    this.signupFlag = 'none';
    this.signupSubm = false;
    const body: any = document.querySelector("body");
    body.style.overflow = "auto";
  }
  signIn() {
    this.signinFlag = 'block';
    const body: any = document.querySelector("body");
    body.style.overflow = "hidden";
  }
  closeSignin() {
    this.signinFlag = 'none';
    const body: any = document.querySelector("body");
    body.style.overflow = "auto";
  }
  footSignup() {
    this.closeSignin();
    this.signUp();
    this.loginClear();
  }
  footSignin() {
    this.closeSignup();
    this.signIn();
    this.signupClear();
  }
  signupClear() {
    this.signupForm.reset();
  }
  loginClear() {
    this.signinForm.reset();
  }

  submitSignupForm() {
    if (this.signupForm.invalid) {
      this.toastr.warning('Please enter all mandatory fields!');
      this.signupSubm = true;
      return;
    }
    let obj = {
      name: this.signupForm.controls['name'].value,
      teamName: this.signupForm.controls['teamName'].value,
      email: this.signupForm.controls['email'].value,
      mobileNo: this.signupForm.controls['mobileNo'].value,
      password: this.signupForm.controls['password'].value,
      dob: this.datepipe.transform(this.signupForm.controls['dob'].value, 'dd-MM-yyyy'),
      city: this.signupForm.controls['city'].value,
      state: this.signupForm.controls['state'].value == null ? '' : this.signupForm.controls['state'].value.name,
      gender: this.signupForm.controls['gender'].value,
      isAdmin: this.toStr(this.signupForm.controls['isAdmin'].value) ? 'Admin' : 'User'
    }

    this.service.signUp(obj).subscribe({
      next: (res: any) => {
        this.toastr.success(res.message);
        if (res.statusCode == 201) {
          setTimeout(() => {
            this.footSignin();
          }, 1000);
        }
      },
      error: (err: any) => {
        this.toastr.error(err.message);
      }
    });
  }

  login() {
    if (this.signinForm.invalid) {
      this.toastr.warning('Please enter all mandatory fields!');
      this.signinSubm = true;
      return;
    }
    this.service.login(this.signinForm.value).subscribe({
      next: (res: any) => {
        if (res && res['data']['accessToken']) {
          
          localStorage.setItem('accessToken',res['data']['accessToken']);
          localStorage.setItem('refreshToken',res['data']['refreshToken']);

          if (res['data']['existUser']['isAdmin'] === 'User') {
            this.router.navigate(['/User']);
          } else if (res['data']['existUser']['isAdmin'] === 'Admin') {
            this.router.navigate(['/Dashboard']);
          }
          this.toastr.success('Login Successfull');
        }
      },
      error: (err: any) => {
        this.toastr.error(err.message);
      }
    })
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.countries as any[]).length; i++) {
      let country = (this.countries as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.countries = filtered;
  }
  toStr(data: string | null | undefined) {
    if (data != undefined && data != null && data != "") {
      return data;
    } else {
      return "";
    }
  }
}
