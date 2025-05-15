# Инструкции по настройке базы данных для проекта SPBU Site

## Текущая конфигурация

В настоящее время проект настроен для использования:
- **SQLite** в режиме разработки (когда `DEBUG = True`)
- **PostgreSQL** в режиме продакшена (когда `DEBUG = False`)

## Для режима разработки (SQLite)

SQLite уже настроен и готов к использованию. Чтобы применить миграции:

```bash
# Активируйте виртуальное окружение
source .venv/bin/activate

# Перейдите в директорию с manage.py
cd spbu_site

# Примените миграции
python manage.py migrate
```

## Для режима продакшена (PostgreSQL)

### Установка PostgreSQL

Для Endeavor OS:
```bash
sudo pacman -S postgresql
```

### Настройка PostgreSQL

```bash
# Инициализация базы данных
sudo -u postgres initdb -D /var/lib/postgres/data

# Запуск сервиса PostgreSQL
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Создание базы данных и пользователя
sudo -u postgres psql -c "CREATE DATABASE spbu_site_db;"
sudo -u postgres psql -c "CREATE USER postgres WITH PASSWORD 'postgres';"
sudo -u postgres psql -c "ALTER ROLE postgres SET client_encoding TO 'utf8';"
sudo -u postgres psql -c "ALTER ROLE postgres SET default_transaction_isolation TO 'read committed';"
sudo -u postgres psql -c "ALTER ROLE postgres SET timezone TO 'Asia/Tashkent';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE spbu_site_db TO postgres;"
```

### Настройка переменных окружения

Создайте файл `.env` в корне проекта с следующими переменными:

```
DEBUG=False
DB_NAME=spbu_site_db
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
```

### Применение миграций

```bash
# Активируйте виртуальное окружение
source .venv/bin/activate

# Перейдите в директорию с manage.py
cd spbu_site

# Примените миграции
python manage.py migrate
```

## Альтернативный вариант: Docker

Если у вас установлен Docker и docker-compose, вы можете использовать их для запуска PostgreSQL:

```bash
# Установка Docker и docker-compose
sudo pacman -S docker docker-compose

# Запуск Docker
sudo systemctl start docker
sudo systemctl enable docker

# Запуск PostgreSQL в Docker
cd /home/progstas/project/spbu_site-1
docker-compose up -d
```

Затем установите `DEBUG=False` в настройках или в файле `.env`, чтобы использовать PostgreSQL.
