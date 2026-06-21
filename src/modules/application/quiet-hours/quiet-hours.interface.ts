export interface QuietHoursItem {
  startTime: string;
  endTime: string;
  timezone: string;
  enabled: boolean;
}

export interface UpdateQuietHoursInput {
  userId: string;
  payload: QuietHoursItem;
}

export interface ResolveEffectiveQuietHoursInput {
  userId: string;
  datetime: Date;
}
