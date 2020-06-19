import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddNewbieComponent} from './add-newbie/add-newbie.component';
import {NewbiesListComponent} from './newbies-list/newbies-list.component';
import {NewbieDetalisComponent} from './newbie-detalis/newbie-detalis.component';
import {UpdateNewbieComponent} from './update-newbie/update-newbie.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: 'newbies-list', component: NewbiesListComponent},
  {path: 'add-newbie', component: AddNewbieComponent},
  {path: 'details/:id', component: NewbieDetalisComponent },
  {path: 'update/:id', component: UpdateNewbieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
