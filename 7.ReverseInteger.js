/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const result = Math.abs(x).toString().split('').reverse().join('');

  if (result > Math.pow(2, 31)) return 0;
  if (x >= 0) return parseInt(result);
  
  return parseInt(result * -1);
};
