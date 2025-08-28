# 🌐 Руководство по развертыванию

Подробное руководство по развертыванию проекта СПбГУ в городе Ташкенте в различных окружениях.

## 📋 Содержание

- [🚀 Быстрое развертывание](#-быстрое-развертывание)
- [🐳 Docker развертывание](#-docker-развертывание)
- [☁️ Облачное развертывание](#️-облачное-развертывание)
- [🖥️ VPS развертывание](#️-vps-развертывание)
- [🔧 Настройка окружения](#-настройка-окружения)
- [📊 Мониторинг](#-мониторинг)
- [🔄 CI/CD](#-cicd)
- [🔒 Безопасность](#-безопасность)

## 🚀 Быстрое развертывание

### Локальное развертывание

```bash
# Клонирование проекта
git clone https://github.com/your-org/spbu-tashkent-website.git
cd spbu-tashkent-website

# Frontend
cd spbu_site
npm install
npm run build

# Backend
cd ../spbu_site_backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Настройка базы данных
python manage.py migrate
python manage.py collectstatic

# Запуск
python manage.py runserver
```

### Docker Compose (рекомендуется)

```bash
# Сборка и запуск всех сервисов
docker-compose up -d

# Проверка статуса
docker-compose ps

# Просмотр логов
docker-compose logs -f
```

## 🐳 Docker развертывание

### Dockerfile для Frontend

```dockerfile
# spbu_site/Dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Dockerfile для Backend

```dockerfile
# spbu_site_backend/Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Установка системных зависимостей
RUN apt-get update && apt-get install -y \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Копирование requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копирование кода
COPY . .

# Создание пользователя
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /app
USER appuser

# Сборка статических файлов
RUN python manage.py collectstatic --noinput

EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "spbu_site.wsgi:application"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: "3.8"

services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: spbu_tashkent
      POSTGRES_USER: spbu_user
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  backend:
    build: ./spbu_site_backend
    environment:
      - DEBUG=False
      - DATABASE_URL=postgresql://spbu_user:${DB_PASSWORD}@db:5432/spbu_tashkent
      - REDIS_URL=redis://redis:6379
      - SECRET_KEY=${SECRET_KEY}
    depends_on:
      - db
      - redis
    volumes:
      - media_files:/app/media
    ports:
      - "8000:8000"

  frontend:
    build: ./spbu_site
    ports:
      - "80:80"
    depends_on:
      - backend

  nginx:
    image: nginx:alpine
    ports:
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
    depends_on:
      - frontend
      - backend

volumes:
  postgres_data:
  media_files:
```

### Nginx конфигурация

```nginx
# nginx/nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream backend {
        server backend:8000;
    }

    upstream frontend {
        server frontend:80;
    }

    # Frontend
    server {
        listen 80;
        server_name spbu.uz www.spbu.uz;

        location / {
            proxy_pass http://frontend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }

    # Backend API
    server {
        listen 80;
        server_name api.spbu.uz;

        location / {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /static/ {
            alias /app/static/;
        }

        location /media/ {
            alias /app/media/;
        }
    }
}
```

## ☁️ Облачное развертывание

### AWS развертывание

#### EC2 + RDS + S3

```bash
# Создание EC2 инстанса
aws ec2 run-instances \
    --image-id ami-0c02fb55956c7d316 \
    --instance-type t3.medium \
    --key-name your-key-pair \
    --security-group-ids sg-xxxxxxxxx

# Настройка RDS
aws rds create-db-instance \
    --db-instance-identifier spbu-tashkent-db \
    --db-instance-class db.t3.micro \
    --engine postgres \
    --master-username spbu_user \
    --master-user-password ${DB_PASSWORD}

# Настройка S3 для статических файлов
aws s3 mb s3://spbu-tashkent-static
aws s3 mb s3://spbu-tashkent-media
```

#### AWS ECS развертывание

```yaml
# task-definition.json
{
  "family": "spbu-tashkent",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "executionRoleArn": "arn:aws:iam::account:role/ecsTaskExecutionRole",
  "containerDefinitions":
    [
      {
        "name": "backend",
        "image": "your-account/spbu-backend:latest",
        "portMappings": [{ "containerPort": 8000, "protocol": "tcp" }],
        "environment":
          [
            {
              "name": "DATABASE_URL",
              "value": "postgresql://user:pass@rds-endpoint:5432/db",
            },
          ],
      },
    ],
}
```

### Google Cloud Platform

#### App Engine развертывание

```yaml
# app.yaml
runtime: python311
env: standard

instance_class: F1

automatic_scaling:
  target_cpu_utilization: 0.65
  min_instances: 1
  max_instances: 10

env_variables:
  DATABASE_URL: "postgresql://user:pass@/db?host=/cloudsql/project:region:instance"
  SECRET_KEY: "your-secret-key"

handlers:
  - url: /static
    static_dir: static/
  - url: /.*
    script: auto
```

### DigitalOcean

#### App Platform развертывание

```yaml
# .do/app.yaml
name: spbu-tashkent
services:
  - name: backend
    source_dir: /spbu_site_backend
    github:
      repo: your-org/spbu-tashkent-website
      branch: main
    run_command: gunicorn spbu_site.wsgi:application --bind 0.0.0.0:8000
    environment_slug: python
    instance_count: 2
    instance_size_slug: basic-xxs

  - name: frontend
    source_dir: /spbu_site
    github:
      repo: your-org/spbu-tashkent-website
      branch: main
    run_command: npm run build && nginx -g 'daemon off;'
    environment_slug: node-js
    instance_count: 2
    instance_size_slug: basic-xxs
```

## 🖥️ VPS развертывание

### Ubuntu Server 22.04

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка необходимых пакетов
sudo apt install -y nginx postgresql postgresql-contrib redis-server

# Установка Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установка Python
sudo apt install -y python3 python3-pip python3-venv

# Создание пользователя для приложения
sudo useradd -m -s /bin/bash spbu
sudo usermod -aG sudo spbu
```

### Настройка базы данных

```bash
# Переключение на пользователя postgres
sudo -u postgres psql

# Создание базы данных и пользователя
CREATE DATABASE spbu_tashkent;
CREATE USER spbu_user WITH PASSWORD 'your-secure-password';
GRANT ALL PRIVILEGES ON DATABASE spbu_tashkent TO spbu_user;
\q
```

### Настройка приложения

```bash
# Переключение на пользователя приложения
sudo su - spbu

# Клонирование проекта
git clone https://github.com/your-org/spbu-tashkent-website.git
cd spbu-tashkent-website

# Настройка backend
cd spbu_site_backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Применение миграций
python manage.py migrate
python manage.py collectstatic

# Настройка frontend
cd ../spbu_site
npm install
npm run build
```

### Systemd сервисы

```ini
# /etc/systemd/system/spbu-backend.service
[Unit]
Description=SPbU Backend
After=network.target

[Service]
Type=simple
User=spbu
WorkingDirectory=/home/spbu/spbu-tashkent-website/spbu_site_backend
Environment=PATH=/home/spbu/spbu-tashkent-website/spbu_site_backend/venv/bin
ExecStart=/home/spbu/spbu-tashkent-website/spbu_site_backend/venv/bin/gunicorn --bind 0.0.0.0:8000 spbu_site.wsgi:application
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
# Активация сервиса
sudo systemctl enable spbu-backend
sudo systemctl start spbu-backend
sudo systemctl status spbu-backend
```

## 🔧 Настройка окружения

### Переменные окружения

```bash
# .env.production
DEBUG=False
SECRET_KEY=your-super-secret-key-here
DATABASE_URL=postgresql://user:password@localhost/spbu_tashkent
REDIS_URL=redis://localhost:6379
ALLOWED_HOSTS=spbu.uz,www.spbu.uz,api.spbu.uz

# Email настройки
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# CDN настройки
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_STORAGE_BUCKET_NAME=spbu-tashkent-static
AWS_S3_CUSTOM_DOMAIN=cdn.spbu.uz
```

### SSL сертификаты

```bash
# Установка Certbot
sudo apt install certbot python3-certbot-nginx

# Получение SSL сертификата
sudo certbot --nginx -d spbu.uz -d www.spbu.uz

# Автоматическое обновление
sudo crontab -e
# Добавить строку:
0 12 * * * /usr/bin/certbot renew --quiet
```

## 📊 Мониторинг

### Логирование

```python
# settings.py
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'file': {
            'level': 'INFO',
            'class': 'logging.FileHandler',
            'filename': '/var/log/spbu/django.log',
            'formatter': 'verbose',
        },
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
    },
    'root': {
        'handlers': ['console', 'file'],
        'level': 'INFO',
    },
}
```

### Мониторинг производительности

```bash
# Установка Prometheus
wget https://github.com/prometheus/prometheus/releases/download/v2.45.0/prometheus-2.45.0.linux-amd64.tar.gz
tar xvf prometheus-*.tar.gz
cd prometheus-*

# Конфигурация
cat > prometheus.yml << EOF
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'spbu-backend'
    static_configs:
      - targets: ['localhost:8000']
EOF

# Запуск
./prometheus --config.file=prometheus.yml
```

### Grafana дашборд

```json
{
  "dashboard": {
    "title": "SPbU Tashkent Metrics",
    "panels": [
      {
        "title": "Response Time",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_request_duration_seconds_sum[5m])",
            "legendFormat": "{{method}} {{route}}"
          }
        ]
      },
      {
        "title": "Error Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total{status=~\"5..\"}[5m])",
            "legendFormat": "5xx errors"
          }
        ]
      }
    ]
  }
}
```

## 🔄 CI/CD

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: |
          cd spbu_site
          npm ci

      - name: Run tests
        run: |
          cd spbu_site
          npm test

      - name: Build
        run: |
          cd spbu_site
          npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to server
        uses: appleboy/ssh-action@v0.1.5
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /home/spbu/spbu-tashkent-website
            git pull origin main
            cd spbu_site_backend
            source venv/bin/activate
            pip install -r requirements.txt
            python manage.py migrate
            python manage.py collectstatic --noinput
            sudo systemctl restart spbu-backend
            cd ../spbu_site
            npm install
            npm run build
```

### Docker Hub автоматизация

```yaml
# .github/workflows/docker.yml
name: Build and Push Docker Images

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build and push Backend
        uses: docker/build-push-action@v4
        with:
          context: ./spbu_site_backend
          push: true
          tags: your-org/spbu-backend:latest

      - name: Build and push Frontend
        uses: docker/build-push-action@v4
        with:
          context: ./spbu_site
          push: true
          tags: your-org/spbu-frontend:latest
```

## 🔒 Безопасность

### Настройка файрвола

```bash
# UFW настройка
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### Настройка fail2ban

```bash
# Установка fail2ban
sudo apt install fail2ban

# Конфигурация
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# Добавление правил для Django
sudo tee /etc/fail2ban/jail.d/django.conf << EOF
[django]
enabled = true
port = http,https
filter = django
logpath = /var/log/spbu/django.log
maxretry = 3
bantime = 3600
EOF
```

### Регулярные обновления

```bash
# Скрипт автоматического обновления
#!/bin/bash
# /usr/local/bin/update-spbu.sh

cd /home/spbu/spbu-tashkent-website

# Обновление кода
git pull origin main

# Обновление зависимостей backend
cd spbu_site_backend
source venv/bin/activate
pip install --upgrade -r requirements.txt
python manage.py migrate
python manage.py collectstatic --noinput

# Обновление зависимостей frontend
cd ../spbu_site
npm install
npm run build

# Перезапуск сервисов
sudo systemctl restart spbu-backend
sudo systemctl restart nginx

# Очистка старых файлов
sudo journalctl --vacuum-time=7d
```

```bash
# Добавление в crontab
sudo crontab -e
# Добавить строку для еженедельного обновления:
0 2 * * 0 /usr/local/bin/update-spbu.sh
```

---

<div align="center">

**Готово к развертыванию! 🚀**

Для получения дополнительной помощи обратитесь к [документации](README.md) или создайте [issue](https://github.com/your-org/spbu-tashkent-website/issues).

</div>
