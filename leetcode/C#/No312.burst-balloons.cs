/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums.
 * You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.
 * Find the maximum coins you can collect by bursting the balloons wisely.
 *
 * Note:
 * You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
 * 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
 *
 * Example:
 * Input: [3,1,5,8]
 * Output: 167 
 * Explanation:
 * nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
 * coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
*/

public class Solution {
    public int MaxCoins(int[] nums) {
        if (nums.Length == 0) return 0;

        List<int> list = new List<int>(nums);
        list.Add(1);
        list.Insert(0, 1);
        int[,] dp = new int[list.Count, list.Count];

        for (int i = list.Count - 2; i >= 0; i -= 1) {
            for (int j = i + 2; j < list.Count; j += 1) {
                for (int k = i + 1; k < j; k += 1) {
                    dp[i, j] = Math.Max(
                        dp[i, j],
                        dp[i, k] + dp[k, j] + list[i] * list[k] * list[j]
                    );
                }
            }
        }

        return dp[0, list.Count - 1];
    }
}