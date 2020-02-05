import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactModel } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contact-list-controller',
  templateUrl: './contact-list-controller.component.html',
  styleUrls: ['./contact-list-controller.component.scss']
})
export class ContactListControllerComponent implements OnInit {

  contactsList: ContactModel[];
  searchValue: string;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactsList = this.contactService.searchContacts(this.searchValue, ['firstName', 'lastName']);
  }

  filterContacts(searchValue: string) {
    this.searchValue = searchValue;
    this.contactsList = this.contactService.searchContacts(this.searchValue, ['firstName', 'lastName']);
    console.log(this.contactsList);
  }
}
