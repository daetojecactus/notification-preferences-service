import { PreferenceService } from './preference.service';
import { PreferenceSource } from './preference.enum';
import { Channel, NotificationType } from 'src/modules/infrastructure/database/generated/prisma';

describe('PreferenceService', () => {
  let preferenceService: PreferenceService;
  let userPreferenceService: { find: jest.Mock; findOne: jest.Mock; upsert: jest.Mock };
  let defaultPreferenceService: { find: jest.Mock; findOne: jest.Mock };

  const defaults = [
    { notificationType: NotificationType.TRANSACTIONAL_EMAIL, channel: Channel.EMAIL, enabled: true },
    { notificationType: NotificationType.MARKETING_EMAIL, channel: Channel.EMAIL, enabled: false },
  ];

  beforeEach(() => {
    userPreferenceService = { find: jest.fn(), findOne: jest.fn(), upsert: jest.fn() };
    defaultPreferenceService = { find: jest.fn(), findOne: jest.fn() };
    preferenceService = new PreferenceService(userPreferenceService as any, defaultPreferenceService as any);
  });

  it('returns default preferences for a new user', async () => {
    defaultPreferenceService.find.mockResolvedValue(defaults);
    userPreferenceService.find.mockResolvedValue([]);

    const result = await preferenceService.getUserPreferences('user-1');

    expect(result).toEqual([
      { notificationType: NotificationType.TRANSACTIONAL_EMAIL, channel: Channel.EMAIL, enabled: true, source: PreferenceSource.DEFAULT },
      { notificationType: NotificationType.MARKETING_EMAIL, channel: Channel.EMAIL, enabled: false, source: PreferenceSource.DEFAULT },
    ]);
  });

  it('reflects user overrides while keeping defaults for the rest', async () => {
    defaultPreferenceService.find.mockResolvedValue(defaults);
    userPreferenceService.find.mockResolvedValue([{ notificationType: NotificationType.MARKETING_EMAIL, channel: Channel.EMAIL, enabled: false }]);

    const result = await preferenceService.getUserPreferences('user-1');

    expect(result).toEqual([
      { notificationType: NotificationType.TRANSACTIONAL_EMAIL, channel: Channel.EMAIL, enabled: true, source: PreferenceSource.DEFAULT },
      { notificationType: NotificationType.MARKETING_EMAIL, channel: Channel.EMAIL, enabled: false, source: PreferenceSource.USER },
    ]);
  });

  it('is idempotent when the same update is applied twice', async () => {
    userPreferenceService.upsert.mockResolvedValue({
      notificationType: NotificationType.MARKETING_EMAIL,
      channel: Channel.EMAIL,
      enabled: false,
    });

    const input = {
      userId: 'user-1',
      notificationType: NotificationType.MARKETING_EMAIL,
      channel: Channel.EMAIL,
      payload: { enabled: false },
    };

    const first = await preferenceService.updateUserPreferences(input);
    const second = await preferenceService.updateUserPreferences(input);

    expect(first).toEqual(second);
    expect(first).toEqual({
      notificationType: NotificationType.MARKETING_EMAIL,
      channel: Channel.EMAIL,
      enabled: false,
      source: PreferenceSource.USER,
    });

    expect(userPreferenceService.upsert).toHaveBeenCalledTimes(2);
    expect(userPreferenceService.upsert.mock.calls[0]).toEqual(userPreferenceService.upsert.mock.calls[1]);
  });
});
