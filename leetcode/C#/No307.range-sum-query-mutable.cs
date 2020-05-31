/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
 * The update(i, val) function modifies nums by updating the element at index i to val.
 *
 * Example:
 * Given nums = [1, 3, 5]
 * sumRange(0, 2) -> 9
 * update(1, 2)
 * sumRange(0, 2) -> 8
 *
 * Note:
 * The array is only modifiable by the update function.
 * You may assume the number of calls to update and sumRange function is distributed evenly.
*/

public class NumArray {
    int[] prefix;
    int[] arr;

    public NumArray(int[] nums) {
        arr = nums;
        prefix = new int[nums.Length + 1];
        prefix[0] = 0;
        for (int i = 0; i < nums.Length; i += 1) prefix[i + 1] = prefix[i] + nums[i];
    }
    
    public void Update(int i, int val) {
        int diff = val - arr[i];
        arr[i] = val;

        for (int j = i + 1; j < prefix.Length; j += 1) prefix[j] += diff;
    }
    
    public int SumRange(int i, int j) {
        return prefix[j + 1] - prefix[i];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * obj.Update(i,val);
 * int param_2 = obj.SumRange(i,j);
 */
