/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const palindrome = x.toString().split('').reverse().join('');
  return parseInt(palindrome) === x;
};


