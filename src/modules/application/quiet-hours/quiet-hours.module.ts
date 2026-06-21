import { Module } from '@nestjs/common';
import { QuietHoursService } from './quiet-hours.service';
import { UserQuietHoursService } from './user-quiet-hours/user-quiet-hours.service';
import { UserQuietHoursRepository } from './user-quiet-hours/user-quiet-hours.repository';

@Module({
  imports: [],
  providers: [QuietHoursService, UserQuietHoursService, UserQuietHoursRepository],
  exports: [QuietHoursService],
})
export class QuietHoursModule {}
