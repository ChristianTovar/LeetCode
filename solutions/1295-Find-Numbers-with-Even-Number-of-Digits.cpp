class Solution {
public:
  int findNumbers(vector<int>& nums) {
    int count {0};
    for (auto it = nums.begin(); it != nums.end(); ++it) {
      auto s = std::to_string(*it);
      if (s.size() % 2 == 0) count++;
    }
    
    return count;
  }
};
