import { Channel, NotificationType } from 'src/modules/infrastructure/database/generated/prisma';
import { EvaluationReason } from './constants/evaluation.reason';

export interface EvaluationInput {
  userId: string;
  notificationType: NotificationType;
  channel: Channel;
  region: string;
  datetime: Date;
}

export enum EvaluationDecision {
  ALLOW = 'allow',
  DENY = 'deny',
}

export interface EvaluationResult {
  decision: EvaluationDecision;
  reason: EvaluationReason;
}
