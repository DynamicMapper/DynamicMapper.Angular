import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { Mapper, MAPPING_PROFILE } from './mapper';
import { Profile } from '@dynamic-mapper/mapper';

export function createProfileProvider(profile) {
  return { provide: MAPPING_PROFILE, useClass: profile, multi: true };
}

@NgModule({
  providers: [Mapper]
})
export class MapperModule {
  static withProfiles(profiles: Type<Profile>[]): ModuleWithProviders<MapperModule> {
    return {
      ngModule: MapperModule,
      providers: profiles.map(createProfileProvider)
    };
  }
}
