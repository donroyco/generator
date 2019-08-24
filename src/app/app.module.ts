import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StrengthIndicatorComponent } from './strength-indicator/strength-indicator.component';
import { StrengthIndicatorService } from './strength-indicator/strength-indicator.service';
import { GeneratorService } from './services/generator.service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    StrengthIndicatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ GeneratorService, StrengthIndicatorService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
