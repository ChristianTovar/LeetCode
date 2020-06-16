/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  if(s.length === 1) return false;
  
  const chars = s.split('');
  let stack = [];
  
  for(const i in chars) {
    if (chars[i] == '(' || chars[i] == '[' || chars[i] == '{') {
      stack.push(chars[i]);
      continue;
    } else {
      if (stack[stack.length - 1] == '(' && chars[i] != ')') return false;
      if (stack[stack.length - 1] == '{' && chars[i] != '}') return false;
      if (stack[stack.length - 1] == '[' && chars[i] != ']') return false;
      if (stack[stack.length - 1] == undefined) return false;
      
      stack.pop();
    }  
  }
  
  return (stack.length) ? false : true;
};


