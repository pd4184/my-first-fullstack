import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';
import { AddNewbieService } from '../services/add-newbie.service';
import { Newbie} from '../models/newbie.model'

@Component({
  selector: 'app-newbie-detalis',
  templateUrl: './newbie-detalis.component.html',
  styleUrls: ['./newbie-detalis.component.css']
})
export class NewbieDetalisComponent implements OnInit {
  newbie: Newbie; 
  id: any;
  constructor(private router: Router, private addNewbieService: AddNewbieService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newbie = new Newbie(); 
    this.id = this.route.snapshot.params['id'];
    this.addNewbieService.getNewbie(this.id).subscribe(data =>{
      console.log(data);
      this.newbie =   data;
    }, err => console.log(err));
  }
  list(){
    this.router.navigate(['/newbies-list']);
  }


}
