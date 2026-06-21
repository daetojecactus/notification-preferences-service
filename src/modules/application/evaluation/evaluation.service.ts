import { Injectable, Logger } from '@nestjs/common';
import { PreferenceService } from '../preference/preference.service';
import { QuietHoursService } from '../quiet-hours/quiet-hours.service';
import { PolicyService } from '../policy/policy.service';
import { EvaluationDecision, EvaluationInput, EvaluationResult } from './evaluation.interface';
import { EvaluationReason } from './constants/evaluation.reason';
import { PreferenceSource } from '../preference/preference.enum';
import { NotificationType } from 'src/modules/infrastructure/database/generated/prisma';
import { EvaluationMessages } from './constants/evaluation.messages';

@Injectable()
export class EvaluationService {
  private readonly logger = new Logger(EvaluationService.name);

  constructor(
    private readonly policyService: PolicyService,
    private readonly preferenceService: PreferenceService,
    private readonly quietHoursService: QuietHoursService,
  ) {}

  async evaluate(input: EvaluationInput): Promise<EvaluationResult> {
    const { userId, notificationType, channel, region, datetime } = input;

    const result = await this.resolve(input);

    this.logger.log(EvaluationMessages.EVALUATION_RESULT, {
      userId,
      notificationType,
      channel,
      region,
      datetime: datetime.toISOString(),
      decision: result.decision,
      reason: result.reason,
    });

    return result;
  }

  private async resolve(input: EvaluationInput): Promise<EvaluationResult> {
    const { userId, notificationType, channel, region, datetime } = input;

    const blockingPolicy = await this.policyService.findBlockingPolicy({ notificationType, channel, region });
    if (blockingPolicy.length > 0) {
      this.logger.log(EvaluationMessages.EVALUATION_BLOCKED_BY_POLICY, { userId, notificationType, channel, region, datetime: datetime.toISOString() });
      return { decision: EvaluationDecision.DENY, reason: EvaluationReason.BLOCKED_BY_POLICY };
    }

    const preference = await this.preferenceService.resolveEffectivePreference({ userId, notificationType, channel });
    if (preference && !preference.enabled) {
      if (preference.source === PreferenceSource.USER) {
        this.logger.log(EvaluationMessages.EVALUATION_BLOCKED_BY_USER_PREFERENCE, {
          userId,
          notificationType,
          channel,
          region,
          datetime: datetime.toISOString(),
        });
        return { decision: EvaluationDecision.DENY, reason: EvaluationReason.BLOCKED_BY_USER_PREFERENCE };
      }
      if (preference.source === PreferenceSource.DEFAULT) {
        this.logger.log(EvaluationMessages.EVALUATION_BLOCKED_BY_DEFAULT_PREFERENCE, {
          userId,
          notificationType,
          channel,
          region,
          datetime: datetime.toISOString(),
        });
        return { decision: EvaluationDecision.DENY, reason: EvaluationReason.BLOCKED_BY_DEFAULT_PREFERENCE };
      }
    }

    const isQuietHours = await this.quietHoursService.isQuietHoursActive({ userId, datetime });
    if (isQuietHours && this.isMarketingType(notificationType)) {
      this.logger.log(EvaluationMessages.EVALUATION_BLOCKED_BY_QUIET_HOURS, { userId, notificationType, channel, region, datetime: datetime.toISOString() });
      return { decision: EvaluationDecision.DENY, reason: EvaluationReason.BLOCKED_BY_QUIET_HOURS };
    }

    this.logger.log(EvaluationMessages.EVALUATION_ALLOWED, { userId, notificationType, channel, region, datetime: datetime.toISOString() });
    return { decision: EvaluationDecision.ALLOW, reason: EvaluationReason.ALLOWED };
  }

  private isMarketingType(notificationType: NotificationType): boolean {
    return notificationType.startsWith('MARKETING_');
  }
}
