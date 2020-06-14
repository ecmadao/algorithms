/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array arr and a target value target,
 * return the integer value such that when we change all the integers larger than value in the given array to be equal to value,
 * the sum of the array gets as close as possible (in absolute difference) to target.
 * In case of a tie, return the minimum such integer.
 * Notice that the answer is not neccesarilly a number from arr.
 *
 * Example 1:
 * Input: arr = [4,9,3], target = 10
 * Output: 3
 * Explanation: When using 3 arr converts to [3, 3, 3] which sums 9 and that's the optimal answer.
 *
 * Example 2:
 * Input: arr = [2,3,5], target = 10
 * Output: 5
 *
 * Example 3:
 * Input: arr = [60864,25176,27249,21296,20204], target = 56803
 * Output: 11361
 *
 * Constraints:
 * 1 <= arr.length <= 10^4
 * 1 <= arr[i], target <= 10^5
*/

public class Solution {
    private int Search(int[] arr, int start, int target) {
        int i = start;
        int j = arr.Length - 1;

        while (i <= j) {
            int mid = (i + j) / 2;
            if (arr[mid] <= target) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return i;
    }

    private int[] Find(int[] arr, int start, int target, int avg, int[] sumPrefix) {
        int index = Search(arr, start, avg);
        if (index == start) return new int[]{ avg, avg * (arr.Length - start) };

        int sum = sumPrefix[index] - sumPrefix[start];
        int value = FindValue(arr, index, target - sum, sumPrefix);

        return new int[]{ value, sum + value * (arr.Length - start) };
    }

    private int FindValue(int[] arr, int start, int target, int[] sumPrefix) {
        int count = arr.Length - start;
        if (count == 1) return Math.Min(arr[start], target);

        int[] res1 = Find(arr, start, target, target / count, sumPrefix);
        if (target % count == 0) return res1[0];

        int[] res2 = Find(arr, start, target, (target / count) + 1, sumPrefix);

        if (Math.Abs(target - res1[1]) <= Math.Abs(target - res2[1])) return res1[0];
        return res2[0];
    }

    public int FindBestValue(int[] arr, int target) {
        Array.Sort(arr);
        int[] sumPrefix = new int[arr.Length + 1];
        for (int i = 0; i < arr.Length; i += 1) sumPrefix[i + 1] = sumPrefix[i] + arr[i];

        return FindValue(arr, 0, target, sumPrefix);
    }
}