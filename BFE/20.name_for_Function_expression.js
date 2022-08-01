//a是一个函数声明，具有数据类型函数

//b和c是函数表达式，具有数据类型函数

//d是一个命名函数表达式，这个名称d仅局部于函数体（范围），因此在函数体类型d之外返回未定义

function a(){
}
const b = function() {
  
}

const c = function d() {
  console.log(typeof d)
  d = 'e'
  console.log(typeof d)
}

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
c()