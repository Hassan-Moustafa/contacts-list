import { Component, OnInit, Input } from '@angular/core';
import { ContactModel } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss']
})
export class ContactListItemComponent implements OnInit {

  @Input() contactData: ContactModel;

  constructor() { }

  ngOnInit() {
  }

}
