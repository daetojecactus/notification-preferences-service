import { Module } from '@nestjs/common';
import { PolicyController } from './policy.controller';
import { PolicyModule } from 'src/modules/application/policy/policy.module';

@Module({
  imports: [PolicyModule],
  controllers: [PolicyController],
  providers: [],
})
export class PolicyApiModule {}
