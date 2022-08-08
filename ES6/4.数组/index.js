/**
 * 2022-8-8
 * 数组的方法
 */

//1.扩展运算符
//将一个数组转为用逗号分割的参数序列
console.log(1, ...[2, 3, 4], 5);

function f(v, w, x, y, z) { }
const args = [1, 2]
f(-1, ...args, 3, ...[4]) // f(-1,1,2,3,4)

//替代函数的apply方法

function f(x, y) { }
f.apply(null, args)

f(...args)

//通过push函数，将一个数组添加到另一个数组的尾部

var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]

Array.prototype.push.apply(arr1, arr2)

arr1.push(...arr2)

//2.扩展运算符的应用
//a.复制数组

const a1 = [1, 2]
const a2 = a1 //浅拷贝

a2[0] = 2
a1 // 2,2

const a3 = a1.concat() //深拷贝
a3[0] = 3
a1 // 2,2

//ES6数组深拷贝
const a4 = [...a1]

const [...a5] = a1

//b.合并数组
const arr3 = [1, 2, 3]
const arr4 = [3, 4, 5]

arr3.concat(arr4)

const arr5 = [...arr3, ...arr4]

//c.与结构赋值结合
const [first, ...last] = [1, 2, 3, 4, 5]
first // 1
last // [2,3,4,5]

//d.字符串
const arr6 = [...'hello'] // ['h','e','l','l','o']

//2.Array.map()
//此方法是将数组中的每个元素调用一个提供的函数，结果作为一个新的数组返回，并没有改变原来的数组
let arr = [1, 2, 3, 4, 5]
let newArr = arr.map(x => x * 2)
arr = [1, 2, 3, 4, 5] // 原数组保持不变
newArr = [2, 4, 6, 8, 10] //返回新数组

/**
 * 3.Array,forEach()
 * 此方法是将数组中的每个元素执行传进提供的函数，没有返回值，直接改变原数组，注意和map方法区分
 */
let array = [1, 2, 3, 4, 5]
array.forEach(myFunc)

function myFunc(value, index, arr) {
  arr[index] = value * 10
}

console.log(array); // [2,4,6,8,10]

/**
 * 4.Array.filter
 * 将所有元素进行判断，将满足条件的元素作为一个新的数组返回
 */

let array1 = [1, 2, 3, 4, 5]
let newArray = array1.filter(x => x >= 3)
newArray // [3,4,5]

/**
 * 5.Array.every()
 * 此方法是将所有元素进行判断返回一个布尔值，如果所有元素都满足判断条件，则返回true，否则返回false
 */

array1.every(x => x < 4) //false
array1.every(x => x < 6) //true

/**
 * 6.Array.some()
 * 此方法是将所有元素进行判断返回一个布尔值，如果存在元素都满足判断条件，则返回true，若所有元素都不满足判断条件，则返回false：
 */

array1.every(x => x < 4) //true
array1.every(x => x > 6) //false

/**
 * 7.Array.reduce()
 * 此方法是所有元素调用返回函数，返回值为最后结果,传入的值必须是函数类型：
 */

let sum = array1.reduce((a, b) => a + b)
console.log(sum);

/**
 * 8.Array.push()
 * 此方法是在数组的后面添加新加元素，此方法改变了数组的长度
 */

/**
 * 9.Array.pop()
 * 此方法在数组后面删除第一个元素，并返回数组，此方法改变了数组的长度：
 */

/**
 * 10.Array.unshift()
 * 此方法是将一个或多个元素添加到数组的开头，并返回新数组的长度：
 */

/**
 * 11.Array.toString()
 * 将数组转化为字符串
 */

let array2 = [, 'a', undefined, null, ]

let str = array2.toString('#')
console.log(str);

/**
 * 12.Array.join()
 * 将数组转化为字符串
 */

let str1 = array2.join('#')
console.log(str1);

/**
 * 13.Array.isArray()
 * 判断一个对象是不是数组，返回布尔值
 */

/**
 * 14.Array.concat()
 * 将多个数组拼接成一个数组
 */

let arr7 = [1, 2, 3]
let arr8 = [3, 3, 4]

let arr9 = arr7.concat(arr8)
let arr10 = [...arr7, ...arr8]

console.log(arr9, arr10);

/**
 * 15.Array.splice(开始位置，删除的个数，元素)
 * 可以实现增删改查
 */

let arrs = [1, 2, 3, 4, 5]

let arrs1 = arrs.splice(2, 0, 'haha') // [1,2,'haha',3,4,5]
let arrs2 = arrs.splice(2, 3) // [1,2]
let arrs3 = arrs.splice(2, 1, 'haha') // [1,2,'haha',4,5]

/**
 * 16.Array.slice
 * 返回一个新的数组对象，这一对象是一个由begin和end决定的原数组的浅拷贝
 */

let animals = [1, 2, 3, 4, 5]

animals.slice(2) //[3,4,5]
animals.slice(2, 4) // [3,4]
animals.slice(-2) // [4,5]
animals.slice(2, -1) // [3,4]
animals.slice()[1, 2, 3, 4, 5]

/**
 * 17.Array.from()
 * 将类数组对象(array-like object)和可比案例对象(Set Map)
 */

let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c'
}

var arr1 = [].slice.call(arrayLike)

let arrLike = Array.from(arrayLike)

Array.from([1, 2, 3], x => x * x)

//返回各种数据的类型
function typesOf() {
  return Array.from(arguments, value => typesof(value))
}

typeof (null, [], NaN) // ['object', 'object', 'number']

/**
 * 18.Array.of()
 * 将一组值转换为数组
 */

Array.of(1, 2, 3) // [1,2,3]

function ArrayOf() {
  return [].slice.call(arguments)
}

/**
 * 19.Array.fill()
 * 使用给定的值，填充一个数组
 */

 ['a', 'b', 'c'].fill(7) // [7,7,7,7]

/**
 * 20.entries(),keys(),values()
 * keys() 键名的遍历
 * values() 键值的遍历
 * entrise() 键值对的遍历
 */

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"

/**
 * 20.includes()
 * 返回一个布尔值，表示某个数组是否包含给定的值
 */

[1,2,3,4,5].includes(2) //true
[1,2,NaN].includes(NaN) //true

/**
 * 21.flat()
 * 将嵌套数组拉平，变成一维数组
 */

[1,2,[3,4]].flat() // [1,2,3,4]

/**
 * 22.at()
 * 返回对应索引位置的成员，并支持负索引
 */

[1,2,3,4,5].at(2) // 3
[1,2,3,4,5].at(-2) // 4