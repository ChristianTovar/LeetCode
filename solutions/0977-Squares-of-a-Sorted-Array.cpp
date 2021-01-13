class Solution {
public:
  vector<int> sortedSquares(vector<int>& nums) {
    for (auto it = nums.begin(); it != nums.end(); ++it) {
      *it *= *it;
    }
    
    sort(nums.begin(), nums.end());
    return nums;
  }
};
