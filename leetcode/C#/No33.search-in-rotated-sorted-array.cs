/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * Example 1:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 * Example 2:
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
*/


public class Solution {
    public int Search(int[] nums, int target) {
        int i = 0;
        int j = nums.Length - 1;

        while (i <= j) {
            int mid = (i + j) / 2;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) {
                if (nums[mid] > nums[j] || (nums[mid] < nums[j] && nums[j] >= target)) {
                    i = mid + 1;
                } else {
                    j = mid - 1;
                }
            } else {
                if (nums[mid] < nums[i] || (nums[mid] > nums[i] && nums[i] <= target)) {
                    j = mid - 1;
                }
                else {
                    i = mid + 1;
                }
            }
        }
        return -1;
    }
}