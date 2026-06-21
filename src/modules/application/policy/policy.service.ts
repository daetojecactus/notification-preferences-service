import { Injectable } from '@nestjs/common';
import { GlobalPolicyService } from './global-policy/global-policy.service';
import { FindBlockingPolicyInput } from './policy.interface';

@Injectable()
export class PolicyService {
  constructor(private readonly globalPolicyService: GlobalPolicyService) {}

  async findBlockingPolicy(input: FindBlockingPolicyInput) {
    const { notificationType, channel, region } = input;
    return await this.globalPolicyService.find({
      isActive: true,
      AND: [
        {
          OR: [{ notificationType }, { notificationType: null }],
        },
        {
          OR: [{ channel }, { channel: null }],
        },
        {
          OR: [{ region }, { region: null }],
        },
      ],
    });
  }
}
