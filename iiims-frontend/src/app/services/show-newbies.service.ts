import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowNewbiesService {
  private apiUrl= `${environment.apiUrl}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

   }

   getNewbies(){
     return this.http.get(`${this.apiUrl}`);
   }
}
