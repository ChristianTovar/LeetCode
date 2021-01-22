class Solution {
public:
  vector<int> findDisappearedNumbers(vector<int>& nums) {
    vector<int> v;
    if (nums.empty()) return v;
    
    int size = nums.size();
    sort(nums.begin(), nums.end());
    auto u = unique(nums.begin(), nums.end());
    nums.resize(distance(nums.begin(), u));
  
    for (int i = 1; i <= size; i++) {
      if (!binary_search(nums.begin(), nums.end(), i)) v.push_back(i);
    }
    
    return v;
  }
};
