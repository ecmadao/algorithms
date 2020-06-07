/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array nums of n integers where n > 1,
 * return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 *
 * Example:
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 * Constraint:
 * It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
 *
 * Note: Please solve it without division and in O(n).
 * Follow up:
 * Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int[] prefix = new int[nums.Length + 1];
        prefix[0] = 1;
        for (int i = 0; i < nums.Length; i += 1) prefix[i + 1] = prefix[i] * nums[i];

        int[] res = new int[nums.Length];
        int product = 1;
        for (int j = nums.Length - 1; j >= 0; j -= 1) {
            res[j] = prefix[j] * product;
            product *= nums[j];
        }
        return res;
    }
}