import { Injectable } from '@nestjs/common';
import { Prisma, UserQuietHours } from 'src/modules/infrastructure/database/generated/prisma/edge';
import { UserQuietHoursRepository } from './user-quiet-hours.repository';

@Injectable()
export class UserQuietHoursService {
  constructor(private readonly userQuietHoursRepository: UserQuietHoursRepository) {}

  findOne(filter: Prisma.UserQuietHoursWhereUniqueInput): Promise<UserQuietHours | null> {
    return this.userQuietHoursRepository.findOne(filter);
  }

  find(filter: Prisma.UserQuietHoursWhereInput, select?: Prisma.UserQuietHoursSelect): Promise<UserQuietHours[]> {
    return this.userQuietHoursRepository.find(filter, select);
  }

  async create(input: Prisma.UserQuietHoursCreateInput): Promise<UserQuietHours> {
    return this.userQuietHoursRepository.create(input);
  }

  async upsert(
    filter: Prisma.UserQuietHoursWhereUniqueInput,
    createInput: Prisma.UserQuietHoursCreateInput,
    updateData: Prisma.UserQuietHoursUpdateInput,
  ): Promise<UserQuietHours> {
    return this.userQuietHoursRepository.upsert(filter, createInput, updateData);
  }

  updateOne(filter: Prisma.UserQuietHoursWhereUniqueInput, data: Prisma.UserQuietHoursUpdateInput): Promise<UserQuietHours> {
    return this.userQuietHoursRepository.updateOne(filter, data);
  }

  async deleteOne(filter: Prisma.UserQuietHoursWhereUniqueInput): Promise<void> {
    await this.userQuietHoursRepository.deleteOne(filter);
  }
}
