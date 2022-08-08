



/*
 * @param {string} str
 * @returns {string | string[]}
 */

function count(str) {
  // your code here
  let arr = []
  for(var i = 0; i<str.length;i++){
      //console.log(str[i]);
      var s = str[i]
      var temp = 1
      for(var j=i+1;j<str.length;j++){
          if(s==str[j]){
              temp++
              str = str.slice(0,j)+str.slice(j+1)
              j--
          }
      }
      arr[i] = [s,temp]
  }

  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j<arr.length;j++) {
      if(arr[i][1]<arr[j][1]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  let result = [arr[0][0]]
  for(let i=1;i<arr.length;i++) {
    if(arr[i][1] == arr[0][1]) {
      result.push(arr[i][0])
    }
  }
  console.log(result);

  console.log(arr);
  const map = new Map(arr)
  console.log(map);
  console.log(map.get('b'));
}

count('abbbccddd')