import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './Task/Task.component';
import { TaskcreateComponent } from './taskcreate/taskcreate.component';

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'task', component: TaskComponent },
  { path: 'anasayfa', component: TaskComponent },
  { path: 'taskcreate', component: TaskcreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
