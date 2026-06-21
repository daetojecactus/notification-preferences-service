import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/modules/infrastructure/database/database.service';
import { Prisma, UserQuietHours } from 'src/modules/infrastructure/database/generated/prisma/edge';

@Injectable()
export class UserQuietHoursRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  findOne(filter: Prisma.UserQuietHoursWhereUniqueInput, select?: Prisma.UserQuietHoursSelect): Promise<UserQuietHours | null> {
    return this.databaseService.userQuietHours.findUnique({
      where: filter,
      select,
    });
  }

  find(filter: Prisma.UserQuietHoursWhereInput, select?: Prisma.UserQuietHoursSelect): Promise<UserQuietHours[]> {
    return this.databaseService.userQuietHours.findMany({
      where: filter,
      select,
    });
  }

  count(filter?: Prisma.UserQuietHoursWhereInput): Promise<number> {
    return this.databaseService.userQuietHours.count({ where: filter });
  }

  async create(input: Prisma.UserQuietHoursCreateInput, select?: Prisma.UserQuietHoursSelect): Promise<UserQuietHours> {
    return await this.databaseService.userQuietHours.create({
      data: input,
      select,
    });
  }

  createMany(input: Prisma.UserQuietHoursCreateManyInput[]): Promise<Prisma.BatchPayload> {
    return this.databaseService.userQuietHours.createMany({
      data: input,
      skipDuplicates: true,
    });
  }

  updateOne(
    filter: Prisma.UserQuietHoursWhereUniqueInput,
    data: Prisma.UserQuietHoursUpdateInput,
    select?: Prisma.UserQuietHoursSelect,
  ): Promise<UserQuietHours> {
    return this.databaseService.userQuietHours.update({
      where: filter,
      data,
      select,
    });
  }

  updateMany(filter: Prisma.UserQuietHoursWhereInput, data: Prisma.UserQuietHoursUpdateManyMutationInput): Promise<Prisma.BatchPayload> {
    return this.databaseService.userQuietHours.updateMany({
      where: filter,
      data,
    });
  }

  upsert(
    filter: Prisma.UserQuietHoursWhereUniqueInput,
    create: Prisma.UserQuietHoursCreateInput,
    update: Prisma.UserQuietHoursUpdateInput,
    select?: Prisma.UserQuietHoursSelect,
  ): Promise<UserQuietHours> {
    return this.databaseService.userQuietHours.upsert({
      where: filter,
      create,
      update,
      select,
    });
  }

  async deleteOne(filter: Prisma.UserQuietHoursWhereUniqueInput, select?: Prisma.UserQuietHoursSelect) {
    return await this.databaseService.userQuietHours.delete({
      where: filter,
      select,
    });
  }

  deleteMany(filter: Prisma.UserQuietHoursWhereInput): Promise<Prisma.BatchPayload> {
    return this.databaseService.userQuietHours.deleteMany({ where: filter });
  }
}
