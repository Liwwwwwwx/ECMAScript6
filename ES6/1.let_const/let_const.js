/**
 * 2022-8-2
 * let和const
 */

//let声明的变量，只在let命令所在的代码块内有效
{
    let a = 10
    var b = 1
}
//console.log(a); // not defined
console.log(b); // 1

// for循环
var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
    }
}
arr[7]()

for (let j = 0; j < 10; j++) {
    arr[j] = function () {
        console.log(j);
    }
}
arr[7]()

//let命令不存在变量提升
console.log(foo); // undefined
var foo = 2

console.log(bar); // bar is not defined
let bar = 3

//不允许重复声明变量
/*
function func() {
    let c = 10;
    var c = 10
}

function func() {
    let d = 10
    let d =1 
}
*/

//const声明一个只读的常量。一旦声明，常量的值就不能改变
const pi = 3.1415
console.log(pi);

pi = 3 //不允许更改

// const PI; //只声明不赋值也会报错

//const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。

const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
