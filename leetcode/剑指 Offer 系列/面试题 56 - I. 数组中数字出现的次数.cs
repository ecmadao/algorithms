/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。
 * 要求时间复杂度是O(n)，空间复杂度是O(1)。
 *
 * 示例 1：
 * 输入：nums = [4,1,4,6]
 * 输出：[1,6] 或 [6,1]
 *
 * 示例 2：
 * 输入：nums = [1,2,10,4,1,4,3,3]
 * 输出：[2,10] 或 [10,2]
 *
 * 限制：
 * 2 <= nums <= 10000
 */

public class Solution {
    public int[] SingleNumbers(int[] nums) {
        if (nums.Length == 2) return nums;

        int x = 0;
        foreach (int n in nums) x ^= n;

        int d = 1;
        while ((x & d) == 0) d <<= 1;

        int a = 0;
        int b = 0;
        foreach (int n in nums) {
            if ((d & n) == 0) {
                a ^= n;
            } else {
                b ^= n;
            }
        }
        return new int[]{ a, b };
    }
}