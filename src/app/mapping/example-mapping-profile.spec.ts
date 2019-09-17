import { Mapper } from '@dynamic-mapper/angular';
import { ExampleMappingProfile, Source } from './example-mapping-profile';

describe('Example Mapping Profile', () => {
  let mapper: Mapper;

  beforeEach(() => {
    mapper = new Mapper([new ExampleMappingProfile()]);
  });

  describe('Source to Destination', () => {
    it('should map correctly', () => {
      const destination = mapper.map(ExampleMappingProfile.SourceToDestination, new Source(123));

      expect(destination.value).toBe('123');
    });
  });
});
