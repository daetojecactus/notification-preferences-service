import { IsEnum, IsString, IsISO8601 } from 'class-validator';
import { Channel, NotificationType } from 'src/modules/infrastructure/database/generated/prisma';

export class EvaluateNotificationDto {
  @IsString()
  userId!: string;

  @IsEnum(NotificationType)
  notificationType!: NotificationType;

  @IsEnum(Channel)
  channel!: Channel;

  @IsString()
  region!: string;

  @IsISO8601()
  datetime!: string;
}
