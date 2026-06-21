import { IsEnum, IsString, IsOptional, IsBoolean, ValidateNested, IsTimeZone, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { Channel, NotificationType } from 'src/modules/infrastructure/database/generated/prisma';
import { TIME_PATTERN } from 'src/commom/constants/time.constants';

export class PreferencesDto {
  @IsEnum(NotificationType)
  notificationType!: NotificationType;

  @IsEnum(Channel)
  channel!: Channel;

  @IsBoolean()
  enabled!: boolean;
}

export class QuietHoursDto {
  @IsString()
  @Matches(TIME_PATTERN)
  startTime!: string;

  @IsString()
  @Matches(TIME_PATTERN)
  endTime!: string;

  @IsTimeZone()
  timezone!: string;

  @IsBoolean()
  enabled!: boolean;
}

export class UpdateUserPreferencesDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => PreferencesDto)
  preferences?: PreferencesDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => QuietHoursDto)
  quietHours?: QuietHoursDto;
}
