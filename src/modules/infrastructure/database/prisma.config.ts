import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'src/modules/infrastructure/database/schema.prisma',
  migrations: {
    path: 'src/modules/infrastructure/database/migrations',
  },
  datasource: {
    url: process.env['DATABASE_URL'],
  },
});
