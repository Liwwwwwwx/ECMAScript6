//删除数组中的重复元素
var array = [1,2,3,2,3,2,45,5,5,232,42,52,21,141,231,4,1,4,231,141]

//1.使用set
const set = new Set(array);
console.log([...set]);

//2.set
function dedupe(array){
    return Array.from(new Set(array))
}
console.log(dedupe(array));