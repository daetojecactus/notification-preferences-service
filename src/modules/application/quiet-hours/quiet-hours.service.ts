import { Injectable, Logger } from '@nestjs/common';
import { UserQuietHoursService } from './user-quiet-hours/user-quiet-hours.service';
import { QuietHoursItem, ResolveEffectiveQuietHoursInput, UpdateQuietHoursInput } from './quiet-hours.interface';
import { QuietHoursMessages } from './constants/quiet-hours.messages';
import { dateToTimeString } from 'src/commom/helpers/time/date-to-time-string.helper';
import { timeStringToDate } from 'src/commom/helpers/time/time-string-to-date.helper';
import { timeStringToMinutes } from 'src/commom/helpers/time/time-string-to-minutes.helper';
import { minutesInTimeZone } from 'src/commom/helpers/time/minutes-in-time-zone.helper';

@Injectable()
export class QuietHoursService {
  private readonly logger = new Logger(QuietHoursService.name);

  constructor(private readonly userQuietHoursService: UserQuietHoursService) {}

  async getUserQuietHours(userId: string): Promise<QuietHoursItem | null> {
    const quietHours = await this.userQuietHoursService.findOne({ userId });
    if (!quietHours) {
      return null;
    }

    return {
      startTime: dateToTimeString(quietHours.startTime),
      endTime: dateToTimeString(quietHours.endTime),
      timezone: quietHours.timezone,
      enabled: quietHours.enabled,
    };
  }

  async updateUserQuietHours(input: UpdateQuietHoursInput): Promise<QuietHoursItem> {
    const { userId, payload } = input;
    const { startTime, endTime, timezone, enabled } = payload;

    const startTimeDate = timeStringToDate(startTime);
    const endTimeDate = timeStringToDate(endTime);

    const quietHours = await this.userQuietHoursService.upsert(
      { userId },
      {
        userId,
        startTime: startTimeDate,
        endTime: endTimeDate,
        timezone,
        enabled,
      },
      {
        startTime: startTimeDate,
        endTime: endTimeDate,
        timezone,
        enabled,
      },
    );

    this.logger.log(QuietHoursMessages.QUIET_HOURS_UPDATED, {
      userId,
      startTime,
      endTime,
      timezone,
      enabled,
    });

    return {
      startTime: dateToTimeString(quietHours.startTime),
      endTime: dateToTimeString(quietHours.endTime),
      timezone: quietHours.timezone,
      enabled: quietHours.enabled,
    };
  }

  async isQuietHoursActive(input: ResolveEffectiveQuietHoursInput): Promise<boolean> {
    const { userId, datetime } = input;
    const quietHours = await this.getUserQuietHours(userId);
    if (!quietHours || !quietHours.enabled) {
      return false;
    }

    const startMinutes = timeStringToMinutes(quietHours.startTime);
    const endMinutes = timeStringToMinutes(quietHours.endTime);
    if (startMinutes === endMinutes) {
      return false;
    }

    const currentMinutes = minutesInTimeZone(datetime, quietHours.timezone);

    if (startMinutes < endMinutes) {
      return currentMinutes >= startMinutes && currentMinutes < endMinutes;
    }

    return currentMinutes >= startMinutes || currentMinutes < endMinutes;
  }
}
