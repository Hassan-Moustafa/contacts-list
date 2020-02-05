import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import {HomeRoutingModule} from './contacts-routing.module';

import { ContactsControllerComponent } from './UI/contacts-controller/contacts-controller.component';
import { ContactListComponent } from './UI/contact-list/contact-list.component';
import { ContactListItemComponent } from './UI/contact-list-item/contact-list-item.component';
import { ContactService } from './services/contact.service';
import { ContactListControllerComponent } from './UI/contact-list-controller/contact-list-controller.component';



@NgModule({
  declarations: [ContactsControllerComponent, ContactListComponent, ContactListItemComponent, ContactListControllerComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [SharedModule],
  providers: [ContactService]
})
export class ContactsModule { }
