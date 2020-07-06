/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
  const nums2 = [...nums];
  let values = [];
  
  for (let i = 0; i< nums.length; i++) {
    nums2[nums[i] - 1] = nums[nums[i] - 1] * -1;
  }
  
  for (let i = 0; i< nums2.length; i++) {
    if (nums2[i] > 0) values.push(i + 1);
  }
  
  return values;
};


