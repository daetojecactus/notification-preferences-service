import { Module } from '@nestjs/common';
import { UserApiModule } from './user/user.module';
import { EvaluateApiModule } from './evaluate/evaluate.module';
import { PolicyApiModule } from './policy/policy.module';

@Module({
  imports: [UserApiModule, EvaluateApiModule, PolicyApiModule],
  providers: [],
})
export class ApiModule {}
