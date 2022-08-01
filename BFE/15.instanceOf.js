/**
 * instancof 只能检测引用数据类型，不能检测基本数据类型，并且不能检测null和undefined
 * typeof null -> object
 * typeof [] -> object
 * 可以使用constructor来判断
 */

console.log(typeof null)
console.log(null instanceof Object) 
console.log(typeof 1)
console.log(1 instanceof Number)
console.log(1 instanceof Object)
console.log(Number(1) instanceof Object)
console.log(new Number(1) instanceof Object)
console.log(typeof true)
console.log(true instanceof Boolean)
console.log(true instanceof Object)
console.log(Boolean(true) instanceof Object)
console.log(new Boolean(true) instanceof Object)
console.log([] instanceof Array)
console.log([] instanceof Object)
console.log((() => {}) instanceof Object)