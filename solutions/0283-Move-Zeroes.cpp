class Solution {
public:
  void moveZeroes(vector<int>& nums) {
    int s = nums.size();
    auto it = nums.begin();
    
    while(s) {
      if(*it == 0) {
        it = nums.erase(it);
        s--;
        nums.push_back(0);
        continue;
      }
      
      s--;
      it++;
    }
  }
};
