import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthMessages } from './constants/health.messages';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('live')
  live() {
    return { status: HealthMessages.HEALTH_STATUS_OK };
  }

  @Get('ready')
  async ready() {
    const dbOk = await this.healthService.checkDatabase();

    return {
      status: dbOk
        ? HealthMessages.HEALTH_STATUS_OK
        : HealthMessages.HEALTH_STATUS_DEGRADED,
      database: dbOk
        ? HealthMessages.HEALTH_STATUS_CONNECTED
        : HealthMessages.HEALTH_STATUS_DISCONNECTED,
    };
  }
}
