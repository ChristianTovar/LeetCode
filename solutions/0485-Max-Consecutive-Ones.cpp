class Solution {
public:
  int findMaxConsecutiveOnes(vector<int>& nums) {
    int count {0};
    int max {0};
    for (auto it = nums.begin(); it != nums.end(); ++it) {
      if (*it) {
        count++;
      } else {
        if (count > max) { max = count; }
        count = 0;
      }
    }
    
    return (count > max) ? count : max;
  }
};
