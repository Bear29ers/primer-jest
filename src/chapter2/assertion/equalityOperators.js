// 二重符号（==）
console.log('2' == 2); // true
console.log(true == 1); // true

// 三重符号（===）
console.log('2' === 2); // false
console.log(true === 1); // false

// Object.is
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
