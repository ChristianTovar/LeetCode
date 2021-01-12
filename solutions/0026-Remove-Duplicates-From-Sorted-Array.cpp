class Solution {
public:
  int removeDuplicates(vector<int>& nums) {
    for (auto it = nums.begin(); it != nums.end(); ++it) {
      if (it + 1 == nums.end()) break;
      if (*it == *(it + 1)) {
        nums.erase(it);
        it -= 1;
      }
    }
    
    return nums.size();
  }
};
