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

Для открытия дебаггера можно нажать Ctrl+Shift+D, или открыть его на главной панели (внешне выглядит как жучок и треугольник направленный вправо (play))

Для TS:

1. Выберите конфигурацию "Debug Current TypeScript File" в дебаггере
2. Нажмите F5

Для JS:

1. Выберите конфигурацию "Run Current File" в дебаггере
2. Нажмите F5

### Запуск js скриптов в браузере

1. Для запуска необходимо добавить js файл в тег <script> в html файл `browserRun/index.html`
2. Далее запустить конфигурацию "Launch Chrome against localhost" в расширении "Run and debug" (нажать F5)

### Нюанс работы с переменными

в начале файла добавляем строку:
export {};

// Остальной код файла остается без изменений

Это гарантирует, что:

- Каждый файл становится изолированным модулем
- Переменные не конфликтуют между файлами
- Область видимости переменных ограничивается только текущим файлом

### Добавление тестов

Для тестов используется jest

Тесты рекомендуется писать в следующем формате:

```JavaScript
    describe('Номер задачи', () => {
        // массив тестовых случаев, набивается из проблемных кейсов на leetcode
        const testData = [
            {
                input1: ...,
                input2: ...,
                expectedOutput: ...,
            },
            // Другие тестовые случаи
        ];

        testData.forEach(({ input1, input2, expectedOutput }) => {
            // description формируем из комбинации input и expectedOutput
            const description = `${input1}, ${input2} => ${expectedOutput}`;
            test(description, () => {
                expect(functionToTest(input)).toEqual(expectedOutput);
            });
        });
    });
```

Пример написания тестов можно посмотреть в файле 0006. Zigzag Conversion.ts
