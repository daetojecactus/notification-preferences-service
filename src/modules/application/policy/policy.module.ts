import { Module } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { GlobalPolicyService } from './global-policy/global-policy.service';
import { GlobalPolicyRepository } from './global-policy/global-policy.repository';

@Module({
  imports: [],
  providers: [GlobalPolicyService, GlobalPolicyRepository, PolicyService],
  exports: [PolicyService, GlobalPolicyService],
})
export class PolicyModule {}
