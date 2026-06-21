import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { Channel, NotificationType, PrismaClient } from './generated/prisma';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const defaultPreferences: { notificationType: NotificationType; channel: Channel; enabled: boolean }[] = [
  { notificationType: NotificationType.TRANSACTIONAL_EMAIL, channel: Channel.EMAIL, enabled: true },
  { notificationType: NotificationType.MARKETING_EMAIL, channel: Channel.EMAIL, enabled: false },
  { notificationType: NotificationType.TRANSACTIONAL_SMS, channel: Channel.SMS, enabled: true },
  { notificationType: NotificationType.MARKETING_SMS, channel: Channel.SMS, enabled: false },
  { notificationType: NotificationType.TRANSACTIONAL_PUSH, channel: Channel.PUSH, enabled: true },
  { notificationType: NotificationType.MARKETING_PUSH, channel: Channel.PUSH, enabled: false },
  { notificationType: NotificationType.TRANSACTIONAL_MESSENGER, channel: Channel.MESSENGER, enabled: true },
  { notificationType: NotificationType.MARKETING_MESSENGER, channel: Channel.MESSENGER, enabled: false },
];

async function main() {
  for (const preference of defaultPreferences) {
    await prisma.defaultPreference.upsert({
      where: {
        notificationType_channel: {
          notificationType: preference.notificationType,
          channel: preference.channel,
        },
      },
      create: preference,
      update: { enabled: preference.enabled },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async error => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
