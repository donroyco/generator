import { Injectable } from '@angular/core';

import { GRADES, STRENGTH_BAR, STRENGTH_COMMENTS } from '../generator.constants';
import { Strength } from './strenght-indicator.interface';

@Injectable()
export class StrengthIndicatorService {
  cumulative: number;
  grade: string;
  gradeComment: string;
  gradeClass: string;

  public calculateStrength(char: number, number: number, special: number): Strength {
    this.cumulative = (char * 1.5) + (number * 2) + (special * 2);

    if (this.cumulative > 40) {
      this.grade = GRADES.A;
    } else if (this.cumulative > 30) {
      this.grade = GRADES.B;
    } else if (this.cumulative > 20) {
      this.grade = GRADES.C;
    } else if (this.cumulative > 10) {
      this.grade = GRADES.D;
    } else {
      this.grade = GRADES.E;
    }

    switch (this.grade) {
      case GRADES.A: {
        this.gradeClass = STRENGTH_BAR.darkgreen;
        this.gradeComment = STRENGTH_COMMENTS.excellent;
        break;
      }
      case GRADES.B: {
        this.gradeClass = STRENGTH_BAR.green;
        this.gradeComment = STRENGTH_COMMENTS.good;
        break;
      }
      case GRADES.C: {
        this.gradeClass = STRENGTH_BAR.yellow;
        this.gradeComment = STRENGTH_COMMENTS.okay;
        break;
      }
      case GRADES.D: {
        this.gradeClass = STRENGTH_BAR.orange;
        this.gradeComment = STRENGTH_COMMENTS.poor;
        break;
      }
      default : {
        this.gradeClass = STRENGTH_BAR.red;
        this.gradeComment = STRENGTH_COMMENTS.worst;
        break;
      }
    }

    return {
      class: this.gradeClass,
      strengthComment: this.gradeComment
    };
  }
}
