
//flat

const array =[ 1,3,3,4,3,5,3,3, [1,45,35,3,5, [2,3,35,24]]];
console.log(array.flat(3));

//flatmap

const array2 = [1,2,4,2,2,2];
console.log(array2.flatMap(v => [v, v * 2 ]));


