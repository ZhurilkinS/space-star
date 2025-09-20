# Space Star

**Space Star** — это fullstack-приложение для управления и отображения контента и меню, построенное на стеке React + Vite (frontend) и NestJS + TypeORM (backend).

---

## Структура репозитория

- **frontend/** — клиентская часть (React, Vite, Redux Toolkit)
- **backend/** — серверная часть (NestJS, TypeORM, PostgreSQL)
- **dist-frontend/** — собранный фронтенд для деплоя через backend

---

## Быстрый старт

### 1. Клонирование и установка зависимостей

```bash
git clone <url>
cd space-star
cd frontend && npm i
cd ../backend && npm i
```

---

### 2. Настройка переменных окружения

В папке `backend` создайте файл `.env`:

```
DATABASE_URL=postgres://user:password@localhost:5432/space_star
```

---

### 3. Запуск в режиме разработки

#### Backend

```bash
cd backend
npm run start:dev
```

#### Frontend

```bash
cd frontend
npm run dev
```

---

### 4. Сборка и запуск в Docker

1. Соберите фронтенд:

    ```bash
    cd frontend
    npm run build
    cp -r dist ../backend/dist-frontend
    ```

2. Соберите и запустите backend с фронтендом:

    ```bash
    cd ../backend
    docker build -t space-star-backend .
    docker run --env-file .env -p 3000:3000 space-star-backend
    ```

---

## Основные возможности

- **Админ-панель**: управление контентом главной страницы и пунктами меню ` /admin`
- **REST API**: получение и обновление контента и меню
- **Валидация данных**: на фронте и бэке
- **Docker-ready**: удобный деплой

---

## Основные эндпоинты backend

- `GET /admin/all-data` — получить весь контент и меню
- `PUT /admin/content` — обновить контент (hero, преимущества)
- `PUT /admin/menu` — обновить меню
- `GET /admin/content` — получить только контент
- `GET /admin/menu` — получить только меню

---

## Технологии

- **Frontend**: React, Vite, TypeScript, Redux Toolkit, SCSS Modules
- **Backend**: NestJS, TypeORM, PostgreSQL
- **DevOps**: Docker

---

## Разработчики

Space Star Team, 2025

---

**P.S.**  
Перед деплоем убедитесь, что фронтенд собран и скопирован в `backend/dist-frontend`!