/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
  let amount = 0;
  let x = 0;
  
  for (let n of nums) {
    x = 0;
    while(Math.trunc(n)) {
      x++;
      n /= 10;
    }
    // console.log(x)
    if (x%2 == 0) amount++;
  }
  
  return amount;
};


