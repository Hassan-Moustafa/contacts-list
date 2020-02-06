import { ContactModel } from 'src/app/shared/models/contact.model';
import { ContactsAsyncService } from 'src/app/core/contacts-async-service.service';
import { Injectable } from '@angular/core';
import { ContactFields } from 'src/app/shared/enums/enums';

@Injectable()
export class ContactService {

  private recentContactList: ContactModel[] = [];
  private contactsList: ContactModel[] = [];

  constructor(private contactAsyncService: ContactsAsyncService) { }

  /**
   * getAllContacts
   */
  public getAllContacts() {
    return this.sortListByFullName(this.contactsList);
  }

  /**
   * getAllRecentContacts
   */
  public getAllRecentContacts() {
    return [...this.recentContactList];
  }

  /**
   * setContactsList
   */
  public async setContactsList() {
    const contactsResponse = await this.contactAsyncService.getAllContacts();
    this.contactsList = this.fixContactsObjects(contactsResponse.data);
  }

  /**
   * searchContacts
   */
  public async searchContacts(searchValue: string, fieldsToSearchWith?: string[]) {

    if (this.contactsList.length === 0) {
      await this.setContactsList();
      // console.log(this.contactsList);
    }

    if ((searchValue && searchValue.trim() === '') || !searchValue) {
      return this.getAllContacts();
    }

    let keysList = [];
    if (!fieldsToSearchWith || (fieldsToSearchWith && fieldsToSearchWith.length === 0)) {
      keysList = Object.keys(new ContactModel());
    } else {
      keysList = fieldsToSearchWith;
    }

    const modifiedSearchValue = searchValue.trim().toLowerCase();

    const filteredList =  this.contactsList.filter((contact: ContactModel) => {
      for (const key of keysList) {
          const value = contact[key].toString().toLowerCase();
          if (value.includes(modifiedSearchValue)) {
            return true;
          }
      }
      return false;
    });
    return this.sortListByFullName(filteredList);
  }

  /**
   * sortList
   */
  public sortListByFullName(contacts: ContactModel[]) {
    return contacts.sort((contact1: ContactModel, contact2: ContactModel) => {
      // const firstFullName = this.getFullName(contact1);
      // const secondFullName = this.getFullName(contact2);
      if (contact1.contactDisplayName > contact2.contactDisplayName) {
        return 1;
      } else {
        return -1;
      }
    });

  }

  /**
   * addNewContact
   */
  public addNewContact(newContact: ContactModel) {
    newContact.contactDisplayName = this.getFullName(newContact);
    newContact.contactDetail = newContact.email;
    let index = 0;
    for (let i = 0; i < this.contactsList.length ; i++) {
      const fullName = this.getFullName(this.contactsList[i]);
      const newContactFullName = this.getFullName(newContact);
      if (newContactFullName > fullName) {
        continue;
      } else {
        index = i;
      }
    }
    this.contactsList.splice(index, 0, newContact);
    console.log(this.contactsList);
  }

  /**
   * getFullName
   */
  public getFullName(contact: ContactModel) {
    return `${contact.firstName ? contact.firstName : ''} ${contact.lastName ? contact.lastName : ''}`.toLowerCase();
  }

  fixContactsObjects(contactsList: ContactModel[]) {
    const fixedList: ContactModel[] = [];
    for (const contact of contactsList) {

      let fixedContact: ContactModel;
      fixedContact = {
        ...contact,
        contactDisplayName: this.getFullName(contact),
        contactDetail: contact.mobileNumber
      };
      if (!fixedContact.contactDisplayName || (fixedContact.contactDisplayName && fixedContact.contactDisplayName.trim() === '')) {
        if (fixedContact.userName && fixedContact.userName.trim() !== '') {
          fixedContact.contactDisplayName = fixedContact.userName;
        } else {
          continue;
        }
      }
      if (!fixedContact.contactDetail || (fixedContact.contactDetail && fixedContact.contactDetail.trim() === '')){
        if (fixedContact.email && fixedContact.email.trim() !== '') {
          fixedContact.contactDetail = fixedContact.email;
        }
      }
      fixedList.push(fixedContact);
    }
    return fixedList;
  }
}
