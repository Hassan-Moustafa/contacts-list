import { Component, OnInit, Input } from '@angular/core';
import { ContactModel } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {

  @Input() contactsList: ContactModel[];

  constructor() { }

  ngOnInit() {
  }

  getSubListHeader(index: number, contact: ContactModel) {
    if (index === 0) {
      return contact.firstName[0].toUpperCase();
    } else if (this.contactsList[index].firstName[0] !== this.contactsList[index - 1].firstName[0]) {
      return contact.firstName[0].toUpperCase();
    }
  }

}
