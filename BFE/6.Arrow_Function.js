const obj = {
    dev: 'bfe',

    //两种常见的对面内部函数属性命名方式
    a: function() {
      return this.dev
    },
    b() {
      return this.dev
    },

    //箭头函数不能在对象里命名函数属性，因此此时this执行函数内部，不指向对象本身
    c: () => {
      return this.dev
    },

    //立即执行表达式
    d: function() {
      return (() => {
        return this.dev
      })()
    },

    //正确写法
    e: function() {
      return this.b()
    },
    //错误写法
    f: function() {
      return this.b
    },

    //因为c是无效的
    g: function() {
      return this.c()
    },
    h: function() {
      return this.c
    },

    
    i: function() {
      return () => {
        return this.dev
      }
    }
  }
  
  console.log(obj.a())
  console.log(obj.b())
  console.log(obj.c())
  console.log(obj.d())
  console.log(obj.e())
  console.log(obj.f()())
  console.log(obj.g())
  console.log(obj.h()())
  console.log(obj.i()())