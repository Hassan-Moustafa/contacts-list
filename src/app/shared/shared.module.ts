import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './components/UI/search-box/search-box.component';
import { SvgIconComponent } from './components/ui/svg-icon/svg-icon.component';



@NgModule({
  declarations: [SearchBoxComponent, SvgIconComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  entryComponents: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    SearchBoxComponent,
    SvgIconComponent
  ],
})
export class SharedModule { }
