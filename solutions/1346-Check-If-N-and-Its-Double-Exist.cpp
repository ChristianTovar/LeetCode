class Solution {
public:
  bool checkIfExist(vector<int>& arr) {
    unordered_map<int, int> map;
    for (auto it = arr.begin(); it != arr.end(); it++) {
      if (map.find((*it) * 2) != map.end()) return true;
      if(map.find((*it) / 2) != map.end() and (*it) % 2 == 0) return true; 
      map[*it] = 1;
    }
    
    return false;
  }
};
