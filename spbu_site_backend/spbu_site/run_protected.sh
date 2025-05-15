#!/bin/bash
LOCK_DIR="/tmp/django_lock"

if mkdir "$LOCK_DIR" 2>/dev/null; then
    trap 'rm -rf "$LOCK_DIR"' EXIT
    source .venv/bin/activate
    python manage.py runserver 0.0.0.0:$NEW_PORT
else
    echo "Сервер уже запущен! Блокировка: $LOCK_DIR"
    exit 1
fi
