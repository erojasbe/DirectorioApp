import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../interfaces/icontact';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  contact: Observable<IContact>;
  contacts: Observable<IContact[]>;

  constructor(private _http: HttpClient) {
    this.getContacts();
  }

  getContacts() {
    this.contacts = this._http.get<IContact[]>(this.url);
  }

  getContact(id:number){
     this.contact= this._http.get<IContact>(this.url + '/id/'+ id);
  }


}
