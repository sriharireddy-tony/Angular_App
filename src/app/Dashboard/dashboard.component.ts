import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sidebarVisible: boolean = false;
  tabClickStr: string = 'userList';
  userName:string= '';
  constructor(private service: ApiService,private router:Router) {
    // this.userName =  this.service.user.name;
   }

  ngOnInit(): void {

  }
  logout(){
   this.service.logout('Logout Succesfull','logout');
  }

  tabClick(arg: string) {
    this.sidebarVisible = false;
    this.tabClickStr = arg;
  }
}
