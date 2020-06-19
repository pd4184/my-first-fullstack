import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute  } from '@angular/router';
import {Newbie} from '../models/newbie.model';
import {AddNewbieService} from '../services/add-newbie.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-update-newbie',
  templateUrl: './update-newbie.component.html',
  styleUrls: ['./update-newbie.component.css']
})
export class UpdateNewbieComponent implements OnInit {
  newbie: Newbie;
  id: any;
  constructor(private router: Router, private route: ActivatedRoute,
    private addNewbieService: AddNewbieService) { }

  ngOnInit(): void {
    this.newbie= new Newbie();
    this.id = this.route.snapshot.params['id'];
      this.addNewbieService.getNewbie(this.id).subscribe(data=>{
        console.log("ngONit");
        console.log(data);
        this.newbie= data;
      }, err => console.log(err));
  }

  updateNewbie(){
    this.addNewbieService.updateNewbie(this.id, this.newbie).subscribe(data =>{
      console.log('updateNewbie');
      console.log(data);
      this.newbie= new Newbie();
    }, err => console.log(err));
    this.goToList();
  }

  onSubmit(){
    this.updateNewbie();
  }

  goToList(){
    this.router.navigate(['/newbies-list']);
  }
}
