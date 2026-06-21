import { Channel, NotificationType } from 'src/modules/infrastructure/database/generated/prisma';
import { PreferenceItem } from '../preference/preference.interface';
import { QuietHoursItem } from '../quiet-hours/quiet-hours.interface';

export interface UserPreferences {
  userId: string;
  preferences: PreferenceItem[];
  quietHours: QuietHoursItem | null;
}

export interface UserPreferenceUpdate {
  notificationType: NotificationType;
  channel: Channel;
  enabled: boolean;
}

export interface UserQuietHoursUpdate {
  startTime: string;
  endTime: string;
  timezone: string;
  enabled: boolean;
}

export interface UpdateUserPreferencesInput {
  userId: string;
  preferences?: UserPreferenceUpdate;
  quietHours?: UserQuietHoursUpdate;
}
