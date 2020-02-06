import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path:'**', redirectTo: '/'
  }
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturedRoutingModule {
 }
