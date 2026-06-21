import { Module } from '@nestjs/common';
import { PreferenceModule } from '../preference/preference.module';
import { QuietHoursModule } from '../quiet-hours/quiet-hours.module';
import { PolicyModule } from '../policy/policy.module';
import { EvaluationService } from './evaluation.service';

@Module({
  imports: [PreferenceModule, QuietHoursModule, PolicyModule],
  providers: [EvaluationService],
  exports: [EvaluationService],
})
export class EvaluationModule {}
