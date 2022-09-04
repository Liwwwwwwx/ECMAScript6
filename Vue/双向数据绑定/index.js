class Vue {
  constructor(options) {
    this.$data = options.data

    // 调用数据劫持的方法
    Observe(this.$data)

    // 属性代理
    Object.keys(this.$data).forEach(key => {
      Object.defineProperty(this, key, {
        configurable:true,
        enumerable:true,
        get() {
          return this.$data[key]
        },
        set(newValue) {
          this.$data[key] = newValue
        }
      })
    })

    //调用模板编译函数
    Compile(options.el,this)
  }
}

// 定义一个数据劫持的方法
function Observe(obj) {
  // 递归的终止条件
  if(!obj || typeof obj !== 'object') return 

  const dep = new Dep()

  //通过Object.keys(obj)获取当前obj上的每个属性
  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    //把vlaue这个子节点进行递归
    Observe(value)
    //需要为当前的key所对应的属性，添加setter和getter
    Object.defineProperty(obj, key, {
      configurable:true,
      enumerable:true,
      get() {
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set(newVlue) {
        value = newVlue
        Observe(value)
        dep.notify()
      }
    })
  })
}

// 对HTML结构进行末班编译
function Compile(el,vm) {
  //获取 el对应的 DOM 元素
  vm.$el = document.querySelector(el)

  // 创建文档碎片， 提高DOM操作的性能
  const fragement = document.createDocumentFragment()

  while((childNode = vm.$el.firstChild)) {
    fragement.appendChild(childNode)
  }

  //进行模板编译
  replace(fragement)

  vm.$el.appendChild(fragement)

  // 负责对DOM模板进行编译
  function replace(node) {
    // 定义匹配插值表达式的正则
    const regMustache = /\{\{\s*(\S+)\s*\}\}/

    // 证明当前的 node 节点 是一个文本子节点，需要正则替换
    if(node.nodeType === 3) {
      // 注意：文本子节点，也是一个DOM对象，如果要获取文本子节点的字符串内容，需要调用textContent属性获取
      const text = node.textContent
      //进行字符串的正则匹配与提取
      const execResult = regMustache.exec(text)

      console.log(execResult,regMustache)

      if(execResult) {
        const value = execResult[1].split('.').reduce((newObj, key) => newObj[key], vm)
        node.textContent = text.replace(regMustache, value)
        // 在这个时候，创建Watcher类的实例
        new Wathcer(vm, execResult[1], (newValue)=>{
          node.textContent = text.replace(regMustache, newValue)
        })
      }
      // 终止递归条件
      return
    }

    // 判断当前的node节点是否为input输入框
    if(node.nodeType === 1 && node.tagName.toUpperCase() === 'INPUT') {
      const attrs = Array.from(node.attributes)
      const findResult = attrs.find(x => x.name ==='v-model')
      if(findResult) {
        // 获取当前v-model属性的值
        const expStr = findResult.value
        const value = expStr.split('.').reduce((newObj,key) => newObj[key],vm)
        node.value = value

        //添加watcher实例
        new Wathcer(vm, expStr, (newValue) =>{
          node.value = newValue
        })

        // 监听文本框的input输入事件，拿到文本框最新的值，把最新的值，更新到vm上即可
        node.addEventListener('input', (e) => {
           const keyArr = expStr.split('.')
           const obj = keyArr.slice(0, keyArr.length-1).reduce((newObj, key) => newObj[key], vm)
           obj[keyArr[keyArr.length-1]] = e.target.value
        })
      }
    }
    
    node.childNodes.forEach((child) => replace(child))
  }
}

// 收集watcher订阅者的类
class Dep{
  constructor() {
    // 存放所有的watcher类
    this.subs = []
  }

  // 向 subs 数组中，添加 watcher 的方法
  addSub(watcher) {
    this.subs.push(watcher)
  }

  // 负责通知每个 watcher 的方法
  notify() {
    this.subs.forEach((watcher) => watcher.update())
  }
}

// watcher订阅者类
class Wathcer{
  //cb回调函数中，记录着当前Watcher如何更新自己的文本内容
  //  但是，只知道如何更新自己还不行，还必须拿到最新的数据
  //  因此，还需要再 new Watcher的期间，把vm传递进来（因为vm中保存着最新的数据）
  //除此之外，还需要知道，在vm身上众多的数据中，哪个数据，才是单签自己所需要的数据，
  //  因此，还必须在 new Watcher期间，指定watcher对应的数据的名字
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb

    console.log(key);
    //下面三行代码，负责把创建的Watcher存到Dep实例的subs数组中
    //Dep.target属性指向当前创造的Watcher实例对象
    Dep.target = this 
    // 循环访问vm的文本属性值，调用该属性的getter方法，此时将watcher实例添加到dep中
    key.split('.').reduce((newObj, key) => newObj[key],vm) 
    Dep.target = null 
  }

  //wathcer的实例，需要有一个uodate函数，从而让发布者能够通知我们进行更新
  update() {
    const value = this.key.split('.').reduce((newObj, key) => newObj[key],this.vm)
    this.cb(value)
  }
}