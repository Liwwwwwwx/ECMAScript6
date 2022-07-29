Promise.resolve(1) // 1
.then(() => 2) // 2
.then(3) // skip
.then((value) => value * 3) // 6
.then(Promise.resolve(4)) // create a Pending Promise
.then(console.log) // 6