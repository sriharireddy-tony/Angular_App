import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPlayingComponent } from './users-playing.component';
import { PlayingTeamsComponent } from './playing-teams/playing-teams.component';

const routes: Routes = [
  {path:'', component: UsersPlayingComponent},
  {path:'teamsList', component: PlayingTeamsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersPlayingRoutingModule { }
