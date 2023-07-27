import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { DashboardModule } from './Dashboard/dashboard.module';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {
    path:'Dashboard',
    loadChildren: ()=> import('./Dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: 'User',
    loadChildren:()=> import('./Modules/users-playing/users-playing.module').then(m=>m.UsersPlayingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
