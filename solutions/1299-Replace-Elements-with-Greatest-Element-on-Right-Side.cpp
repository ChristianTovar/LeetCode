class Solution {
public:
  vector<int> replaceElements(vector<int>& arr) {
    vector<int> arr2;

    for (auto it = arr.begin(); it != arr.end(); it++) {
      if ( it + 1 == arr.end()) {
        arr2.push_back(-1);
        break;
      }

      arr2.push_back(*(max_element(it + 1, arr.end())));
    }
                     
    return arr2;
  }
};
