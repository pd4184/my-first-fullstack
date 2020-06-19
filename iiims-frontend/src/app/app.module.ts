import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewbiesListComponent } from './newbies-list/newbies-list.component';
import { AddNewbieComponent } from './add-newbie/add-newbie.component';

import {ShowNewbiesService} from './services/show-newbies.service';
import {AddNewbieService} from './services/add-newbie.service';
import { from } from 'rxjs';
import { NewbieDetalisComponent } from './newbie-detalis/newbie-detalis.component';
import { UpdateNewbieComponent } from './update-newbie/update-newbie.component';

@NgModule({
  declarations: [
    AppComponent,
    NewbiesListComponent,
    AddNewbieComponent,
    NewbieDetalisComponent,
    UpdateNewbieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ShowNewbiesService, AddNewbieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
