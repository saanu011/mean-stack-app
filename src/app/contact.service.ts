import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // retreiving contacts
  getContacts () {
    return this.http.get('http://localhost:3000/api/contacts').pipe(
      map(res => res)
      );
    }



  // adding contact
  addContact (newContact) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

   return this.http.post('http://localhost:3000/api/contact', newContact,  {headers: headers}).pipe(
     map(res => res)
     );

  }

  // deleting contact
  deleteContact (id) {
    return this.http.delete('http://localhost:3000/api/contact/' + id).pipe(map(res => res));
  }


}
