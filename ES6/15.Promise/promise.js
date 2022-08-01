/**
 * Promise对象有三种状态：pending(进行中)、fufilled(已成功)、rejected(已失败)
 * 两种状态转换:1.pending->fufilled   resolved
 *            2.pending->rejected   
 * 缺点:1.无法取消promise，一旦新建它就会立即执行，无法中途取消
 *     2.如果不设置毁掉函数，promise内部抛出的错误，不会反应到外部
 *     3.当处于pending状态，无法得知目前进展到哪个阶段(刚刚开始还是即将完成)
 */

//基本用法
const promise1 = new Promise(function(res, rej) {
    // some code...

    if(/* 异步操作成功 */ true) {
        res()
    } else {
        rej(error)
    }
})

//Promise实例生成以后，可以用then方法指定res状态和rej状态,两个函数都是可选的
promise1.then(function(value) {
    //success->res
}, function(error) {
    //failure->rej
})

//timeout函数返回一个promise对象，在ms时间后，promise对象的状态转换为resolved，就会触发then的回调函数

function timeout(ms) {
    return new Promise((res, rej)=>{
        setTimeout(res, ms, 'done')
    })
}

timeout(1000).then((value) => {
    console.log(value);
})

//Promise对象创建后会立即执行，所以先输出Promise；然后当前脚本所有同步任务执行完毕，此时输出promise_2；最后执行then方法里的回调函数

let promise_2 = new Promise((res, rej) => {
    console.log('Promise');
    res()
})

promise_2.then(function() {
    console.log('resolved');
})

console.log('promise_2');

