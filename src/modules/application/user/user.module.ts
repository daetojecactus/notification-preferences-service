import { Module } from '@nestjs/common';
import { PreferenceModule } from '../preference/preference.module';
import { QuietHoursModule } from '../quiet-hours/quiet-hours.module';
import { UserService } from './user.service';

@Module({
  imports: [PreferenceModule, QuietHoursModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
