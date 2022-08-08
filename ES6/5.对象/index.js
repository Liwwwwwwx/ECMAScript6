/**
 * 2022-8-8
 * 对象
 */

/**
 * 1.属性的遍历
 * a.for...in 循环遍历对象自身的和集成的可枚举属性(不含Symbol属性)
 * b.Object.keys(obj) 返回一个数组，包括对象自身的(不含集成的)可枚举属性(不含Symbol属性)键名
 * c.Object.getOwnPropertyNames(obj) 返回一个数组，包含对象自身的所有属性(不含Symbol属性，但是包括不可枚举属性)的键名
 * d.Object.getOwnPropertySymbols(obj) 返回一个数组，包含对象自身的所有Symbol属性的键名
 * e.Reflect.ownKeys(obj) 返回一个数组，包含对象自身的(不含继承的)的所有键名，不管键名是Symbol或字符串，也不管是否可枚举
 */

/**
 * 2.super
 * 指向当前对象的原型对象
 */

const proto = {
  foo: 'hello'
}

const obj = {
  foo: 'world',
  find() {
    return super.foo //引用原型对象proto的foo属性
  }
}

Object.setPrototypeOf(obj, proto);
obj.find() //'hello'

//super关键字表示原型对象时，只能用在对象的方法中。

const obj1 = {
  foo: super.foo
}

const obj2 = {
  foo: () => super.foo
}

const obj3 = {
  foo: function () {
    return super.foo
  }
}

/**
 * 3.Object.is()
 * 用来比较两个值是否严格相等
 */

Object.is('foo', 'foo') // true
Object.is({}, {}) // false

  + 0 === -0 // true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

// ES5 实现Object.is()
Object.defineProperty(Object, 'is', {
  value: function (x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y
    }

    return x !== x && y !== y
  },
  configurable: true, // 该属性是否可以通过delete删除后重写
  enumerable: false, // 该属性是否可以通过for...in循环获取
  writable: true // 该属性是否可修改
})

/**
 * 4.Object.assgin()
 * 用于对象的合并，将源对象的所有可枚举属性复制到目标对象
 * 浅拷贝
 */

const target = { a: 1 }

const source1 = { b: 2 }
const source2 = { c: 3 }

Object.assign(target, source1, source1)
target // {a:1,b:2,c:3}

const target1 = { a: { b: 'c', d: 'e' } }
const source = { a: { b: 'hello' } }
Object.assign(target, source)
// { a: { b: 'hello' } }

//a.为对象添加属性
class Point {
  constructor(x, y) {
    Object.assign(this, { x, y })
  }
}

//b.为对象添加方法
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {

  },
  anotherMethod() {

  }
});

// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {

};
SomeClass.prototype.anotherMethod = function () {

};

//c.克隆对象
function clone(origin) {
  return Object.assign({}, origin) //不能克隆它继承的值
}

function clone(origin) {
  let originProto = Object.getPrototypeOf(origin)
  return Object.assign(Object.create(originProto), origin)
}

//d.合并多个对象
const merge = (target, ...source) => Object.assign(target, ...source)

//e.为属性指定默认值
const defaults = {
  logLevel: 0,
  outputFormat: 'html'
}

function processContent(options) {
  options = Object.assign({}, defaults, options)
  console.log(options);
}

//Object.assign()方法将DEFAULTS和options合并成一个新对象，如果两者有同名属性，则options的属性值会覆盖DEFAULTS的属性值
//注意，由于存在浅拷贝的问题，DEFAULTS对象和options对象的所有属性的值，最好都是简单类型，不要指向另一个对象。否则，DEFAULTS对象的该属性很可能不起作用。

/**
 * 4.Object.getOwnPropertyDescriptors()
 * 返回某个对象属性的描述对象
 */

const ob3 = {
  foo: 123,
  get bar() { return 'abc' }
};

Object.getOwnPropertyDescriptors(obj3)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }

/**
 * 5.__proto__属性，Object.setPrototypeOf(),Object.getPrototypeOf()
 * __proto__用来读取或设置当前对象的原型对象
 * Object.setPrototypeOf() 写操作
 * Object.getPrototypeOf() 读操作
 * Object.create() 生成操作
 */

//es5
const obj4 = {
  method:function() {}
}
obj.__proto__ = someOtherObj;

//es6
var obj5 = Object.create(someOtherObj);
obj5.method  = function() {}

// __proto__调用的是Object.prototype.__proto__

/**
 * 6.Object.setPrototypeOf()
 * 用来设置一个对象原型对象,返回参数对象本身
 */

let proto1 = {}
let obj7 = {x:10}

Object.setPrototypeOf(obj7, proto1)

proto1.y = 20
proto1.z = 30

obj7.y //20
obj7.z //30
obj7.x //10

/**
 * 7.给对象添加属性的方式
 * a.直接添加，属性特性默认都为true
 * b.通过Object.defineProperty添加
 */

Object.defineProperty(obj7,'w', {
  value:40,
  configurable:true
})
