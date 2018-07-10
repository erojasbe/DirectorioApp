import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../interfaces/icontact';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) {
    console.log(`Service ContactServicie init`);
  }

  getContacts(): Observable<IContact[]> {
    return this._http.get<IContact[]>(this.url);
  }


}
