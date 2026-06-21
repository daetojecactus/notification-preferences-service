import { Injectable } from '@nestjs/common';
import { PreferenceService } from '../preference/preference.service';
import { QuietHoursService } from '../quiet-hours/quiet-hours.service';
import { UpdateUserPreferencesInput, UserPreferences } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    private readonly preferenceService: PreferenceService,
    private readonly quietHoursService: QuietHoursService,
  ) {}

  async getUserPreferences(userId: string): Promise<UserPreferences> {
    const [userPreferences, userQuietHours] = await Promise.all([
      this.preferenceService.getUserPreferences(userId),
      this.quietHoursService.getUserQuietHours(userId),
    ]);

    return {
      userId,
      preferences: userPreferences,
      quietHours: userQuietHours,
    };
  }

  async updateUserPreferences(input: UpdateUserPreferencesInput): Promise<UserPreferences> {
    const { userId, preferences, quietHours } = input;

    await Promise.all([
      preferences
        ? this.preferenceService.updateUserPreferences({
            userId,
            notificationType: preferences.notificationType,
            channel: preferences.channel,
            payload: { enabled: preferences.enabled },
          })
        : null,

      quietHours
        ? this.quietHoursService.updateUserQuietHours({
            userId,
            payload: {
              startTime: quietHours.startTime,
              endTime: quietHours.endTime,
              timezone: quietHours.timezone,
              enabled: quietHours.enabled,
            },
          })
        : null,
    ]);

    return this.getUserPreferences(userId);
  }
}
