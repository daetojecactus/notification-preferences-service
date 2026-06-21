-- CreateEnum
CREATE TYPE "notification_type" AS ENUM ('TRANSACTIONAL_EMAIL', 'MARKETING_EMAIL', 'TRANSACTIONAL_SMS', 'MARKETING_SMS', 'TRANSACTIONAL_PUSH', 'MARKETING_PUSH', 'TRANSACTIONAL_MESSENGER', 'MARKETING_MESSENGER');

-- CreateEnum
CREATE TYPE "channel" AS ENUM ('EMAIL', 'SMS', 'PUSH', 'MESSENGER');

-- CreateEnum
CREATE TYPE "policy_action" AS ENUM ('DENY');

-- CreateTable
CREATE TABLE "default_preference" (
    "id" UUID NOT NULL,
    "notification_type" "notification_type" NOT NULL,
    "channel" "channel" NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "default_preference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_preference" (
    "id" UUID NOT NULL,
    "user_id" TEXT NOT NULL,
    "notification_type" "notification_type" NOT NULL,
    "channel" "channel" NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_preference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_quiet_hours" (
    "id" UUID NOT NULL,
    "user_id" TEXT NOT NULL,
    "start_time" TIME NOT NULL,
    "end_time" TIME NOT NULL,
    "timezone" VARCHAR(100) NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_quiet_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "global_policy" (
    "id" UUID NOT NULL,
    "notification_type" "notification_type",
    "channel" "channel",
    "region" VARCHAR(10),
    "action" "policy_action" NOT NULL DEFAULT 'DENY',
    "reason" VARCHAR(500) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "global_policy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "default_preference_notification_type_channel_key" ON "default_preference"("notification_type", "channel");

-- CreateIndex
CREATE UNIQUE INDEX "user_preference_user_id_notification_type_channel_key" ON "user_preference"("user_id", "notification_type", "channel");

-- CreateIndex
CREATE UNIQUE INDEX "user_quiet_hours_user_id_key" ON "user_quiet_hours"("user_id");

-- CreateIndex
CREATE INDEX "global_policy_notification_type_channel_region_idx" ON "global_policy"("notification_type", "channel", "region");
