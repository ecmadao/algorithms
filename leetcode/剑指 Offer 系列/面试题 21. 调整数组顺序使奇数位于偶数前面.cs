/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 *
 * 示例：
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,2,4] 
 * 注：[3,1,2,4] 也是正确的答案之一。
 *
 * 提示：
 * 1 <= nums.length <= 50000
 * 1 <= nums[i] <= 10000
 */

public class Solution {
    public int[] Exchange(int[] nums) {
        Array.Sort(nums, (n1, n2) => {
            if ((n1 % 2 + n2 % 2) == 1) {
                return n1 % 2 == 1 ? -1 : 1;
            }
            return n1 - n2;
        });
        return nums;
    }
}