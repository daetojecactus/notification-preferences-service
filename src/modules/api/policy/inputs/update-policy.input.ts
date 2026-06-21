import { IsEnum, IsOptional, IsString, IsBoolean, MaxLength } from 'class-validator';
import { Channel, NotificationType } from 'src/modules/infrastructure/database/generated/prisma';

export class UpdatePolicyDto {
  @IsOptional()
  @IsEnum(NotificationType)
  notificationType?: NotificationType;

  @IsOptional()
  @IsEnum(Channel)
  channel?: Channel;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  region?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  reason?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
