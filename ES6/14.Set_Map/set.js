//1.Set 
/**
 * Set 本身是一个构造函数，用来生成Set数据结构
 * 类似于数组，但是成员的值都是唯一的，没有重复值
 */
const s = new Set();
[2, 3, 4, 2, 5, 2, 2, 4, 5, 6, 7, 3, 5, 6].forEach(x => s.add(x));

for (let i of s) {
    console.log(i);
}

//set函数可以接受一个数组作为参数来初始化
//set可以实现数组去重复
const set_array = new Set([1, 2, 3, 4, 2, 1, 3, 2]);
console.log([...set_array]);

//也可以用于去除字符串里面的重复字符
array = [...new Set('avsadaaewfcafsfv')].join('')
console.log(array);

/**
 * Set实例的属性和方法
 * 属性
 * Set.prototype.constructor:构造函数，默认就是Set函数
 * Set.prototype.size:返回Set实例的成员综述
 * 方法
 * Set.prototype.add()
 * Set.prototype.delete()
 * Set.prototype.has()
 * Set.prototype.clear()
 */
s.add(3).add(3).add(10)
s.delete(4)
s.has(4)
s.clear()

/**
 * Set.prototype.keys():返回Set实例所有键名
 * Set.prototype.values():返回Set实例所有键值
 * 其中Set实例的键名和键值相等，所以两个方法没有任何区别
 * Set.prototype.entries()
 * Set.prototype.forEach()
 */
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"

set.forEach((value,key) => {
    console.log(value + ':' + key);
});

//数组中的map和filter方法可以间接用于Set
//使用Set和filter实现并集、交集和差集
let a = new Set([1,2,3,4]);
let b = new Set([1,2,5,6])

//并集
let c = new Set([...a,...b])
console.log(c);

//交集
let d = new Set([...a].filter(x => b.has(x)))
console.log(d);

//差集
let e = new Set([...a].filter(x => !b.has(x)))
let f = new Set([...b].filter(x => !a.has(x)))
console.log(e);
console.log(f);

//改变原有的Set结构
//1.使用map
let set2 = new Set([1,2,3]);
set2 = new Set([...set2].map(x => x * 2))
console.log(set2);




