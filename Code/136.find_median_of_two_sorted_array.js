/**
 * @param {number[]} arr1 - sorted integer array
 * @param {number[]} arr2 - sorted integer array
 * @returns {number}
 * 
 * median([1,2],[3,4,5]) -> 3
 * median([1,2],[3,4]) -> 2.5
 */
function median(arr1, arr2) {
    // your code here
    let arr = [...arr1, ...arr2]

    // 冒泡排序
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    var midNumber = 0
    var mid = arr.length / 2
    if (arr.length % 2 == 0) {
        midNumber = (arr[mid] + arr[mid - 1]) / 2
    } else {
        midNumber = arr[(arr.length - 1) / 2]
    }

    return midNumber
}