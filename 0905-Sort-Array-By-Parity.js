/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
  let i = 0;
  let length = A.length;
  let odd;
  
  while (length) {
    if(A[i] % 2) {
      odd = A[i];
      A.splice(i, 1);
      A.push(odd);
      length--;
    } else {
      i++;
      length--;
    }
  }
  
  return A;
};


