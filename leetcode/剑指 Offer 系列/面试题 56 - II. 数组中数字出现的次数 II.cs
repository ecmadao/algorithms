/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
 *
 * 示例 1：
 * 输入：nums = [3,4,3,3]
 * 输出：4
 *
 * 示例 2：
 * 输入：nums = [9,1,7,9,7,9,7]
 * 输出：1
 *
 * 限制：
 * 1 <= nums.length <= 10000
 * 1 <= nums[i] < 2^31
 */

public class Solution {
    public int SingleNumber(int[] nums) {
        Array.Sort(nums);
        int i = 0;
        while (i < nums.Length) {
            if (i + 1 >= nums.Length || nums[i] != nums[i + 1]) return nums[i];
            i += 3;
        }
        return nums[0];
    }
}