import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {AuthenticationRoutingModule} from './authentication-routing.module';


import { LoginComponent } from './pages/login/login.component';
import { AuthenticationControllerComponent } from './pages/authentication-controller/authentication-controller.component';


@NgModule({
  declarations: [LoginComponent, AuthenticationControllerComponent],
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
