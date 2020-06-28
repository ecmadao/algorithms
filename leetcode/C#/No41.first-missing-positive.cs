/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an unsorted integer array, find the smallest missing positive integer.
 *
 * Example 1:
 * Input: [1,2,0]
 * Output: 3
 *
 * Example 2:
 * Input: [3,4,-1,1]
 * Output: 2
 *
 * Example 3:
 * Input: [7,8,9,11,12]
 * Output: 1
 *
 * Note:
 * Your algorithm should run in O(n) time and uses constant extra space.
*/

public class Solution {
    public int FirstMissingPositive(int[] nums) {
        for (int i = 0; i < nums.Length; i += 1) {
            while (
                nums[i] != i + 1 &&
                nums[i] > 0 &&
                nums[i] - 1 < nums.Length &&
                nums[i] != nums[nums[i] - 1]
            ) {
                int j = nums[i] - 1;
                int tmp = nums[j];
                nums[j] = nums[i];
                nums[i] = tmp;
            }
        }

        for (int i = 0; i < nums.Length; i += 1) {
            if (nums[i] != i + 1) return i + 1;
        }
        return nums.Length + 1;
    }
}
