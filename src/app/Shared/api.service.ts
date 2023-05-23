import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URI:string = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

signUp(data:any):Observable<any>{
return this.http.post(`${this.URI}/register`,data)
}

}
