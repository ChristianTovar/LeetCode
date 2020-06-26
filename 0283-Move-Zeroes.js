/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let i = 0;
  let length = nums.length;
  
  while(length) {
    if(nums[i] == 0) {
      nums.splice(i,1);
      nums.push(0);
      length--;
      continue;
    }
    
    i++;
    length--;
  }
};


