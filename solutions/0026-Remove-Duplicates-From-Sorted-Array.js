/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let temp;
  let i = 0;
  
  while(nums[i] != undefined) {
    if (temp != nums[i]) {
      temp = nums[i];
      i++;
      continue;
    }
    
    nums.splice(i, 1);
  }
};


