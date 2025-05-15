#!/bin/bash

# Переходим в директорию проекта
cd "$(dirname "$0")"

# Останавливаем предыдущие экземпляры Django сервера
echo "Останавливаем предыдущие экземпляры Django сервера..."
pkill -f "python.*runserver" || true

# Проверяем, свободен ли порт 8000
if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    echo "Порт 8000 занят, пробуем использовать порт 8001"
    PORT=8001
    # Проверяем, свободен ли порт 8001
    if lsof -Pi :8001 -sTCP:LISTEN -t >/dev/null ; then
        echo "Порт 8001 тоже занят, пробуем использовать порт 8002"
        PORT=8002
    fi
else
    PORT=8000
fi

# Создаем новое виртуальное окружение
echo "Создаем новое виртуальное окружение..."

# Удаляем старое виртуальное окружение, если оно существует
if [ -d "spbu_site_backend/.venv" ]; then
    echo "Удаляем старое виртуальное окружение..."
    rm -rf spbu_site_backend/.venv
fi

# Создаем новое виртуальное окружение
python -m venv spbu_site_backend/.venv
echo "Виртуальное окружение создано"

# Активируем виртуальное окружение
echo "Активируем виртуальное окружение..."
source spbu_site_backend/.venv/bin/activate

# Устанавливаем необходимые пакеты
echo "Устанавливаем необходимые пакеты..."
# Сначала обновляем pip
pip install --upgrade pip
# Затем устанавливаем пакеты
pip install -r spbu_site_backend/requirements.txt
echo "Пакеты установлены"

# Переходим в директорию с Django проектом
cd spbu_site_backend/spbu_site

# Применяем миграции базы данных
echo "Применяем миграции базы данных..."
python manage.py migrate

# Проверяем, существует ли суперпользователь
echo "Проверяем наличие суперпользователя..."
# Используем Django management команду для проверки суперпользователя
SUPERUSER_COUNT=$(python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); print(User.objects.filter(is_superuser=True).count())")

if [ "$SUPERUSER_COUNT" = "0" ]; then
    echo "Создаем суперпользователя..."
    # Используем createsuperuser с предоставленными входными данными
    echo -e "admin\nadmin@example.com\nadmin\nadmin\ny" | python manage.py createsuperuser --noinput || true
    echo "Суперпользователь создан: логин 'admin', пароль 'admin'"
else
    echo "Суперпользователь уже существует"
fi

# Запускаем сервер Django
echo "Запускаем Django сервер на порту $PORT..."
echo "Админ-панель будет доступна по адресу: http://localhost:$PORT/admin/"
python manage.py runserver 0.0.0.0:$PORT
