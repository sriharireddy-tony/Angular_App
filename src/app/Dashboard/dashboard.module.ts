import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { TeamPlayersComponent } from './team-players/team-players.component';
import { TeamsUpdateComponent } from './teams-update/teams-update.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersListComponent,
    TeamPlayersComponent,
    TeamsUpdateComponent,
    // SearchFilterPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
