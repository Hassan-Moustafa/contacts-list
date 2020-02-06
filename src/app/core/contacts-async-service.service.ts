import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../shared/models/contact.model';

@Injectable()
export class ContactsAsyncService {

  contactsUrl = 'assets/contacts.json';
  recentContactsUrl = 'assets/recent-contact.json';

  constructor(private http: HttpClient) { }

  private getJSON(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }

  async getAllContacts(): Promise<IGetAllContactsResponse> {
    const contactsData: IGetAllContactsResponse  = await this.getJSON(this.contactsUrl);
    return contactsData;
  }

  async getAllRecentContacts(): Promise<IGetAllContactsResponse> {
    const recentContactsData: IGetAllContactsResponse = await this.getJSON(this.recentContactsUrl);
    return recentContactsData;
  }

}

interface IGetAllContactsResponse {
  statusCode: number;
  message: string;
  data: ContactModel[];
}
