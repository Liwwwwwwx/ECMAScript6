class Promise {
  //构造函数
  constructor(executor) {
    //添加属性
    this.PromiseState = 'pending'
    this.PromiseResult = null

    //声明属性
    this.callbacks = []
    const self = this

    function resolve(data) {
      //判断状态
      if (self.PromiseState !== 'pending') return;

      //1.修改对象的状态（promiseState）
      self.PromiseState = 'fulfilled'

      //2.设置对象结果值（promiseResult）
      self.PromiseResult = data

      //调用成功的回调函数
      setTimeout(() => {
        self.callbacks.forEach(item => {
          item.onResolved(data)
        })
      });
    }

    function reject(data) {
      // 判断状态
      if (self.PromiseState !== 'pending') return;

      //1.修改对象的状态（promiseState）
      self.PromiseState = 'rejected'

      //2.设置对象结果值（promiseResult）
      self.PromiseResult = data

      //调用成功的回调函数
      setTimeout(() => {
        self.callbacks.forEach(item => {
          item.onRecjected(data)
        })
      });
    }

    try {
      //同步调用[执行器函数]
      executor(resolve, reject)
    } catch (e) {
      //修改promise对象的状态
      reject(e)
    }
  }

  //then方法
  then(onResolved, onRejected) {
    const self = this

    if (typeof onRejected !== 'function') {
      onRejected = reason => {
        throw reason
      }
    }

    if (typeof onResolved !== 'function') {
      onResolved = value => value
    }
    return new Promise((resolve, reject) => {
      function callback(type) {
        try {
          let result = type(self.PromiseResult)
          // 判断
          if (result instanceof Promsie) {
            //如果是Promise类型对象
            result.then(v => {
              resolve(v)
            }, r => {
              reject(r)
            })
          } else {
            resolve(result)
          }
        } catch (e) {
          reject(e)
        }
      }

      //调用回调函数
      if (this.PromiseState === 'fulfilled') {
        setTimeout(() => {
          callback(onResolved)
        });
      }
      if (this.PromiseState === 'rejected') {
        setTimeout(() => {
          callback(onRejected)
        });
      }
      if (this.PromiseState === 'pending') {
        //保存回调函数
        this.callbacks.push({
          onResolved() {
            callback(onResolved)
          },
          onRejected() {
            callback(onRejected)
          }
        })
      }
    })
  }

  //catch方法
  catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }

  //resolve方法
  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      } else {
        resolve(value)
      }
    })
  }

  //reject方法
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

  //all方法
  static all(promise) {
    return new Promise((resolve, reject) => {

      let count = 0
      let arr = []

      for (let i = 0; i < promise.length; i++) {
        promise[i].then(v => {
          //得知对象的状态是成功
          //每个promise对象都成功
          count++
          //将当前promise对象成功的结果 存入到数组中
          arr[i] = v
          //判断
          if (count === promise.length) {
            //修改状态
            resolve()
          }
        }, r => {
          reject(r)
        })
      }
    })
  }

  //race方法
  static race(promise) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promise.length; i++) {
        promise[i].then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      }
    })
  }
}