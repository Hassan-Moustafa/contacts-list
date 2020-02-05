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
      email: 'ahmed.mohamed@abc.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'baher',
      lastName: 'mohamed',
      email: 'baher@hdsa.com',
      mobileNumber: '012354645',
      image: 'dasdadadsads'
    },
    {
      firstName: 'manal atef',
      lastName: 'mohamed',
      email: 'manal.atef@qwe.com',
      mobileNumber: '789798',
      image: 'dasdadadsads'
    },
    {
      firstName: 'sahmed',
      lastName: 'sayed',
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
    return this.sortListByFullName(this.contactsList);
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
      const firstFullName = `${contact1.firstName} ${contact1.lastName}`;
      const secondFullName = `${contact2.firstName} ${contact2.lastName}`;
      if (firstFullName > secondFullName) {
        return 1;
      } else {
        return -1;
      }
    });

  }
}
