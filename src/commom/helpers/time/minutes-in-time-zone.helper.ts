import { MINUTES_IN_DAY } from 'src/commom/constants/time.constants';

export function minutesInTimeZone(datetime: Date, timezone: string): number {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(datetime);
  const hours = Number(parts.find(part => part.type === 'hour')?.value);
  const minutes = Number(parts.find(part => part.type === 'minute')?.value);

  return (hours * 60 + minutes) % MINUTES_IN_DAY;
}
