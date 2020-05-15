/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
 *
 * Example 1:
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 *
 * Constraints:
 * The length of the array is in range [1, 20,000].
 * The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/

public class Solution {
    public int SubarraySum(int[] nums, int k) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        int res = 0;
        int sum = 0;
        dict[0] = 1;

        foreach (int num in nums) {
            sum += num;
            int overflow = sum - k;
            if (dict.ContainsKey(overflow)) res += dict[overflow];
            
            int count = 0;
            dict.TryGetValue(sum, out count);
            dict[sum] = count + 1;
        }
        return res;
    }
}