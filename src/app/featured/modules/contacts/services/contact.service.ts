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
  public searchContacts(searchValue: string, fieldsToSearchWith: string[]) {
    if (searchValue && searchValue.trim() !== '') {
      return this.getAllContacts();
    }

    const keysList = fieldsToSearchWith.length === 0 ? Object.keys(ContactModel) : fieldsToSearchWith;

    return this.contactsList.filter((contact: ContactModel) => {
      for (const key of keysList) {
          const value = contact[key].toString().toLowerCase();
          if (value.includes(searchValue.toLowerCase())) {
            return true;
          } else {
            return false;
          }
      }
    });
  }
}
