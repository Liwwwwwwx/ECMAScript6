/**
 * map是object的扩展，支持‘值-值’的对应
 */

const m = new Map()
const o = {p:'hello world'}

m.set(o,'content')
console.log(m);
console.log(m.get(o))

m.has(o) //true
m.delete(o)
m.has(o) //false

//map可以接受一个数组作为参数
const map = new Map([
    ['name','liwenxuan'],
    ['age',18]
])
console.log(map.size,map.has('name'),map.get('age'));

//Map实例的属性和方法
map.size //大小
map.set('123',1)
map.set(undefined,2)
map.set(2131,3)
map.get(undefined)
map.has(2131)
map.delete(2131)
map.clear()

/**
 * Map.prototype.keys():返回Map实例所有键名
 * Map.prototype.values():返回Map实例所有键值
 * Map.prototype.entries()
 * Map.prototype.forEach()
 */

 const map1 = new Map([
    ['F', 'no'],
    ['T',  'yes'],
  ]);
  
  for (let key of map1.keys()) {
    console.log(key);
  }
  // "F"
  // "T"
  
  for (let value of map1.values()) {
    console.log(value);
  }
  // "no"
  // "yes"
  
  for (let item of map1.entries()) {
    console.log(item[0], item[1]);
  }
  // "F" "no"
  // "T" "yes"
  
  // 或者
  for (let [key, value] of map1.entries()) {
    console.log(key, value);
  }
  // "F" "no"
  // "T" "yes"
  
  // 等同于使用map.entries()
  for (let [key, value] of map) {
    console.log(key, value);
  }
  // "F" "no"
  // "T" "yes

  //Map结构转为数组
  [...map]

  //Map转为对象
  function strMapToObj(strMap) {
    let obj = Object.create(null)
    for(let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
  }

  //对象转为Map
  let obj = {'a':1,'b':2}
  let mapObj = new Map(Object.entries(obj))
  console.log(mapObj);

  //转换函数
  function strObjToMap(strObj) {
    let map = new Map();
    for (let k of Object.keys(obj)) {
        map.set(k,obj[k]);
    }
    return map
  }

  //map转为json
  //1.Map键名都是字符串
  function strMapToJson(strMap) {
    return JSON.stringify(strMapToJson(strMap))
  }

  //2.Map的键名有非字符串
  function strMapToJson(strMap) {
    return JSON.stringify([...strMap]);
  }

  //JSON转为Map
  //1.正常情况下
  function jsonToStrMap(jsonStr) {
    return strObjToMap(JSON.parse(jsonStr))
  }

  //2.整个JSON就是一个数组，且每个数组成员本身又是一个有两个成员的数组
  function jsonToStrMap(jsonStr) {
    return new Map(JSON.parse(jsonStr))
  }