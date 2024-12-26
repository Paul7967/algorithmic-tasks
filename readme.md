# Репозиторий создан для:

- хранения алгоритмических задач и решений для них;
- хранения других задач для Frontend собеседований и решений для них;

### Клонирование репозитория

- клонирования репозитория с помощью команды:

```bash
git clone https://github.com/Paul7967/algorithmic-tasks.git
```

## Установка зависимостей

```bash
npm install
```

## Запуск в Node.js

### Для JavaScript

```bash
# Запуск JS файла
node task.js
```

### Для TypeScript

```bash
# Установка ts-node (если не установлен)
npm install -g ts-node typescript

# Запуск TS файла
ts-node task.ts
```

### Отладка в VSCode

1. Нажмите F5
2. Выберите конфигурацию "Run ts-node"

### Запуск js скриптов в браузере

1. Для запуска необходимо добавить js файл в тег <script> в html файл `browserRun/index.html`
2. Далее запустить конфигурацию "Launch Chrome against localhost" в расширении "Run and debug" (нажать F5)
