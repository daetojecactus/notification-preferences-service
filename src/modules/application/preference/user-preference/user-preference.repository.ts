import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/modules/infrastructure/database/database.service';
import { Prisma, UserPreference } from 'src/modules/infrastructure/database/generated/prisma/edge';

@Injectable()
export class UserPreferenceRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  findOne(filter: Prisma.UserPreferenceWhereUniqueInput, select?: Prisma.UserPreferenceSelect): Promise<UserPreference | null> {
    return this.databaseService.userPreference.findUnique({
      where: filter,
      select,
    });
  }

  findFirst(filter: Prisma.UserPreferenceWhereInput, select?: Prisma.UserPreferenceSelect) {
    return this.databaseService.userPreference.findFirst({
      where: filter,
      select,
    });
  }

  find(filter: Prisma.UserPreferenceWhereInput, select?: Prisma.UserPreferenceSelect): Promise<UserPreference[]> {
    return this.databaseService.userPreference.findMany({
      where: filter,
      select,
    });
  }

  count(filter?: Prisma.UserPreferenceWhereInput): Promise<number> {
    return this.databaseService.userPreference.count({ where: filter });
  }

  async create(input: Prisma.UserPreferenceCreateInput, select?: Prisma.UserPreferenceSelect): Promise<UserPreference> {
    return await this.databaseService.userPreference.create({
      data: input,
      select,
    });
  }

  createMany(input: Prisma.UserPreferenceCreateManyInput[]): Promise<Prisma.BatchPayload> {
    return this.databaseService.userPreference.createMany({
      data: input,
      skipDuplicates: true,
    });
  }

  updateOne(
    filter: Prisma.UserPreferenceWhereUniqueInput,
    data: Prisma.UserPreferenceUpdateInput,
    select?: Prisma.UserPreferenceSelect,
  ): Promise<UserPreference> {
    return this.databaseService.userPreference.update({
      where: filter,
      data,
      select,
    });
  }

  updateMany(filter: Prisma.UserPreferenceWhereInput, data: Prisma.UserPreferenceUpdateManyMutationInput): Promise<Prisma.BatchPayload> {
    return this.databaseService.userPreference.updateMany({
      where: filter,
      data,
    });
  }

  upsert(
    filter: Prisma.UserPreferenceWhereUniqueInput,
    create: Prisma.UserPreferenceCreateInput,
    update: Prisma.UserPreferenceUpdateInput,
    select?: Prisma.UserPreferenceSelect,
  ): Promise<UserPreference> {
    return this.databaseService.userPreference.upsert({
      where: filter,
      create,
      update,
      select,
    });
  }

  async deleteOne(filter: Prisma.UserPreferenceWhereUniqueInput, select?: Prisma.UserPreferenceSelect) {
    return await this.databaseService.userPreference.delete({
      where: filter,
      select,
    });
  }

  deleteMany(filter: Prisma.UserPreferenceWhereInput): Promise<Prisma.BatchPayload> {
    return this.databaseService.userPreference.deleteMany({ where: filter });
  }
}
