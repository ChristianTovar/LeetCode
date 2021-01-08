class Solution {
public:
	int reverse(int x) {
		auto pos = std::abs(x);
		auto s_num = std::to_string(pos);
		std::reverse(s_num.begin(), s_num.end());
		auto ri = std::stol(s_num);
		if (ri < INT_MIN || ri > INT_MAX) return 0;
		return x < 0 ? ri * -1 : ri; 
  }
};
