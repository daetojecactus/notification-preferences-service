import { Body, Controller, Post } from '@nestjs/common';
import { EvaluateNotificationDto } from './inputs/evaluate.input';
import { EvaluationService } from 'src/modules/application/evaluation/evaluation.service';

@Controller('evaluate')
export class EvaluateController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post('/')
  async evaluate(@Body() dto: EvaluateNotificationDto) {
    return this.evaluationService.evaluate({
      userId: dto.userId,
      notificationType: dto.notificationType,
      channel: dto.channel,
      region: dto.region,
      datetime: new Date(dto.datetime),
    });
  }
}
