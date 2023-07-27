import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { ApiService } from '../Shared/api.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenHandlerInterceptor implements HttpInterceptor {

  refresh:boolean = false;

  constructor(private service: ApiService, private tostr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.service.getToken();
    let refreshToken = this.service.getRefreshToken();
    let authReq = request;

    authReq = this.addTokenHeader(request, token);
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if ((error.status === 401 ||  error.status === 500) && !this.refresh) {
          this.refresh = true;
          return this.service.refreshToken(refreshToken).pipe(
            switchMap((response: any) => {
              this.service.setToken(response.accessToken);
              authReq = this.addTokenHeader(request, response.accessToken);
              return next.handle(authReq);
            }),
            catchError((error) => {
              this.service.logout('Session Expired!','session'); // Logout the user if token refresh fails
              return throwError(error);
            })
          )
        }
        this.refresh = false;
        return throwError(error);
      })
    );
  };

  addTokenHeader(request: HttpRequest<any>, token: any) {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    })
  }

  // refreshToken(request: HttpRequest<any>, token: any){

  // }

}
