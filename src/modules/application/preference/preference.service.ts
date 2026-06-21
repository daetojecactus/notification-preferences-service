import { Injectable, Logger } from '@nestjs/common';
import { UserPreferenceService } from './user-preference/user-preference.service';
import { DefaultPreferenceService } from './default-preference/default-preference.service';
import { PreferenceSource } from './preference.enum';
import { PreferenceItem, ResolveEffectivePreferenceInput, UpdatePreferenceInput } from './preference.interface';
import { PreferenceMessages } from './constants/preference.messages';

@Injectable()
export class PreferenceService {
  private readonly logger = new Logger(PreferenceService.name);

  constructor(
    private readonly userPreferenceService: UserPreferenceService,
    private readonly defaultPreferenceService: DefaultPreferenceService,
  ) {}

  async getUserPreferences(userId: string): Promise<PreferenceItem[]> {
    const [defaultPreferences, userPreferences] = await Promise.all([this.defaultPreferenceService.find({}), this.userPreferenceService.find({ userId })]);

    const userPreferenceMap = new Map(userPreferences.map(userPreference => [`${userPreference.notificationType}:${userPreference.channel}`, userPreference]));

    return defaultPreferences.map(defaultPreference => {
      const override = userPreferenceMap.get(`${defaultPreference.notificationType}:${defaultPreference.channel}`);
      return {
        notificationType: defaultPreference.notificationType,
        channel: defaultPreference.channel,
        enabled: override ? override.enabled : defaultPreference.enabled,
        source: override ? PreferenceSource.USER : PreferenceSource.DEFAULT,
      };
    });
  }

  async updateUserPreferences(input: UpdatePreferenceInput): Promise<PreferenceItem> {
    const { userId, notificationType, channel, payload } = input;
    const { enabled } = payload;

    const preference = await this.userPreferenceService.upsert(
      { userId_notificationType_channel: { userId, notificationType, channel } },
      {
        userId,
        notificationType,
        channel,
        enabled,
      },
      { enabled },
    );

    this.logger.log(PreferenceMessages.PREFERENCE_UPDATED, {
      userId,
      notificationType,
      channel,
      enabled,
    });

    return {
      notificationType: preference.notificationType,
      channel: preference.channel,
      enabled: preference.enabled,
      source: PreferenceSource.USER,
    };
  }

  async resolveEffectivePreference(input: ResolveEffectivePreferenceInput) {
    const { userId, notificationType, channel } = input;
    const userPreference = await this.userPreferenceService.findOne({ userId_notificationType_channel: { userId, notificationType, channel } });
    if (userPreference) {
      return {
        notificationType: userPreference.notificationType,
        channel: userPreference.channel,
        enabled: userPreference.enabled,
        source: PreferenceSource.USER,
      };
    }
    const defaultPreference = await this.defaultPreferenceService.findOne({ notificationType_channel: { notificationType, channel } });
    if (defaultPreference) {
      return {
        notificationType: defaultPreference.notificationType,
        channel: defaultPreference.channel,
        enabled: defaultPreference.enabled,
        source: PreferenceSource.DEFAULT,
      };
    }
    return null;
  }
}
