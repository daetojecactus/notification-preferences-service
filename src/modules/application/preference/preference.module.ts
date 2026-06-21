import { Module } from '@nestjs/common';
import { PreferenceService } from './preference.service';
import { UserPreferenceService } from './user-preference/user-preference.service';
import { UserPreferenceRepository } from './user-preference/user-preference.repository';
import { DefaultPreferenceService } from './default-preference/default-preference.service';
import { DefaultPreferenceRepository } from './default-preference/default-preference.repository';

@Module({
  imports: [],
  providers: [PreferenceService, UserPreferenceService, UserPreferenceRepository, DefaultPreferenceService, DefaultPreferenceRepository],
  exports: [PreferenceService],
})
export class PreferenceModule {}
