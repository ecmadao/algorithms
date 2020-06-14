/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 *  [-1, 0, 1],
 *  [-1, -1, 2]
 * ]
*/


public class Solution {
    private IList<IList<int>> TwoSum(int[] nums, int index, int target) {
        List<IList<int>> res = new List<IList<int>>();
        
        int i = index;
        int j = nums.Length - 1;
        
        while (i < j) {
            int num = nums[i] + nums[j];
            if (num > target) {
                j -= 1;
            } else if (num < target) {
                i += 1;
            } else {
                res.Add(new List<int>(new int[]{ -target, nums[i], nums[j] }));
                while (i < j && nums[i + 1] == nums[i]) i += 1;
                i++;
                
                while (i < j && nums[j - 1] == nums[j]) j -= 1;
                j--;
            }
        }
        return res;
    }

    public IList<IList<int>> ThreeSum(int[] nums) {
        Array.Sort(nums);
        List<IList<int>> res = new List<IList<int>>();

        for (int i = 0; i < nums.Length - 2; i += 1) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            res.AddRange(TwoSum(nums, i + 1, -nums[i]));
        }
        return res;
    }
}