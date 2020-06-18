/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) return false;
  
  let map = new Map();
  let x;
  
  const gcd = (a, b) => {
    if (a == 0) return b; 
    return gcd(b % a, a);
  }
  
  for(const i in deck) {
    if (map.has(deck[i])) {
      map.set(deck[i], map.get(deck[i]) + 1);
      continue;
    }
    
    map.set(deck[i], 1);
  }
  
  if(map.size == 1) return true;

  x = map.get(deck[0]);
  
  for (const [key, value] of map) {
    x = gcd(x, value);
  }
  
  return x >=2;
};


