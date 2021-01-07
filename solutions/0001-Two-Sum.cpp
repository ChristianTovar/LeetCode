class Solution {
	public:
		vector<int> twoSum(vector<int>& nums, int target) {
			std::vector<int> v;

			for (int i = 0; i < nums.size() ; ++i) {
				auto itr = std::find(nums.begin() + i + 1, nums.end(), target - nums[i]);
				if (itr != nums.end()) {
					v.push_back(i);
					v.push_back(std::distance(nums.begin(), itr));
					return v;
				}	
			}
			return v;
		}
};
