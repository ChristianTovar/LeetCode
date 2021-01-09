class Solution {
	public:
		bool isPalindrome(int x) {
			if (x < 0) return false;

			auto s = std::to_string(x);
			reverse(s.begin(), s.end());

			return x == std::stol(s);
		}
};
