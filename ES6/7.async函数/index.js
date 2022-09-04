/**
 * 2020-8-9
 * async函数
 */
const log = console.log

const asyncReadFile = async function() {
  const f1 = await readFile('/etc/fstab')
  const f2 = await readFile('/etc/shells')
}

//async函数就是将Generator函数的*换成async，将yield换成await

//1.返回一个Promise对象

async function f() { //返回值永远为promise对象
  return 'hello world'
} 

f().then(v => log(v))

//2.await命令后面是一个Promise对象，返回该对象的结果。如果不是Promise对象，就直接返回对应的值

async function f() {
  return await 123
}

f().then(v=>log(v))