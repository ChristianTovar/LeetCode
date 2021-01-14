class Solution {
public:
  bool validMountainArray(vector<int>& arr) {
    if(arr.size() < 3) return false;
    auto max = max_element(arr.begin(), arr.end());
    if (arr.front() == *max or arr.back() == *max) return false;
    
    bool up = true;
    
    for (auto it = arr.begin(); it != (arr.end() - 1); ++it) {
      if (up and *it == *max) {
        up = false;
        continue;
      }
      if (up and *it < *(it + 1)) continue;
      if (up and *it > *(it + 1)) return false;
      if (*it == *(it + 1)) return false;
      if (!up and *it > *(it + 1)) continue;
      if (!up and *it < *(it + 1)) return false;
    }
    
    return true;
  }
};
