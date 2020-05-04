/*
 * Difficulty:
 * hard
 *
 * Desc:
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * Example:
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation:
 * The minimum number of jumps to reach the last index is 2.
 * Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Note:
 * You can assume that you can always reach the last index.
*/

public class Solution {
    public int Jump(int[] nums) {
        int res = 0;
        int maxReach = 0;
        int curReach = 0;

        for (int i = 0; i < nums.Length; i += 1) {
            if (i > curReach) {
                curReach = maxReach;
                res += 1;
            }
            if (curReach >= nums.Length - 1) break;
            maxReach = Math.Max(maxReach, i + nums[i]);
        }
        return res;
    }
}