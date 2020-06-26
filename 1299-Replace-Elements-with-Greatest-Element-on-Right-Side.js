/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
  let max = -Infinity;
  const size = arr.length -1;
  let aux;

  for(let i = size; i >= 0; i--) {    
    if(i == size) {
      max = arr[i];
      arr[i] = -1;
      continue;
    }
      
    if(arr[i] > max) {
      aux = max;
      max = arr[i];
      arr[i] = aux;
    } else {
      arr[i] = max;
    }
  }
  
  return arr;
};


