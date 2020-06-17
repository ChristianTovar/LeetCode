/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  const number = BigInt(A.join('')) + BigInt(K);
  return String(number).split('');
};


