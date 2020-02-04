import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import {HomeRoutingModule} from './contacts-routing.module';

import { ContactsControllerComponent } from './UI/contacts-controller/contacts-controller.component';
import { ContactListComponent } from './UI/contact-list/contact-list.component';



@NgModule({
  declarations: [ContactsControllerComponent, ContactListComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [SharedModule],
})
export class ContactsModule { }
