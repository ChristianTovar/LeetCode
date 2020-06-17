/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) { 
  const index = nums.findIndex(x => x >= target);  
  return (index != -1) ? index : nums.length;
};


