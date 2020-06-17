/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  const increment = BigInt(digits.join('')) + 1n
  return String(increment).split('').map(x => parseInt(x))
};


