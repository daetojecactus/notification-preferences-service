import { QuietHoursService } from './quiet-hours.service';

describe('QuietHoursService', () => {
  let quietHoursService: QuietHoursService;
  let userQuietHoursService: { findOne: jest.Mock; upsert: jest.Mock };

  beforeEach(() => {
    userQuietHoursService = { findOne: jest.fn(), upsert: jest.fn() };
    quietHoursService = new QuietHoursService(userQuietHoursService as any);
  });

  const quietHoursRecord = (overrides: Partial<{ startTime: Date; endTime: Date; timezone: string; enabled: boolean }> = {}) => ({
    id: 'qh-1',
    userId: 'user-1',
    startTime: new Date(Date.UTC(1970, 0, 1, 22, 0, 0)),
    endTime: new Date(Date.UTC(1970, 0, 1, 8, 0, 0)),
    timezone: 'Europe/Berlin',
    enabled: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  });

  it('is active during an overnight window taking timezone into account', async () => {
    userQuietHoursService.findOne.mockResolvedValue(quietHoursRecord());

    const active = await quietHoursService.isQuietHoursActive({
      userId: 'user-1',
      datetime: new Date('2026-05-21T21:30:00Z'),
    });

    expect(active).toBe(true);
  });

  it('is inactive outside the quiet window', async () => {
    userQuietHoursService.findOne.mockResolvedValue(quietHoursRecord());

    const active = await quietHoursService.isQuietHoursActive({
      userId: 'user-1',
      datetime: new Date('2026-05-21T09:00:00Z'),
    });

    expect(active).toBe(false);
  });

  it('is inactive when quiet hours are disabled', async () => {
    userQuietHoursService.findOne.mockResolvedValue(quietHoursRecord({ enabled: false }));

    const active = await quietHoursService.isQuietHoursActive({
      userId: 'user-1',
      datetime: new Date('2026-05-21T21:30:00Z'),
    });

    expect(active).toBe(false);
  });

  it('is inactive when the user has no quiet hours configured', async () => {
    userQuietHoursService.findOne.mockResolvedValue(null);

    const active = await quietHoursService.isQuietHoursActive({
      userId: 'user-1',
      datetime: new Date('2026-05-21T21:30:00Z'),
    });

    expect(active).toBe(false);
  });

  it('maps stored time values to HH:mm strings', async () => {
    userQuietHoursService.findOne.mockResolvedValue(quietHoursRecord());

    const quietHours = await quietHoursService.getUserQuietHours('user-1');

    expect(quietHours).toEqual({
      startTime: '22:00',
      endTime: '08:00',
      timezone: 'Europe/Berlin',
      enabled: true,
    });
  });
});
