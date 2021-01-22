class Solution {
public:
  int thirdMax(vector<int>& nums) {
    sort(nums.begin(), nums.end(), greater<int>());
    set<int, greater<int>> s(nums.begin(), nums.end());
    
    auto it = s.begin();
    advance(it, 2);
    
    return s.size() < 3 ? *(s.begin()) : *it;
  }
};
