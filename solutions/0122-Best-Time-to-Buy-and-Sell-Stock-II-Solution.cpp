class Solution {
public:
  int maxProfit(vector<int>& prices) {
    bool buy = true;
    int transaction {0};
    int profit {0};
    
    for (auto it = prices.begin(); it != prices.end(); ++it) {      
      if(!buy and (it + 1) == prices.end()) {
        profit += *it - transaction;
        break;
      }
      
      if(buy and (it + 1) == prices.end()) break;
      
      if (!buy and (*it > *(it + 1))) {
        buy = true;
        profit += *it - transaction;
        continue;
      }
      
      if (buy and (*it < *(it + 1))) {
        buy = false;
        transaction = *it;
      }
    }
    
    return profit;
  }
};
