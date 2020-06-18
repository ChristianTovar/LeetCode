/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(const i in nums){
    const missingNumber = nums.indexOf(target - nums[i])
    
    if (missingNumber!= -1 && missingNumber != i ) return  [i, nums.indexOf(target - nums[i])]; 
  }
};
