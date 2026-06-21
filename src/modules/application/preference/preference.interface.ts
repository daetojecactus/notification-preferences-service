import { Channel, NotificationType } from 'src/modules/infrastructure/database/generated/prisma';
import { PreferenceSource } from './preference.enum';

export interface PreferenceItem {
  notificationType: NotificationType;
  channel: Channel;
  enabled: boolean;
  source: PreferenceSource;
}

export interface UpdatePreferenceInput {
  userId: string;
  notificationType: NotificationType;
  channel: Channel;
  payload: {
    enabled: boolean;
  };
}

export interface ResolveEffectivePreferenceInput {
  userId: string;
  notificationType: NotificationType;
  channel: Channel;
}
