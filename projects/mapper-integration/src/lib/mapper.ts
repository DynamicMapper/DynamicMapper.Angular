import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Mapper as BaseMapper, MapperConfiguration, Profile } from '@dynamic-mapper/mapper';

export const MAPPING_PROFILE = new InjectionToken<Profile>('MappingProfile');

@Injectable({
  providedIn: 'root'
})
export class Mapper extends BaseMapper {
  constructor(@Inject(MAPPING_PROFILE) profiles: Profile[]) {
    super(new MapperConfiguration(cfg => profiles.forEach(p => cfg.addProfile(p))));
  }
}
