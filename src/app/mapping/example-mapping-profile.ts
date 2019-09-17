import { MappingPair, Profile } from '@dynamic-mapper/mapper';

export class Source {
  constructor(public value: number) {}
}

export class Destination {
  value: string;
}

export class ExampleMappingProfile extends Profile {
  static readonly SourceToDestination = new MappingPair(Source, Destination);

  constructor() {
    super();

    this.createAutoMap(ExampleMappingProfile.SourceToDestination, {
      value: opt => {
        opt.preCondition(src => src.value != null);
        opt.mapFrom(src => src.value.toString());
      }
    });
  }
}
