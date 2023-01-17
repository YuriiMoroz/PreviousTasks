import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { CenzorComponent } from './work/cenzor/cenzor.component';
import { UserlistComponent } from './work/userlist/userlist.component';
import { TasklistComponent } from './work/tasklist/tasklist.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'work',component:WorkComponent,children:[
  {path:'cenzor',component:CenzorComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'task',component:TasklistComponent},
  { path: 'userlist', pathMatch: 'full', redirectTo: 'userlist' },
  { path: 'task', pathMatch: 'full', redirectTo: 'task' },
  { path: 'cenzor', pathMatch: 'full', redirectTo: 'cenzor' }
  ]},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
