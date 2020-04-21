/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers nums and an integer k. A subarray is called nice if there are k odd numbers on it.
 * Return the number of nice sub-arrays.
 *
 * Example 1:
 * Input: nums = [1,1,2,1,1], k = 3
 * Output: 2
 * Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
 *
 * Example 2:
 * Input: nums = [2,4,6], k = 1
 * Output: 0
 * Explanation: There is no odd numbers in the array.
 *
 * Example 3:
 * Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
 * Output: 16
 *
 * Constraints:
 * 1 <= nums.length <= 50000
 * 1 <= nums[i] <= 10^5
 * 1 <= k <= nums.length
*/

public class Solution {
    public int NumberOfSubarrays(int[] nums, int k) {
        int i = 0;
        int res = 0;
        int pre = -1;
        Queue<int> indexes = new Queue<int>();

        while (i < nums.Length) {
            while (i < nums.Length && indexes.Count < k) {
                if (nums[i] % 2 == 1) {
                    indexes.Enqueue(i);
                }
                i += 1;
            }
            if (indexes.Count == k) {
                int j = i;
                while (j < nums.Length && nums[j] % 2 != 1) j += 1;
                int right = j - i + 1;
                int left = indexes.Peek() - pre;
                res += left * right;
                pre = indexes.Dequeue();
            }
        }
        return res;
    }
}