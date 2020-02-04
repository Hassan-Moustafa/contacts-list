import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '', loadChildren: () => import('./featured/modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'home', loadChildren: () => import('./featured/modules/home/home.module').then(m => m.HomeModule)
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
