import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-playing',
  templateUrl: './users-playing.component.html',
  styleUrls: ['./users-playing.component.css']
})
export class UsersPlayingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
