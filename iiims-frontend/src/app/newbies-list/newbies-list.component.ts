import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AddNewbieService } from '../services/add-newbie.service';
import { Observable, from } from 'rxjs';
import { Newbie } from '../models/newbie.model';

@Component({
  selector: 'app-newbies-list',
  templateUrl: './newbies-list.component.html',
  styleUrls: ['./newbies-list.component.css']
})
export class NewbiesListComponent implements OnInit {
//newbies: Observable<Newbie []>;
newbies: any;

  constructor(private addNewbieService: AddNewbieService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.newbies= this.addNewbieService.getNewbiesList();
    
  }

  deleteNewbie(id: any) {
    this.addNewbieService.deleteNewbie(id).subscribe(data =>{
      console.log(data);
      this.reloadData();
    }, error => {console.log(error)});
    this.goToList();
  }

  goToList(){
    this.router.navigate(['/newbies-list']);
  }

  newbieDetails(id: any){
    this.router.navigate(['/details', id])
  }

  updateNewbie(id: any){
    this.router.navigate(['/update', id]);
  }
}
