/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
  const set = new Set(nums.sort((a,b) => a - b));
  
  return (set.size < 3) ? [...set].pop() : [...set].reverse()[2];
};


