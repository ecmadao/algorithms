/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
 *
 * Example 1:
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 *
 * Example 2:
 * Input: [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

public class Solution {
    public int MaxProduct(int[] nums) {
        if (nums.Length == 0) return 0;

        int min = nums[0];
        int max = nums[0];
        int res = nums[0];

        for (int i = 1; i < nums.Length; i += 1) {
            if (nums[i] < 0) {
                int tmp = max;
                max = min;
                min = tmp;
            }
            max = Math.Max(nums[i], max * nums[i]);
            min = Math.Min(nums[i], min * nums[i]);
            res = Math.Max(res, max);
        }
        return res;
    }
}