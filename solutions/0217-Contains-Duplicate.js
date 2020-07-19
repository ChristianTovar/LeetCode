/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  let map = new Map();
  
  for (const n of nums) {
    if (!map.has(n)) {
      map.set(n, 1);
    } else {
      return true;
    }
  }
  
  return false;
};


