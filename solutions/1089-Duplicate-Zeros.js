/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {
  let originalSize = arr.length;
  let i = 0;

  while(arr[i] != undefined) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      i += 2;
    } else {
       i++;
    }
  }
  
  arr.splice(originalSize, arr.length - originalSize);
};


