import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';

import { HomeControllerComponent } from './pages/home-controller/home-controller.component';
import { BotsListComponent } from './pages/bots-list/bots-list.component';


@NgModule({
  declarations: [HomeControllerComponent, BotsListComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
