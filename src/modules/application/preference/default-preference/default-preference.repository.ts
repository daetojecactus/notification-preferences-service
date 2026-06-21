import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/modules/infrastructure/database/database.service';
import { Prisma, DefaultPreference } from 'src/modules/infrastructure/database/generated/prisma/edge';

@Injectable()
export class DefaultPreferenceRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  findOne(filter: Prisma.DefaultPreferenceWhereUniqueInput, select?: Prisma.DefaultPreferenceSelect): Promise<DefaultPreference | null> {
    return this.databaseService.defaultPreference.findUnique({
      where: filter,
      select,
    });
  }

  findFirst(filter: Prisma.DefaultPreferenceWhereInput, select?: Prisma.DefaultPreferenceSelect) {
    return this.databaseService.defaultPreference.findFirst({
      where: filter,
      select,
    });
  }

  find(filter: Prisma.DefaultPreferenceWhereInput, select?: Prisma.DefaultPreferenceSelect): Promise<DefaultPreference[]> {
    return this.databaseService.defaultPreference.findMany({
      where: filter,
      select,
    });
  }

  count(filter?: Prisma.DefaultPreferenceWhereInput): Promise<number> {
    return this.databaseService.defaultPreference.count({ where: filter });
  }

  async create(input: Prisma.DefaultPreferenceCreateInput, select?: Prisma.DefaultPreferenceSelect): Promise<DefaultPreference> {
    return await this.databaseService.defaultPreference.create({
      data: input,
      select,
    });
  }

  createMany(input: Prisma.DefaultPreferenceCreateManyInput[]): Promise<Prisma.BatchPayload> {
    return this.databaseService.defaultPreference.createMany({
      data: input,
      skipDuplicates: true,
    });
  }

  updateOne(
    filter: Prisma.DefaultPreferenceWhereUniqueInput,
    data: Prisma.DefaultPreferenceUpdateInput,
    select?: Prisma.DefaultPreferenceSelect,
  ): Promise<DefaultPreference> {
    return this.databaseService.defaultPreference.update({
      where: filter,
      data,
      select,
    });
  }

  updateMany(filter: Prisma.DefaultPreferenceWhereInput, data: Prisma.DefaultPreferenceUpdateManyMutationInput): Promise<Prisma.BatchPayload> {
    return this.databaseService.defaultPreference.updateMany({
      where: filter,
      data,
    });
  }

  upsert(
    filter: Prisma.DefaultPreferenceWhereUniqueInput,
    create: Prisma.DefaultPreferenceCreateInput,
    update: Prisma.DefaultPreferenceUpdateInput,
    select?: Prisma.DefaultPreferenceSelect,
  ): Promise<DefaultPreference> {
    return this.databaseService.defaultPreference.upsert({
      where: filter,
      create,
      update,
      select,
    });
  }

  async deleteOne(filter: Prisma.DefaultPreferenceWhereUniqueInput, select?: Prisma.DefaultPreferenceSelect) {
    return await this.databaseService.defaultPreference.delete({
      where: filter,
      select,
    });
  }

  deleteMany(filter: Prisma.DefaultPreferenceWhereInput): Promise<Prisma.BatchPayload> {
    return this.databaseService.defaultPreference.deleteMany({ where: filter });
  }
}
