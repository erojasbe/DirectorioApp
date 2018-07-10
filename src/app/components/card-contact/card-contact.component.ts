import { Component, OnInit, Input } from '@angular/core';
import { IContact } from '../../interfaces/icontact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.css']
})

export class CardContactComponent implements OnInit {
  @Input() contact: IContact
  
  constructor(private _contactService: ContactService) { }

  ngOnInit() {
  }

  searchContact(id:number){
    console.log(`este es el id: ${id}`);
    this._contactService.getContact(id);
  }

}
