/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  for (const i in arr) {
    const x = arr.lastIndexOf(arr[i] / 2)
    if (x != -1 && x != i) return true;
  }
    
  return false;
};


