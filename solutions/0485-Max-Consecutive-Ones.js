/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
  if( nums.length < 2) return nums[0] == 1 ? 1 : 0;
  
  let counter = 0;
  let max = 0;
  
  for (const n of nums) {
    if (n == 0) {
      if (counter > max) max = counter;
      counter = 0;
    }
    else
      counter += 1;
  }
  
  return (max < counter) ? counter: max;
};


