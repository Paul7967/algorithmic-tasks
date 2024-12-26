/**
 * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений.
 * Используйте примитивные типы.
 * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
 * @param {Array} array - Массив с примитивными значениями
 * @param {?} args - лист значений для удаления
 * @returns {Array}
 */
const without = (array, ...args) => {
	return array.filter((item) => {
		return (args.findIndex((item1) => item1 === item) < 0);
	})
}

const data = [1, 2, 3, 1, 2]

console.log(without(data, 1, 2)) // [3]
