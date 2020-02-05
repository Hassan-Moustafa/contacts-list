import { ContactModel } from 'src/app/shared/models/contact.model';

export class ContactService {

  private recentContactList: ContactModel[] = [
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
  ];
  private contactsList: ContactModel[] = [
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'ahmed sayed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'ahmed bnjkhb',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '789798',
      image: 'dasdadadsads'
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'sayed@sayed.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
  ];

  constructor() { }

  /**
   * getAllContacts
   */
  public getAllContacts() {
    return [...this.contactsList];
  }

  /**
   * getAllRecentContacts
   */
  public getAllRecentContacts() {
    return [...this.recentContactList];
  }

  /**
   * searchContacts
   */
  public searchContacts(searchValue: string, fieldsToSearchWith?: string[]) {
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

    return this.contactsList.filter((contact: ContactModel) => {
      for (const key of keysList) {
          const value = contact[key].toString().toLowerCase();
          if (value.includes(modifiedSearchValue)) {
            return true;
          }
      }
      return false;
    });
  }
}
