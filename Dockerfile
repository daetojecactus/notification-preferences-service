FROM node:24-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm@10
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm prisma:generate && pnpm build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g pnpm@10
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/modules/infrastructure/database/schema.prisma ./src/modules/infrastructure/database/schema.prisma
COPY --from=builder /app/src/modules/infrastructure/database/prisma.config.ts ./src/modules/infrastructure/database/prisma.config.ts
COPY --from=builder /app/src/modules/infrastructure/database/migrations ./src/modules/infrastructure/database/migrations
EXPOSE 3000
CMD ["sh", "-c", "pnpm prisma:deploy && pnpm prisma:seed && node dist/main"]
