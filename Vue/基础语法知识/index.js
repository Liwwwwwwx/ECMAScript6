
var maximumSwap = function (num) {
  var arr = []
  var temp = num.toString()
  for (let i = 0; i < temp.length; i++) {
    arr[i] = [i, temp[i]]
  }
  var arr1 = JSON.parse(JSON.stringify(arr))

  for (let i = 0; i < temp.length; i++) {
    for (let j = i; j < temp.length; j++) {
      if (arr[i][1] < arr[j][1]) {
        let tmp = []
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
  let swapIndex1 = 0;
  let swapIndex2 = 0;
  let swapIndex3 = 0;
  let swapNum = 0

  console.log(arr,arr1);
  for (let i = 0; i < temp.length - 1; i++) {
    if(arr1 === arr) {
      temp = temp
      console.log(1);
      break;
    }
    if(arr[i][0] == 0 ) {
      swapIndex1 = 0
      swapIndex2 = arr[0][0]
      swapNum = arr[0][1]
      console.log(2);
      temp =  temp.slice(swapIndex1 + 1, swapIndex2) + temp[0] + temp.slice(swapIndex2 + 1)
      break;
    }
    if (arr[i][0] !== 0) {
      swapIndex1 = i
      swapIndex2 = arr[i][0]
      swapNum = arr[i][1]
      console.log(3);
      temp = swapNum + temp.slice(swapIndex1+1, swapIndex2) + temp[0] + temp.slice(swapIndex2 + 1)
      break;
    }

    if (arr[i + 1][0] - arr[i][0] != 1) {
      swapIndex1 = arr[i][0]
      swapIndex2 = arr[i + 1][0]
      swapNum = arr[i + 1][1]
      swapIndex3 = i + 1
      console.log(4);
      temp = temp.slice(0, swapIndex1 + 1) + swapNum + temp.slice(swapIndex1 + 2, swapIndex2) + temp[swapIndex3] + temp.slice(swapIndex2 + 1)
      break;
    }
  }

  return parseInt(temp)

}
let num = 38368
var num3 = maximumSwap(num)
console.log(num3);

