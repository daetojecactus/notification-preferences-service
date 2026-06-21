import { Module } from '@nestjs/common';
import { EvaluateController } from './evaluate.controller';
import { EvaluationModule } from 'src/modules/application/evaluation/evaluation.module';

@Module({
  imports: [EvaluationModule],
  controllers: [EvaluateController],
  providers: [],
})
export class EvaluateApiModule {}
