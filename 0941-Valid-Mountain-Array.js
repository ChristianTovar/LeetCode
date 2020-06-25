/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function(A) {
  if (A.length < 3) return false;  

  let i = 0;
  let up = 0;
  let down = 0;
  
  while(A[i] < A[i + 1]) {
    i++;
    up++;
  };
  
  
  while(A[i] > A[i + 1]) {
    i++;
    down++;
  };
  

  return (up + down == A.length - 1 && up && down) ? true : false;
};


