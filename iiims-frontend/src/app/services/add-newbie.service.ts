import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Newbie} from '../models/newbie.model';

import { from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNewbieService {
  private apiUrl = `${environment.apiUrl}`;



  constructor(private http: HttpClient) {

   }

   addNewbie(newbie: Object) : Observable<Object>{
     return this.http.post(`${this.apiUrl}/add-newbie`, newbie);
   }

   getNewbiesList() : Observable<any> {
     //console.log(this.http.get(`${this.apiUrl}`));
     return this.http.get(`${this.apiUrl}`);
   }

   getNewbie(id: any) : Observable<any> {
     return this.http.get(`${this.apiUrl}/details/${id}`);
   }

   deleteNewbie(id: any): Observable<any> {
     return this.http.delete(`${this.apiUrl}/${id}`, {responseType: 'text'});
   }

   updateNewbie(id: any, value: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/update/${id}`, value);
   }
 }
