import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URI: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router,private tostr:ToastrService) {

  }

  getToken() {
    return localStorage.getItem('accessToken') || '';
  }
  getRefreshToken() {
    return localStorage.getItem('refreshToken') || '';
  }
  isLogged() {
    return localStorage.getItem('accessToken') != null;
  }
  logout(msg:string,type:string) {
    if(type =='session'){
      this.tostr.error(msg);
    } else if(type =='logout'){
      this.tostr.success(msg);
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/home'])
  }
  refreshToken(token: any) {
    return this.http.post<any>(`${this.URI}/refreshToken`, { token });
  }
  setToken(token:any){
    localStorage.setItem('accessToken', token)
  }

  signUp(data: any): Observable<any> {
    return this.http.post(`${this.URI}/register`, data);
  }
  getUsers() {
    return this.http.get(`${this.URI}/getRegister`)
  }
  login(data: any) {
    return this.http.post(`${this.URI}/login`, data);
  }
  deleteUser(obj: any) {
    return this.http.get(`${this.URI}/deleteUser/${obj._id}`)
  }
}
