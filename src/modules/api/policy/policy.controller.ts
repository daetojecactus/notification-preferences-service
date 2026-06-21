import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { GlobalPolicyService } from 'src/modules/application/policy/global-policy/global-policy.service';
import { CreatePolicyDto } from './inputs/create-policy.input';
import { UpdatePolicyDto } from './inputs/update-policy.input';

@Controller('policies')
export class PolicyController {
  constructor(private readonly globalPolicyService: GlobalPolicyService) {}

  @Post('/')
  async create(@Body() dto: CreatePolicyDto) {
    return this.globalPolicyService.create({
      notificationType: dto.notificationType,
      channel: dto.channel,
      region: dto.region,
      reason: dto.reason,
      isActive: dto.isActive,
    });
  }

  @Get('/')
  async findAll() {
    return this.globalPolicyService.find({});
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const policy = await this.globalPolicyService.findOne({ id });
    if (!policy) {
      throw new NotFoundException();
    }
    return policy;
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdatePolicyDto) {
    return this.globalPolicyService.updateOne(
      { id },
      {
        notificationType: dto.notificationType,
        channel: dto.channel,
        region: dto.region,
        reason: dto.reason,
        isActive: dto.isActive,
      },
    );
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.globalPolicyService.deleteOne({ id });
    return { id };
  }
}
