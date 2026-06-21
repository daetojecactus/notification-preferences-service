import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/modules/infrastructure/database/database.service';
import { Prisma, GlobalPolicy } from 'src/modules/infrastructure/database/generated/prisma/edge';

@Injectable()
export class GlobalPolicyRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  findOne(filter: Prisma.GlobalPolicyWhereUniqueInput, select?: Prisma.GlobalPolicySelect): Promise<GlobalPolicy | null> {
    return this.databaseService.globalPolicy.findUnique({
      where: filter,
      select,
    });
  }

  find(filter: Prisma.GlobalPolicyWhereInput, select?: Prisma.GlobalPolicySelect): Promise<GlobalPolicy[]> {
    return this.databaseService.globalPolicy.findMany({
      where: filter,
      select,
    });
  }

  count(filter?: Prisma.GlobalPolicyWhereInput): Promise<number> {
    return this.databaseService.globalPolicy.count({ where: filter });
  }

  async create(input: Prisma.GlobalPolicyCreateInput, select?: Prisma.GlobalPolicySelect): Promise<GlobalPolicy> {
    return await this.databaseService.globalPolicy.create({
      data: input,
      select,
    });
  }

  createMany(input: Prisma.GlobalPolicyCreateManyInput[]): Promise<Prisma.BatchPayload> {
    return this.databaseService.globalPolicy.createMany({
      data: input,
      skipDuplicates: true,
    });
  }

  updateOne(filter: Prisma.GlobalPolicyWhereUniqueInput, data: Prisma.GlobalPolicyUpdateInput, select?: Prisma.GlobalPolicySelect): Promise<GlobalPolicy> {
    return this.databaseService.globalPolicy.update({
      where: filter,
      data,
      select,
    });
  }

  updateMany(filter: Prisma.GlobalPolicyWhereInput, data: Prisma.GlobalPolicyUpdateManyMutationInput): Promise<Prisma.BatchPayload> {
    return this.databaseService.globalPolicy.updateMany({
      where: filter,
      data,
    });
  }

  upsert(
    filter: Prisma.GlobalPolicyWhereUniqueInput,
    create: Prisma.GlobalPolicyCreateInput,
    update: Prisma.GlobalPolicyUpdateInput,
    select?: Prisma.GlobalPolicySelect,
  ): Promise<GlobalPolicy> {
    return this.databaseService.globalPolicy.upsert({
      where: filter,
      create,
      update,
      select,
    });
  }

  async deleteOne(filter: Prisma.GlobalPolicyWhereUniqueInput, select?: Prisma.GlobalPolicySelect) {
    return await this.databaseService.globalPolicy.delete({
      where: filter,
      select,
    });
  }

  deleteMany(filter: Prisma.GlobalPolicyWhereInput): Promise<Prisma.BatchPayload> {
    return this.databaseService.globalPolicy.deleteMany({ where: filter });
  }
}
