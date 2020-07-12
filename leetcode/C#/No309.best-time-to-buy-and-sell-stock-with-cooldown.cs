/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
 * You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 * After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
 *
 * Example:
 * Input: [1,2,3,0,2]
 * Output: 3 
 * Explanation: transactions = [buy, sell, cooldown, buy, sell]
*/

public class Solution {
    public int MaxProfit(int[] prices) {
        if (prices.Length == 0) return 0;

        int[][] dp = new int[prices.Length][];
        // [买入, 卖出]
        dp[0] = new int[2]{ -prices[0], 0 };

        for (int i = 1; i < prices.Length; i += 1) {
            dp[i] = new int[2];
            dp[i][0] = i > 1
                ? Math.Max(dp[i - 2][1] - prices[i], dp[i - 1][0])
                : Math.Max(-prices[i], dp[i - 1][0]);
            dp[i][1] = Math.Max(dp[i - 1][0] + prices[i], dp[i - 1][1]);
        }

        return Math.Max(dp[prices.Length - 1][0], dp[prices.Length - 1][1]);
    }
}
