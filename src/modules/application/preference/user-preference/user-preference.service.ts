import { Injectable } from '@nestjs/common';
import { Prisma, UserPreference } from 'src/modules/infrastructure/database/generated/prisma/edge';
import { UserPreferenceRepository } from './user-preference.repository';

@Injectable()
export class UserPreferenceService {
  constructor(private readonly userPreferenceRepository: UserPreferenceRepository) {}

  findOne(filter: Prisma.UserPreferenceWhereUniqueInput): Promise<UserPreference | null> {
    return this.userPreferenceRepository.findOne(filter);
  }

  find(filter: Prisma.UserPreferenceWhereInput, select?: Prisma.UserPreferenceSelect): Promise<UserPreference[]> {
    return this.userPreferenceRepository.find(filter, select);
  }

  async create(input: Prisma.UserPreferenceCreateInput): Promise<UserPreference> {
    return this.userPreferenceRepository.create(input);
  }

  async upsert(
    filter: Prisma.UserPreferenceWhereUniqueInput,
    createInput: Prisma.UserPreferenceCreateInput,
    updateData: Prisma.UserPreferenceUpdateInput,
  ): Promise<UserPreference> {
    return this.userPreferenceRepository.upsert(filter, createInput, updateData);
  }

  updateOne(filter: Prisma.UserPreferenceWhereUniqueInput, data: Prisma.UserPreferenceUpdateInput): Promise<UserPreference> {
    return this.userPreferenceRepository.updateOne(filter, data);
  }

  async deleteOne(filter: Prisma.UserPreferenceWhereUniqueInput): Promise<void> {
    await this.userPreferenceRepository.deleteOne(filter);
  }
}
