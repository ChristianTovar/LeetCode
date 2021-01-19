class Solution {
public:
  vector<int> sortArrayByParity(vector<int>& A) {
    vector<int> even(A.size()), odd(A.size()), hey = {1,2,3,4};
    
    auto it1 = copy_if(A.begin(), A.end(), even.begin(),  [](int x) { return (x % 2) == 0; });
    even.resize(distance(even.begin(),it1));
      
    auto it2 = copy_if(A.begin(), A.end(), odd.begin(), [](int x) { return (x % 2) != 0; });
    odd.resize(distance(odd.begin(),it2));
      
    even.insert(even.end(), odd.begin(), odd.end());
    return even;
  }
};
