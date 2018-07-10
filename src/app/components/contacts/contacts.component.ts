import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Observable } from '../../../../node_modules/rxjs';
import { IContact } from '../../interfaces/icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Observable<IContact[]>;
  
  constructor(private _contactService: ContactService) {
    this.contacts = this._contactService.getContacts();
  }

  ngOnInit() {

  }

}
