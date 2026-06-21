# Notification Preferences Service

Сервис отвечает на один вопрос: **можно ли отправить это уведомление этому пользователю прямо сейчас?**

Учитывает настройки самого пользователя, дефолты для новых аккаунтов, глобальные политики по регионам и quiet hours с учётом таймзоны. Возвращает чёткий ответ: `allow` или `deny` с причиной.

Стек: **TypeScript**, **NestJS**, **PostgreSQL**, **Prisma**.

## Что умеет

- Задавать дефолтные предпочтения — что включено «из коробки» для нового пользователя.
- Хранить индивидуальные настройки пользователя (по типу уведомления и каналу).
- Управлять глобальными политиками — например, запретить маркетинг в определённом регионе.
- Учитывать quiet hours с таймзоной пользователя (IANA) и переходом через полночь.
- Проверять возможность отправки через `POST /evaluate` — ответ мгновенный.
- Операции изменения настроек идемпотентны — можно вызывать повторно без побочных эффектов.

## Требования

- Node.js 22+
- pnpm 10+
- Docker и Docker Compose

## Быстрый старт (Docker)

Поднимает PostgreSQL и сам сервис одной командой. При старте контейнера применяются миграции и наполняются дефолтные предпочтения.

```bash
cp .env.example .env
docker compose up -d --build
```

Сервис будет доступен на `http://localhost:3000`.

## Локальный запуск (без контейнера приложения)

```bash
cp .env.example .env
pnpm install

# Поднять только PostgreSQL
docker compose up -d postgres

# Применить миграции и наполнить дефолтные предпочтения
pnpm prisma:generate
pnpm prisma:deploy
pnpm prisma:seed

# Запустить сервис
pnpm start:dev
```

> По умолчанию PostgreSQL слушает `localhost:5433` (см. `docker-compose.yml` и `.env`).

## Тесты

Unit-тесты покрывают ключевое поведение сервиса (дефолты, изменение настроек, quiet hours, глобальные политики, идемпотентность):

```bash
pnpm test
```

## API

### Получение предпочтений пользователя

```http
GET /users/:id/preferences
```

Возвращает эффективный набор предпочтений (дефолтные значения с наложенными пользовательскими) и quiet hours.

### Изменение предпочтений пользователя

```http
POST /users/:id/preferences
```

Тело (любое поле опционально):

```json
{
  "preferences": {
    "notificationType": "MARKETING_EMAIL",
    "channel": "EMAIL",
    "enabled": false
  },
  "quietHours": {
    "startTime": "22:00",
    "endTime": "08:00",
    "timezone": "Europe/Berlin",
    "enabled": true
  }
}
```

### Проверка возможности отправки

```http
POST /evaluate
```

```json
{
  "userId": "user-1",
  "notificationType": "MARKETING_SMS",
  "channel": "SMS",
  "region": "EU",
  "datetime": "2026-05-21T21:30:00Z"
}
```

Ответ:

```json
{
  "decision": "deny",
  "reason": "blocked_by_global_policy"
}
```

Возможные причины: `allowed`, `blocked_by_global_policy`, `blocked_by_user_preference`, `blocked_by_default_preference`, `blocked_by_quiet_hours`.

### CRUD глобальных политик

```http
POST   /policies
GET    /policies
GET    /policies/:id
PATCH  /policies/:id
DELETE /policies/:id
```

Пример создания политики (`notificationType`, `channel`, `region` опциональны — `null` означает «любой»):

```json
{
  "notificationType": "MARKETING_SMS",
  "region": "EU",
  "reason": "blocked_by_global_policy"
}
```

### Health

```http
GET /health/live
GET /health/ready
```

## Доменная модель

Перечисления (`NotificationType`, `Channel`, `PolicyAction`) и модели хранятся в PostgreSQL и типизированы через Prisma:

- `DefaultPreference` — дефолты по паре `notificationType + channel`.
- `UserPreference` — индивидуальные значения пользователя (override дефолтов).
- `UserQuietHours` — окно тишины пользователя (`HH:mm` + IANA timezone).
- `GlobalPolicy` — глобальные политики запрета по `notificationType / channel / region`.

## Логика решения `evaluate`

Правила применяются по приоритету, первое сработавшее дает `deny`:

1. **Глобальные политики** — если активная политика покрывает комбинацию `notificationType / channel / region` → `blocked_by_global_policy`.
2. **Предпочтение** — эффективное значение (пользовательское поверх дефолтного); если выключено → `blocked_by_user_preference` или `blocked_by_default_preference`.
3. **Quiet hours** — для маркетинговых типов в окне тишины (с учетом таймзоны и перехода через полночь) → `blocked_by_quiet_hours`. Транзакционные уведомления в quiet hours не блокируются.
4. Иначе → `allow`.

## Архитектура

Слоистая структура с разделением доменной логики и инфраструктуры:

```
src/modules
├── api              # HTTP-слой: контроллеры и DTO (валидация входных данных)
├── application      # Доменная логика: preference, quiet-hours, policy, evaluation, user
└── infrastructure   # config, database (Prisma), health
```
