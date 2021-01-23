class Solution {
public:
  void rotate(vector<int>& nums, int k) {
    for (int i = 1; i <= k; ++i) {
      nums.insert(nums.begin(), nums.back());
      nums.erase(nums.end() - 1);
    }
  }
};
