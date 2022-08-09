/**
 * 2022-8-9
 * Generator
 */

/**
 * 1.基本概念
 * Generator是一个状态机，封装了多个内部状态
 * 调用Generator函数，返回一个遍历器对象，代表Generator函数内部的指针
 */
const log = console.log

function* helloworldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending'
}

var hw = helloworldGenerator()

console.log(hw.next()) //{ value: 'hello', done: false }
hw.next() // { value: 'world', done: false }
hw.next() // { value: 'ending', done: true }

/**
 * 2.yield表达式
 * 只能用于Generator函数内
 * 每次遇到yield，函数会暂停执行，下一次再从该位置继续向后执行。
 * yield表达式如果用在另一个表达式之中，必须放在圆括号里面
 */

function* demo() {
  console.log('hello' + (yield));
  console.log('world' + (yield 123));
}

/**
 * 3.与Iterator接口的关系
 */

var myIterator = {}

myIterator[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
}

console.log([...myIterator]);

/**
 * 4.next方法的参数
 */

function* foo(x) {
  var y = 2 * (yield (x + 1))
  var z = yield (y / 3)
  return (x + y + z)
}

var b = foo(5)
console.log(b.next()); // x+1 = 6
console.log(b.next(6)) // x+1 = 6 => y = 12 => z = 4
console.log(b.next(5)) // z = 5, y = 12, x = 5 => 22

/**
 * 5.for...of 循环
 * 可以自动遍历Generator函数运行是生成的Iterator对象，且此时不需要调用next方法
 */

function* foo() {
  yield 1
  yield 2
  yield 3
  yield 4
  return 5
}

for (let i of foo()) {
  console.log(i);
}

log([...foo()])

log(Array.from(foo()))

/**
 * 6.Generator.prototype.return()
 * 可以返回给定的值，并且终结遍历Generator函数
 */

var f = foo()
log(f.next())
log(f.return('foo'))

/**
 * 7.异步编程
 * a.回调函数
 * b.事件监听
 * c.发布/订阅
 * d.Promise对象
 */

//a.回调函数
fs.readFile('/etc/passwd', 'utf-8', function (err, data) {
  if (err) throw err;
  log(data)
})

//b.Promise
readFile(fileA)
  .then(function (data) {
    log(data.toString())
  })
  .then(function () {
    return readFile(fileB)
  })
  .then(function (data) {
    log(data.toString())
  })
  .catach(function (err) {
    log(err)
  })

//c.Generator

function* gen() {
  var url = 'xxx';
  var result = yield fetch(url)
  log(result)
}

var g = gen()
var result = g.next()

result.value.then(function(data) {
  return data.json()
}).then(function(data) {
  g.next(data)
})