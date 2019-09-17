import { Component } from '@angular/core';
import { Mapper } from '@dynamic-mapper/angular';
import { ExampleMappingProfile, Source } from './mapping/example-mapping-profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapper-angular';

  source = new Source(123);

  destination = this.mapper.map(ExampleMappingProfile.SourceToDestination, new Source(123));

  constructor(private readonly mapper: Mapper) {}
}
