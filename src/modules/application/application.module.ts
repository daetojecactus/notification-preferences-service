import { Module } from '@nestjs/common';
import { PreferenceModule } from './preference/preference.module';
import { QuietHoursModule } from './quiet-hours/quiet-hours.module';
import { PolicyModule } from './policy/policy.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PreferenceModule, QuietHoursModule, UserModule, PolicyModule],
  providers: [],
})
export class ApplicationModule {}
