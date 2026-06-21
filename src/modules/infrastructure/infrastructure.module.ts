import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module.js';
import { ConfigModule } from './config/config.module.js';

@Module({
  imports: [DatabaseModule, ConfigModule],
})
export class InfrastructureModule {}
