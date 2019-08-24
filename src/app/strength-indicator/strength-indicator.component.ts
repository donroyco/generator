import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { StrengthIndicatorService } from './strength-indicator.service';
import { Strength } from './strenght-indicator.interface';

@Component({
  selector: 'strength-indicator',
  templateUrl: './strength-indicator.component.html',
  styleUrls: ['./_strength-indicator.component.scss']
})

export class StrengthIndicatorComponent implements OnChanges {
  @Input() charValue: number;
  @Input() numberValue: number;
  @Input() specialValue: number;

  strengthIndicator: Strength;

  constructor(private strengthIndicatorService: StrengthIndicatorService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.strengthIndicator = this.strengthIndicatorService.calculateStrength(this.charValue, this.numberValue, this.specialValue);
  }
}
