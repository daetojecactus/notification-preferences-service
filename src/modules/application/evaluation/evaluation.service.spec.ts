import { EvaluationService } from './evaluation.service';
import { EvaluationDecision } from './evaluation.interface';
import { EvaluationReason } from './constants/evaluation.reason';
import { PreferenceSource } from '../preference/preference.enum';
import { Channel, NotificationType } from 'src/modules/infrastructure/database/generated/prisma';

describe('EvaluationService', () => {
  let evaluationService: EvaluationService;
  let policyService: { findBlockingPolicy: jest.Mock };
  let preferenceService: { resolveEffectivePreference: jest.Mock };
  let quietHoursService: { isQuietHoursActive: jest.Mock };

  beforeEach(() => {
    policyService = { findBlockingPolicy: jest.fn().mockResolvedValue([]) };
    preferenceService = { resolveEffectivePreference: jest.fn() };
    quietHoursService = { isQuietHoursActive: jest.fn().mockResolvedValue(false) };

    evaluationService = new EvaluationService(policyService as any, preferenceService as any, quietHoursService as any);
  });

  const baseInput = {
    userId: 'user-1',
    notificationType: NotificationType.MARKETING_EMAIL,
    channel: Channel.EMAIL,
    region: 'EU',
    datetime: new Date('2026-05-21T12:00:00Z'),
  };

  it('allows when default preference is enabled and no rule blocks', async () => {
    preferenceService.resolveEffectivePreference.mockResolvedValue({
      notificationType: NotificationType.TRANSACTIONAL_EMAIL,
      channel: Channel.EMAIL,
      enabled: true,
      source: PreferenceSource.DEFAULT,
    });

    const result = await evaluationService.evaluate({ ...baseInput, notificationType: NotificationType.TRANSACTIONAL_EMAIL });

    expect(result).toEqual({ decision: EvaluationDecision.ALLOW, reason: EvaluationReason.ALLOWED });
  });

  it('denies when a global policy blocks the notification', async () => {
    policyService.findBlockingPolicy.mockResolvedValue([{ id: 'policy-1' }]);

    const result = await evaluationService.evaluate({
      ...baseInput,
      notificationType: NotificationType.MARKETING_SMS,
      channel: Channel.SMS,
    });

    expect(result).toEqual({ decision: EvaluationDecision.DENY, reason: EvaluationReason.BLOCKED_BY_POLICY });
  });

  it('denies when the user disabled the notification', async () => {
    preferenceService.resolveEffectivePreference.mockResolvedValue({
      notificationType: NotificationType.MARKETING_EMAIL,
      channel: Channel.EMAIL,
      enabled: false,
      source: PreferenceSource.USER,
    });

    const result = await evaluationService.evaluate(baseInput);

    expect(result).toEqual({ decision: EvaluationDecision.DENY, reason: EvaluationReason.BLOCKED_BY_USER_PREFERENCE });
  });

  it('denies when the default preference is disabled', async () => {
    preferenceService.resolveEffectivePreference.mockResolvedValue({
      notificationType: NotificationType.MARKETING_EMAIL,
      channel: Channel.EMAIL,
      enabled: false,
      source: PreferenceSource.DEFAULT,
    });

    const result = await evaluationService.evaluate(baseInput);

    expect(result).toEqual({ decision: EvaluationDecision.DENY, reason: EvaluationReason.BLOCKED_BY_DEFAULT_PREFERENCE });
  });

  it('denies marketing notifications during quiet hours', async () => {
    preferenceService.resolveEffectivePreference.mockResolvedValue({
      notificationType: NotificationType.MARKETING_PUSH,
      channel: Channel.PUSH,
      enabled: true,
      source: PreferenceSource.DEFAULT,
    });
    quietHoursService.isQuietHoursActive.mockResolvedValue(true);

    const result = await evaluationService.evaluate({
      ...baseInput,
      notificationType: NotificationType.MARKETING_PUSH,
      channel: Channel.PUSH,
    });

    expect(result).toEqual({ decision: EvaluationDecision.DENY, reason: EvaluationReason.BLOCKED_BY_QUIET_HOURS });
  });

  it('allows transactional notifications during quiet hours', async () => {
    preferenceService.resolveEffectivePreference.mockResolvedValue({
      notificationType: NotificationType.TRANSACTIONAL_PUSH,
      channel: Channel.PUSH,
      enabled: true,
      source: PreferenceSource.DEFAULT,
    });
    quietHoursService.isQuietHoursActive.mockResolvedValue(true);

    const result = await evaluationService.evaluate({
      ...baseInput,
      notificationType: NotificationType.TRANSACTIONAL_PUSH,
      channel: Channel.PUSH,
    });

    expect(result).toEqual({ decision: EvaluationDecision.ALLOW, reason: EvaluationReason.ALLOWED });
  });
});
