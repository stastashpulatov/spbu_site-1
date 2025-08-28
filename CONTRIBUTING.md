# 🤝 Руководство по вкладу в проект

Спасибо за интерес к проекту СПбГУ в городе Ташкенте! Мы приветствуем вклад от всех участников.

## 📋 Содержание

- [🚀 Начало работы](#-начало-работы)
- [🔧 Настройка окружения разработки](#-настройка-окружения-разработки)
- [📝 Стандарты кода](#-стандарты-кода)
- [🧪 Тестирование](#-тестирование)
- [📤 Процесс внесения изменений](#-процесс-внесения-изменений)
- [🐛 Сообщение об ошибках](#-сообщение-об-ошибках)
- [💡 Предложение новых функций](#-предложение-новых-функций)
- [📚 Документация](#-документация)

## 🚀 Начало работы

### Предварительные требования

- **Node.js** 18.0+
- **Python** 3.9+
- **Git** 2.30+
- **PostgreSQL** 13+
- **Redis** (опционально)

### Клонирование репозитория

```bash
# Клонирование с SSH
git clone git@github.com:your-org/spbu-tashkent-website.git

# Или с HTTPS
git clone https://github.com/your-org/spbu-tashkent-website.git

cd spbu-tashkent-website
```

### Создание ветки для разработки

```bash
# Создание и переключение на новую ветку
git checkout -b feature/your-feature-name

# Или для исправления ошибок
git checkout -b fix/issue-description
```

## 🔧 Настройка окружения разработки

### Frontend (React + TypeScript)

```bash
cd spbu_site

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Проверка типов TypeScript
npm run type-check

# Линтинг кода
npm run lint

# Форматирование кода
npm run format
```

### Backend (Django)

```bash
cd spbu_site_backend

# Создание виртуального окружения
python -m venv venv

# Активация виртуального окружения
source venv/bin/activate  # Linux/Mac
# или
venv\Scripts\activate     # Windows

# Установка зависимостей
pip install -r requirements.txt

# Применение миграций
python manage.py migrate

# Создание суперпользователя
python manage.py createsuperuser

# Запуск сервера разработки
python manage.py runserver
```

### Настройка базы данных

```bash
# Создание базы данных
createdb spbu_tashkent_dev

# Настройка переменных окружения
cp .env.example .env
# Отредактируйте .env файл с вашими настройками

# Применение миграций
python manage.py migrate

# Загрузка тестовых данных (опционально)
python manage.py loaddata fixtures/initial_data.json
```

## 📝 Стандарты кода

### Frontend (TypeScript/React)

#### Структура компонентов

```typescript
// ✅ Правильно
interface ComponentProps {
  title: string;
  description?: string;
  onAction: () => void;
}

const Component: React.FC<ComponentProps> = ({
  title,
  description,
  onAction,
}) => {
  // Логика компонента
  return (
    <div className="component">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <button onClick={onAction}>Действие</button>
    </div>
  );
};

export default Component;
```

#### Именование

```typescript
// ✅ Компоненты: PascalCase
const UserProfile = () => {};

// ✅ Функции: camelCase
const getUserData = () => {};

// ✅ Константы: UPPER_SNAKE_CASE
const API_BASE_URL = "https://api.example.com";

// ✅ Интерфейсы: PascalCase с префиксом I
interface IUserData {
  id: number;
  name: string;
}
```

#### Стили

```scss
// ✅ Используйте SCSS модули или styled-components
.component {
  display: flex;
  align-items: center;
  gap: 1rem;

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
  }

  &--active {
    background-color: $primary-color;
  }
}
```

### Backend (Python/Django)

#### Структура моделей

```python
# ✅ Правильно
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    """Модель пользователя с дополнительными полями."""

    phone = models.CharField(
        max_length=20,
        blank=True,
        verbose_name="Номер телефона"
    )

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

    def __str__(self):
        return self.username
```

#### Views

```python
# ✅ Используйте class-based views
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin

class NewsListView(LoginRequiredMixin, ListView):
    """Список новостей."""

    model = News
    template_name = 'news/list.html'
    context_object_name = 'news_list'
    paginate_by = 10

    def get_queryset(self):
        return News.objects.filter(is_published=True)
```

#### API Views

```python
# ✅ Используйте DRF для API
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

class NewsViewSet(viewsets.ModelViewSet):
    """API для работы с новостями."""

    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return News.objects.filter(is_published=True)
```

## 🧪 Тестирование

### Frontend тесты

```bash
# Запуск всех тестов
npm test

# Запуск тестов в режиме watch
npm run test:watch

# Покрытие кода
npm run test:coverage

# E2E тесты
npm run test:e2e
```

#### Примеры тестов

```typescript
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header Component", () => {
  it("should render navigation menu", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText("Университет")).toBeInTheDocument();
    expect(screen.getByText("Образование")).toBeInTheDocument();
  });

  it("should toggle language selector", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const languageButton = screen.getByText("RU");
    fireEvent.click(languageButton);

    expect(screen.getByText("EN")).toBeInTheDocument();
  });
});
```

### Backend тесты

```bash
# Запуск всех тестов
python manage.py test

# Запуск конкретного приложения
python manage.py test news

# Запуск конкретного теста
python manage.py test news.tests.test_views.NewsViewTest

# Покрытие кода
coverage run --source='.' manage.py test
coverage report
coverage html  # Создает HTML отчет
```

#### Примеры тестов

```python
from django.test import TestCase, Client
from django.urls import reverse
from news.models import News

class NewsViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.news = News.objects.create(
            title="Тестовая новость",
            content="Содержание новости",
            is_published=True
        )

    def test_news_list_view(self):
        response = self.client.get(reverse('news:list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Тестовая новость")

    def test_news_detail_view(self):
        response = self.client.get(
            reverse('news:detail', args=[self.news.pk])
        )
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.news.title)
```

## 📤 Процесс внесения изменений

### 1. Подготовка изменений

```bash
# Убедитесь, что вы находитесь на актуальной версии main
git checkout main
git pull origin main

# Создайте новую ветку
git checkout -b feature/your-feature-name
```

### 2. Разработка

- Пишите чистый, читаемый код
- Следуйте стандартам кода
- Добавляйте тесты для новой функциональности
- Обновляйте документацию при необходимости

### 3. Коммиты

```bash
# Добавление файлов
git add .

# Создание коммита с описательным сообщением
git commit -m "feat: добавлена страница контактов

- Создан компонент ContactsPage
- Добавлена карта с местоположением
- Реализована форма обратной связи
- Добавлены тесты для компонента"
```

### 4. Push и Pull Request

```bash
# Отправка изменений
git push origin feature/your-feature-name
```

Затем создайте Pull Request на GitHub с описанием изменений.

### 5. Code Review

- Все изменения проходят code review
- Исправьте замечания ревьюера
- Убедитесь, что все тесты проходят

## 🐛 Сообщение об ошибках

### Создание Issue

При создании issue используйте следующий шаблон:

```markdown
## Описание ошибки

Краткое описание проблемы

## Шаги для воспроизведения

1. Перейдите на страницу '...'
2. Нажмите на '...'
3. Прокрутите до '...'
4. Увидите ошибку

## Ожидаемое поведение

Что должно происходить

## Фактическое поведение

Что происходит на самом деле

## Скриншоты

Если применимо, добавьте скриншоты

## Окружение

- ОС: [например, Windows 10]
- Браузер: [например, Chrome 120]
- Версия: [например, 2.0.0]

## Дополнительная информация

Любая дополнительная информация
```

## 💡 Предложение новых функций

### Создание Feature Request

```markdown
## Описание функции

Краткое описание предлагаемой функции

## Проблема

Какую проблему решает эта функция

## Предлагаемое решение

Описание решения

## Альтернативы

Рассмотренные альтернативы

## Дополнительная информация

Любая дополнительная информация
```

## 📚 Документация

### Обновление документации

При внесении изменений в код:

1. **Обновите README.md** если изменилась структура проекта
2. **Добавьте комментарии** к новым функциям
3. **Обновите API документацию** если изменились endpoints
4. **Создайте примеры использования** для новых функций

### Примеры документации

````typescript
/**
 * Компонент для отображения списка новостей
 *
 * @param {NewsItem[]} news - Массив новостей для отображения
 * @param {boolean} loading - Состояние загрузки
 * @param {Function} onNewsClick - Callback при клике на новость
 *
 * @example
 * ```tsx
 * <NewsList
 *   news={newsItems}
 *   loading={false}
 *   onNewsClick={(id) => navigate(`/news/${id}`)}
 * />
 * ```
 */
````

## 🎯 Рекомендации

### Общие принципы

1. **KISS** - Keep It Simple, Stupid
2. **DRY** - Don't Repeat Yourself
3. **SOLID** - Принципы объектно-ориентированного программирования
4. **Clean Code** - Чистый, читаемый код

### Производительность

1. **Оптимизируйте изображения** перед добавлением
2. **Используйте lazy loading** для тяжелых компонентов
3. **Минимизируйте количество запросов** к API
4. **Кэшируйте данные** где это возможно

### Безопасность

1. **Валидируйте все входные данные**
2. **Используйте HTTPS** в продакшене
3. **Не храните секреты** в коде
4. **Регулярно обновляйте зависимости**

---

Спасибо за ваш вклад в развитие проекта! 🚀
