import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module.js';
import { ConfigModule } from './config/config.module.js';
import { HealthModule } from './health/health.module.js';

@Module({
  imports: [DatabaseModule, ConfigModule, HealthModule],
})
export class InfrastructureModule {}
