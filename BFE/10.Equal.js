console.log(0 == false) // true
console.log('' == false) // true
console.log([] == false) // false  正确答案 0 == 0 -> true
console.log(undefined == false) // false
console.log(null == false) // true 正确答案 0 == 0 -> false
console.log('1' == true) //true
console.log(1n == true) //false 正确答案 true
console.log(' 1     ' == true) // true
console.log(+null == false); // true