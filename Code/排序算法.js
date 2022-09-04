var arr = [1,9,5,3,2,3,5,6,2,32,6,7,2]
let length = arr.length

// 冒泡排序
for(let i = 0; i < length-1; i++) {
    for(let j = i+1; j < length; j++) {
        if(arr[i] > arr[j]) {
            var temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
}

console.log(arr);

// 选择排序