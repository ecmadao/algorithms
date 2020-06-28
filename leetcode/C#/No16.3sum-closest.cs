/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 *
 * Example 1:
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * Constraints:
 * 3 <= nums.length <= 10^3
 * -10^3 <= nums[i] <= 10^3
 * -10^4 <= target <= 10^4
*/

public class Solution {
    private int Search(int[] nums, int start, int target) {
        int i = start;
        int j = nums.Length - 1;

        int res = nums[i] + nums[j];
        while (i < j) {
            int num = nums[i] + nums[j];
            if (Math.Abs(num - target) < Math.Abs(res - target)) res = num;
            if (num == target) break;

            if (num < target) {
                i += 1;
            } else {
                j -= 1;
            }
        }
        return res;
    }

    public int ThreeSumClosest(int[] nums, int target) {
        Array.Sort(nums);
        int res = nums[0] + nums[1] + nums[2];

        for (int i = 0; i < nums.Length - 2; i += 1) {
            int sum = nums[i] + Search(nums, i + 1, target - nums[i]);
            if (Math.Abs(sum - target) < Math.Abs(res - target)) res = sum;
        }
        return res;
    }
}
