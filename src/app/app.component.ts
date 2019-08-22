import { Component, OnInit } from '@angular/core';
import { GeneratorService } from './services/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  generated: string;

  constructor(private generatorService: GeneratorService) { }

  ngOnInit() {
    this.generated = this.generatorService.generateUniqueString(10, 2, 1);
    console.log('I AM: ', this.generated);
  }


}
