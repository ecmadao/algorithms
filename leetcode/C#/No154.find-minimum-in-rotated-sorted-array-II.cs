/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 * Find the minimum element.
 * The array may contain duplicates.
 *
 * Example 1:
 * Input: [1,3,5]
 * Output: 1
 *
 * Example 2:
 * Input: [2,2,2,0,1]
 * Output: 0
 *
 * Note:
 * This is a follow up problem to Find Minimum in Rotated Sorted Array.
 * Would allow duplicates affect the run-time complexity? How and why?
*/

public class Solution {
    public int FindMin(int[] numbers) {
        int i = 0;
        int j = numbers.Length - 1;

        while (i <= j) {
            int mid = (i + j) / 2;
            if (numbers[mid] < numbers[j]) {
                j = mid;
            } else if (numbers[mid] > numbers[j]) {
                i = mid + 1;
            } else {
                j -= 1;
            }
        }
        return numbers[i];
    }
}
