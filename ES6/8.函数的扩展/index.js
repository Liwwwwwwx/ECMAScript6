/**
 * 2022-8-3
 */

// rest 参数,用于获取函数的多余参数，这样就不需要使用arguments对象。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中

function add(...values) {
  let sum = 0;

  for (let val of values) {
    sum += val
  }

  return sum
}

console.log(add(2, 3, 4));

//rest参数之后不能再有其他参数，即只能是最后一个参数，否则会报错
// function f(a,...b,c) {}

//箭头函数

var f = v => v

var f = function (v) {
  return v
}

var f = () => 5

var sum = (num1, num2) => { return num1 + num2 }

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上大括号

let getObj = id => { { id: id; userName: '123' } }

//箭头函数可以与变量结构体结合使用

const full = ({ first, last }) => first + last

//箭头函数注意点
/**
 * 1.箭头函数没有自己的this对象，箭头函数导致this总是指向函数定义生效时所在的对象
 * 2.不可以当做构造函数，不可以对箭头函数使用new命令
 * 3.不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替
 * 不可以使用yield命令，因此箭头函数不能用作Generator函数
 */

function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0

//JS闭包
function books() {
  var book = '123'
  return function () {
    console.log(book);
  }
}

var bag = books()
bag()

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i++);
  }, 4000)
}

console.log(i);

for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x++);
    }, 4000)
  })(i)
}

console.log(i);
