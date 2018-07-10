import { Component, OnInit, Input } from '@angular/core';
import { IContact } from '../../interfaces/icontact';
import { ContactService } from '../../services/contact.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.component.html',
  styleUrls: ['./details-contact.component.css']
})
export class DetailsContactComponent implements OnInit {
  contact: Observable<IContact>;

  constructor(private _contactService: ContactService) {
    this.contact = this._contactService.contact;
  }

  ngOnInit() {
  }

}
