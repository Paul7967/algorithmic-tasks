function mapper<InType, OutType>(
	inArr: InType[],
	callback: (inArr: InType) => OutType
): OutType[] {
    return inArr.map(callback);
}


const newArr = mapper(['f','ss'], (val)=>val.length);
console.log(newArr);
const newArr1 = mapper([1,12], (val)=>val.toString());
console.log(newArr1);

