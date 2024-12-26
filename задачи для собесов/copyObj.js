// исходный объект, который нужно скопировать
// значение "a" может быть массивом, объектом или примитивом
// вложенность "а" может быть бесконечной

const a = [
	{
		name: "6x45",
		draw: {
			cost: 50,
			multiDraws: [1, 2, 3],
		},
		count: null,
	},
	{
		name: "7x49",
		draw: {
			cost: 75,
			multiDraws: [{ c: 13 }, 5, 6],
		},
		count: 10,
	},
]

function copy(inVal) {
	if (typeof inVal !== "object") return inVal

	const result = Array.isArray(inVal) ? [] : {}

	for (const key in inVal) {
		if (typeof (inVal[key] !== "object")) {
			result[key] = inVal[key]
		} else {
			result[key] = copy(inVal)
		}
	}

	return result
}

const arr = [1, 2, 3]

const b = copy(a)
const b2 = copy(arr)

console.log(b)
console.log(b2)

//ниже проверка, что объект "а" действительно был скопирован в новый объект
if (b) b[1].draw.multiDraws[0].c = "369"
console.log(" ORIG: ", JSON.stringify(a), "\n\n", "COPY: ", JSON.stringify(b))
