/**
 * 2020-8-02
 * 变量的结构赋值
 */

//1.数组的解构赋值

let [foo, [[bar], baz]] = [1, [[2], 3]]

let [, , third] = [1, 2, 3]

let [x, , y] = [1, 2, 3]

let [head, ...tail] = [1, 2, 3, 4]

//解构不成功，变量的值就等于undefined

let [q, w, ...z] = ['a']

//解构赋值允许指定默认值

let [r, t = 'b'] = ['a']

//只有当一个数组成员严格等于undefined，默认值才会生效

let [o = 1] = [undefined]

let [e = 1] = [null]

//默认值可以引用结构赋值的其他变量，但该变量必须已经声明
let [x1 = 1, y1 = x1] = []
let [x2 = 1, y2 = x2] = [2]
let [x3 = 1, y3 = x3] = [3, 4]
let [x4 = y4, y4 = 1] = [] //y4 is not defined

//2.对象的结构赋值

let { fo, ba } = { ba: 222, fo: 211 }

//对象的结构赋值，可以很方便的将现有对象的方法，赋值到某个变量
const { log } = console
log('hello') // hello

//变量名与属性名不一致，必须写成下面这样
let obj = { first: 'hello', last: 'world' }
let { first: f, last: l } = obj

//3.字符串的解构赋值
const [a, b, c, d, k] = 'hello'
let { length: len } = 'hello'

//4.数值和布尔值的结构赋值
let { toString: s } = 123
s === Number.prototype.toString

let { toString: ss } = true
ss === Number.prototype.toString
//规则：只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对他们进行解构赋值都会报错

let { prop: xx } = undefined
let { prop: yy } = null

//5.函数参数的结构赋值
function add([x, y]) {
    return x + y
}
add([1, 2])

function move({ x = 0, y = o } = {}) {
    return [x, y]
}

move({ x: 3, y: 8 }) // [3,8]
move({ x: 3 }) //[3,0]
move({})//[0,0]
move()//[0,0]

function move({ x, y } = { x: 0, y: 0 }) {
    return [x, y]
}

move({ x: 3, y: 8 }) // [3,8]
move({ x: 3 }) //[3,undefined]
move({})//[undefined,undefined]
move()//[0,0]

//6.用途

//a.交换变量值

let n = 1
let m = 2

[n, m] = [m, n]

//b.从函数返回多个值

function example() {
    return [1, 2, 3]
}

let [nn, mm, bb] = example()

function example() {
    return {
        foo: 1,
        bar: 2
    }
}

let { ff, aa } = example()

//c.函数参数的定义
function f([x, y, z]) { }
f([1, 2, 3])

function f({ x, y, z }) { }
f({ x: 1, y: 2, z: 3 })

//d.提取JSON数据
let jsonData = {
    id: 41,
    status: 'ok',
    data: [124, 555]
}

let [id, status, data] = jsonData

//e.函数参数默认值
function move({ x = 0, y = o } = {}) {
    return [x, y]
}

//f.遍历Map结构
const map = new Map()
map.set('first', 'hello')
map.set('second', 'world')

for (let [key, value] of map) {
    console.log(key + 'is' + value);
}
