# Color Palette Web App (MVP)

## Ідея MVP
Цей веб-застосунок дозволяє користувачу завантажити фотографію, а програма підбирає основні та гармонійні кольори.

## Структура проєкту
- frontend/ — HTML, CSS, JS
- backend/ — Python/Node.js код для обробки фото
- uploads/ — тимчасові завантажені файли
- .gitignore — файли, які Git ігнорує

## Інструкція з запуску
1. Клонувати репозиторій:
   git clone <URL репозиторію>
2. Перейти у папку проєкту:
   cd git-lab1
3. Встановити залежності (якщо Python):
   python -m venv env
   source env/Scripts/activate  # Windows
   pip install -r requirements.txt
4. Запустити бекенд:
   python backend/app.py
5. Відкрити frontend/index.html у браузері.
