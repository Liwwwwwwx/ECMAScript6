function log(a,b,c,d) {
    console.log(a,b,c,d)
    arguments[0] = 'bfe'
    arguments[3] = 'dev'
   
    console.log(arguments)
    console.log(a,b,c,d)
  }
  
  log(1,2,3) // bfe 2 3 undefined
  //因为只传递了3个值，所以无法进行更新
  log(1,2,3,4) // bfe 2 3 dev