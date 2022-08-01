// () => {}  不能使用 apply call bind
var a = 3
const obj = {
    a: 1,
    b: function() {
      console.log(this.a)
    },
    c() {
      console.log(this.a)
    },
    d: () => {
      console.log(this.a)
    },
    e: (function() {
      return () => {
        console.log(this.a);
      }
    })(), // 立即执行表达式 => e: () = { console.log(this.a) }
    f: function() {
      return () => {
        console.log(this.a);
      }
    }
  }
  obj.e()
  
  console.log(obj.a)
  obj.b();
  (obj.b)()
  const b = obj.b
  b()
  obj.b.apply({a: 2})
  obj.c()
  obj.d()
  ;(obj.d)()
  obj.d.apply({a:2})
  obj.e()
  ;(obj.e)()
  obj.e.call({a:2})
  obj.f()()
  ;(obj.f())()
  obj.f().call({a:2})