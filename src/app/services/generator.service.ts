import { Injectable } from '@angular/core';

import { DEFAULTS } from '../generator.constants';

@Injectable()
export class GeneratorService {

  public generateUniqueString(chars: number = 1, numbers?: number, specialCharacters?: number) {
    let charsLength = chars - numbers - specialCharacters;

    if (charsLength < 0) {
      charsLength = 1;
    }

    const partChar = this.generateChar(charsLength);
    const partNumber = this.generateNumber(numbers);
    const partSpecialChar = this.generateSpecialCharacters(specialCharacters);

    const combinedString = `${partChar}${partNumber}${partSpecialChar}`;
    return combinedString.split('').sort(() => .5 - Math.random()).join('');
  }

  private generateChar(length: number): string {
    const characters = DEFAULTS.characters;
    return this.formatPart(characters, length);
  }

  private generateNumber(length: number): string {
    const characters = DEFAULTS.numbers;
    return this.formatPart(characters, length);
  }

  private generateSpecialCharacters(length: number): string {
    const characters = DEFAULTS.specialCharacters;
    return this.formatPart(characters, length);
  }

  private formatPart(chars: string, length: number): string {
    const charLength = length;
    let result = '';

    for (let i = 0; i < charLength; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
