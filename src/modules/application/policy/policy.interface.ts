import { Channel, NotificationType } from 'src/modules/infrastructure/database/generated/prisma';

export interface FindBlockingPolicyInput {
  notificationType: NotificationType;
  channel: Channel;
  region: string;
}
