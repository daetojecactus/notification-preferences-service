export enum EvaluationReason {
  BLOCKED_BY_POLICY = 'blocked_by_global_policy',
  BLOCKED_BY_USER_PREFERENCE = 'blocked_by_user_preference',
  BLOCKED_BY_DEFAULT_PREFERENCE = 'blocked_by_default_preference',
  BLOCKED_BY_QUIET_HOURS = 'blocked_by_quiet_hours',
  ALLOWED = 'allowed',
}
