import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

const MaterialModules = [
  FormsModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule
];

@NgModule({
  imports: [ MaterialModules ],
  exports: [ MaterialModules ],
})
export class MaterialModule { }
