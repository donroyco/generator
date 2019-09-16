import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material';

import { GeneratorService } from './services/generator.service';
import { SLIDER_DEFAULTS } from './generator.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./_app.component.scss']
})
export class AppComponent implements OnInit {
  charSliderValue = SLIDER_DEFAULTS.defaultChar;
  numberSliderValue = SLIDER_DEFAULTS.defaultNumber;
  specialSliderValue = SLIDER_DEFAULTS.defaultSpecial;

  generatedString: string;
  sliderMax = SLIDER_DEFAULTS.defaultMax;
  sliderMaxChar = SLIDER_DEFAULTS.maxChar;
  sliderMin = SLIDER_DEFAULTS.defaultMin;
  sliderMinCustom = SLIDER_DEFAULTS.customMin;

  constructor(private generatorService: GeneratorService) { }

  ngOnInit() {
    this.generateString();
  }

  onInputChange(event: MatSliderChange): void {
    this.generateString();
  }

  generateString(): string {
    return this.generatedString = this.generatorService.generateUniqueString(
      this.charSliderValue,
      this.numberSliderValue,
      this.specialSliderValue
    );
  }
}
