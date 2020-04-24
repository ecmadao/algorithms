/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
 *
 * 示例 1:
 * 输入: [7,5,6,4]
 * 输出: 5
 */

public class Solution {
    private static int MergeSort(int[] nums, int left, int right) {
        if (right <= left) return 0;

        int mid = (left + right) / 2;
        int i = left;
        int j = mid + 1;
        int count = MergeSort(nums, left, mid) + MergeSort(nums, mid + 1, right);
        int[] res = new int[right - left + 1];
        int pos = 0;

        while (i <= mid && j <= right) {
            if (nums[i] <= nums[j]) {
                count += (j - mid - 1);
                res[pos] = nums[i];
                i += 1;
            } else {
                res[pos] = nums[j];
                j += 1;
            }
            pos += 1;
        }

        while (i <= mid) {
            res[pos] = nums[i];
            count += (j - mid - 1);
            i += 1;
            pos += 1;
        }
        while (j <= right) {
            res[pos] = nums[j];
            j += 1;
            pos += 1;
        }

        for (int k = left; k <= right; k += 1) nums[k] = res[k - left];
        return count;
    }

    public int ReversePairs(int[] nums) {
        return MergeSort(nums, 0, nums.Length - 1);
    }
}