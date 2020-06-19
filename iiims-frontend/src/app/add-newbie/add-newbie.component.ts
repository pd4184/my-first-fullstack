import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator} from '@angular/forms';
import {Router} from '@angular/router';
import {AddNewbieService} from '../services/add-newbie.service';
import {Newbie} from '../models/newbie.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-newbie',
  templateUrl: './add-newbie.component.html',
  styleUrls: ['./add-newbie.component.css']
})
export class AddNewbieComponent implements OnInit {
 newbie: Newbie = new Newbie();
 submitted= false;
  constructor(private router: Router, private addNewbieService: AddNewbieService) { }

  ngOnInit(): void {
    //this.newNewbie()
  }

  newNewbie() : void{
    this.submitted= false;
    this.newbie= new Newbie();

    }
  save() {
    this.addNewbieService.addNewbie(this.newbie)
    .subscribe(data => console.log(data), err => console.log(err));
    this.newbie= new Newbie();
    this.goToList();

  }
  onSubmit(){
    this.submitted= true;
    this.save();
  }

  goToList(){
    this.router.navigate(['/newbies-list']);
  }

  
  

}
