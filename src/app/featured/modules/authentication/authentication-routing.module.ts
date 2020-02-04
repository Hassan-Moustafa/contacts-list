import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthenticationControllerComponent } from './pages/authentication-controller/authentication-controller.component';

const authRoutes: Routes = [
  {
    path: '' , component: AuthenticationControllerComponent, children: [
      {
        path: 'login', component: LoginComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
