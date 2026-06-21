import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class HealthService {
  constructor(private readonly databaseService: DatabaseService) {}

  async checkDatabase(): Promise<boolean> {
    try {
      await this.databaseService.$queryRaw`SELECT 1`;
      return true;
    } catch {
      return false;
    }
  }
}
