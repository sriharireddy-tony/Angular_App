import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { TeamPlayersComponent } from './team-players/team-players.component';
import { TeamsUpdateComponent } from './teams-update/teams-update.component';

const routes: Routes = [
  {path:'', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
