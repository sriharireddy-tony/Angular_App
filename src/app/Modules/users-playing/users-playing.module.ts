import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPlayingRoutingModule } from './users-playing-routing.module';
import { UsersPlayingComponent } from './users-playing.component';
import { PlayingTeamsComponent } from './playing-teams/playing-teams.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    UsersPlayingComponent,
    PlayingTeamsComponent
  ],
  imports: [
    CommonModule,
    UsersPlayingRoutingModule,
    SharedModule
  ]
})
export class UsersPlayingModule { }
