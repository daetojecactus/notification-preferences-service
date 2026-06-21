import { Injectable } from '@nestjs/common';
import { GlobalPolicy, Prisma } from 'src/modules/infrastructure/database/generated/prisma/edge';
import { GlobalPolicyRepository } from './global-policy.repository';

@Injectable()
export class GlobalPolicyService {
  constructor(private readonly globalPolicyRepository: GlobalPolicyRepository) {}

  findOne(filter: Prisma.GlobalPolicyWhereUniqueInput): Promise<GlobalPolicy | null> {
    return this.globalPolicyRepository.findOne(filter);
  }

  find(filter: Prisma.GlobalPolicyWhereInput): Promise<GlobalPolicy[]> {
    return this.globalPolicyRepository.find(filter);
  }

  async create(input: Prisma.GlobalPolicyCreateInput): Promise<GlobalPolicy> {
    return this.globalPolicyRepository.create(input);
  }

  updateOne(filter: Prisma.GlobalPolicyWhereUniqueInput, data: Prisma.GlobalPolicyUpdateInput): Promise<GlobalPolicy> {
    return this.globalPolicyRepository.updateOne(filter, data);
  }

  async deleteOne(filter: Prisma.GlobalPolicyWhereUniqueInput): Promise<void> {
    await this.globalPolicyRepository.deleteOne(filter);
  }
}
