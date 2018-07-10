import { Component, OnInit, Input } from '@angular/core';
import { IContact } from '../../interfaces/icontact';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.css']
})

export class CardContactComponent implements OnInit {
  @Input() contact: IContact
  
  constructor() { }

  ngOnInit() {
  }

}
