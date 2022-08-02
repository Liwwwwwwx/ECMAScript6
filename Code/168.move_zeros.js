/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
    // your code here
    var arr = [];
    var arr_zero = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] != 0) {
            arr.push(list[i])
        } else {
            arr_zero.push(list[i])
        }
    }
    return [...arr, ...arr_zero]
}

const list = [0,0,0,1,0,0,2,0,0,3,0,0,0,6,0,0] 
console.log(moveZeros(list));