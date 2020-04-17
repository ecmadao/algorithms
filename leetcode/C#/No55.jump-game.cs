/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 *
 * Example 1:
 * Input: [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 * Input: [3,2,1,0,4]
 * Output: false
 * Explanation:
 * You will always arrive at index 3 no matter what. Its maximum
 * jump length is 0, which makes it impossible to reach the last index.
*/

public class Solution {

    public bool CanJumpTimeout(int[] nums) {
        bool CanReach(int index, bool[] cache) {
            if (index >= nums.Length - 1) return true;
            if (cache[index]) return cache[index];

            if (nums[index] == 0) return false;
            bool res = false;
            for (int i = nums[index]; i > 0; i -= 1) {
                res = CanReach(index + i, cache);
                if (res) break;
            }
            cache[index] = res;
            return res;
        }
        return CanReach(0, new bool[nums.Length]);
    }

    public bool CanJump(int[] nums) {

        bool[] dp = new bool[nums.Length];
        dp[0] = true;
        for (int i = 1; i < nums.Length; i += 1) {
            for (int j = i - 1; j >= 0; j -= 1) {
                if (dp[j] && j + nums[j] >= i) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[nums.Length - 1];
    }
}
