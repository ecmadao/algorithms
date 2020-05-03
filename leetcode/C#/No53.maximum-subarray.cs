/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Follow up:
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

public class Solution {
    public int MaxSubArray(int[] nums) {
        int res = int.MinValue;
        int sum = 0;

        foreach (int num in nums) {
            if (sum < 0) {
                sum = num;
            } else {
                sum += num;
            }
            res = Math.Max(res, sum);
        }
        return res;
    }
}