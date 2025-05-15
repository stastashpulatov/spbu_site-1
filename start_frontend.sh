#!/bin/bash

# Переходим в директорию проекта
cd "$(dirname "$0")"

# Проверяем, запущен ли бэкенд
echo "Проверяем доступность бэкенда..."

# Проверяем порты 8000, 8001 и 8002
BACKEND_PORT=0

for PORT in 8000 8001 8002; do
  if curl -s http://localhost:$PORT > /dev/null; then
    echo "Бэкенд найден на порту $PORT"
    BACKEND_PORT=$PORT
    break
  fi
done

if [ "$BACKEND_PORT" -eq 0 ]; then
  echo "Бэкенд не найден. Запускаем его..."
  # Запускаем бэкенд в фоновом режиме
  ./start_backend.sh &
  # Ждем немного, чтобы бэкенд запустился
  sleep 5
  # Проверяем порты снова
  for PORT in 8000 8001 8002; do
    if curl -s http://localhost:$PORT > /dev/null; then
      echo "Бэкенд запущен на порту $PORT"
      BACKEND_PORT=$PORT
      break
    fi
  done
fi

# Создаем или обновляем .env файл для фронтенда
cd spbu_site
echo "Создаем .env файл с настройками API..."
echo "VITE_API_URL=http://localhost:$BACKEND_PORT" > .env.local
echo "Создан файл .env.local с адресом API: http://localhost:$BACKEND_PORT"

# Запускаем фронтенд
echo "Запускаем фронтенд..."
pnpm run dev --host 0.0.0.0
