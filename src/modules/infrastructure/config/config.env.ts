import { IsString } from 'class-validator';

export class AppEnvs {
  @IsString()
  DATABASE_URL!: string;
}
