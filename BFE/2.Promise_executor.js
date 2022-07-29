new Promise((resolve, reject) => {
    resolve(1)
    resolve(2)
    reject('error')
  }).then((value) => {
    console.log(value)
  }, (error) => {
    console.log('error')
  })
//resolve(1)此时Promise对象状态已经固定成功，所以输出1