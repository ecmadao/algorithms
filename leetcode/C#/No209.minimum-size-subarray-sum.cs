/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s.
 * If there isn't one, return 0 instead.
 *
 * Example: 
 * Input: s = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: the subarray [4,3] has the minimal length under the problem constraint.
 *
 * Follow up:
 * If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 
*/

public class Solution {
    public int MinSubArrayLen(int s, int[] nums) {
        int i = 0;
        int j = 0;
        int sum = 0;
        int res = int.MaxValue;

        while (j < nums.Length) {
            sum += nums[j];
            while (i < j && sum - nums[i] >= s) sum -= nums[i++];
            if (sum >= s) res = Math.Min(j - i + 1, res);

            j += 1;
        }
        return res == int.MaxValue ? 0 : res;
    }
}