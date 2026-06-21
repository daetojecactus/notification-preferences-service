import { Injectable } from '@nestjs/common';
import { DefaultPreference, Prisma } from 'src/modules/infrastructure/database/generated/prisma/edge';
import { DefaultPreferenceRepository } from './default-preference.repository';

@Injectable()
export class DefaultPreferenceService {
  constructor(private readonly defaultPreferenceRepository: DefaultPreferenceRepository) {}

  findOne(filter: Prisma.DefaultPreferenceWhereUniqueInput): Promise<DefaultPreference | null> {
    return this.defaultPreferenceRepository.findOne(filter);
  }

  find(filter: Prisma.DefaultPreferenceWhereInput, select?: Prisma.DefaultPreferenceSelect): Promise<DefaultPreference[]> {
    return this.defaultPreferenceRepository.find(filter, select);
  }

  async create(input: Prisma.DefaultPreferenceCreateInput): Promise<DefaultPreference> {
    return this.defaultPreferenceRepository.create(input);
  }

  updateOne(filter: Prisma.DefaultPreferenceWhereUniqueInput, data: Prisma.DefaultPreferenceUpdateInput): Promise<DefaultPreference> {
    return this.defaultPreferenceRepository.updateOne(filter, data);
  }

  async deleteOne(filter: Prisma.DefaultPreferenceWhereUniqueInput): Promise<void> {
    await this.defaultPreferenceRepository.deleteOne(filter);
  }
}
