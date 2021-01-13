class Solution {
public:
  void duplicateZeros(vector<int>& arr) {
    auto it = arr.begin();
    int count {0};
    while (true) {
      if(it + 1 == arr.end()) {break;}
      if (*it == 0) {
        count++;
        it = arr.insert(it + 1, 0);
      }
    
      it++;
    }
    
    for (int i = 0; i < count; ++ i)
      arr.pop_back();
  }
};
