import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ContactsControllerComponent } from './UI/contacts-controller/contacts-controller.component';
import { ContactListComponent } from './UI/contact-list/contact-list.component';



const homeRoutes: Routes = [
  {
    path: '' , component: ContactsControllerComponent, children: [
      {
        path: 'contacts-list', component: ContactListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
