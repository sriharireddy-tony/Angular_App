import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule} from '@angular/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NumbersOnlyDirective } from './Directives/numbers-only.directive';
import { ErrorHandlerInterceptorInterceptor } from './Interceptors/error-handler-interceptor.interceptor';
import { SharedModule } from './shared.module';
import { TokenHandlerInterceptor } from './Interceptors/token-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NumbersOnlyDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-right',timeOut: 2000}),
    SharedModule
   
  ],
  providers: [DatePipe,
    [
      { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptorInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: TokenHandlerInterceptor, multi: true }
    ]],
  bootstrap: [AppComponent]
})
export class AppModule { }
