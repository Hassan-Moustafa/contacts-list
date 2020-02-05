import { ContactModel } from 'src/app/shared/models/contact.model';

export class ContactService {

  private recentContactList: ContactModel[] = [
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
  ];
  private contactsList: ContactModel[] = [
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'ahmed.mohamed@abc.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'baher',
      lastName: 'mohamed',
      email: 'baher@hdsa.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'manal atef',
      lastName: 'mohamed',
      email: 'manal.atef@qwe.com',
      mobileNumber: '789798',
      image: ''
    },
    {
      firstName: 'sahmed',
      lastName: 'sayed',
      email: 'sayed@sayed.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
    },
    {
      firstName: 'ahmed',
      lastName: 'mohamed',
      email: 'h@h.com',
      mobileNumber: '012354645',
      image: ''
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
      const firstFullName = this.getFullName(contact1);
      const secondFullName = this.getFullName(contact2);
      if (firstFullName > secondFullName) {
        return 1;
      } else {
        return -1;
      }
    });

  }

  /**
   * addNewContact
   */
  public addNewContact(newContact: ContactModel){
    let index = 0;
    for(let i = 0; i < this.contactsList.length ; i++) {
      const fullName = this.getFullName(this.contactsList[i]);
      const newContactFullName = this.getFullName(newContact);
      if(newContactFullName > fullName) continue;
      else index = i;
    }
    this.contactsList.splice(index, 0, newContact);
  }

  /**
   * getFullName
   */
  public getFullName(contact: ContactModel) {
    return `${contact.firstName} ${contact.lastName}`;
  } 
}
