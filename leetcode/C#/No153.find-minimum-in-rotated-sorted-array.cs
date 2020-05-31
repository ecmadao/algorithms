/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 * Find the minimum element.
 * You may assume no duplicate exists in the array.
 *
 * Example 1:
 * Input: [3,4,5,1,2] 
 * Output: 1
 *
 * Example 2:
 * Input: [4,5,6,7,0,1,2]
 * Output: 0
*/

public class Solution {
    public int FindMin(int[] numbers) {
        int i = 0;
        int j = numbers.Length - 1;

        while (i < j) {
            int mid = (i + j) / 2;
            if (numbers[mid] < numbers[j]) {
                j = mid;
            } else {
                i = mid + 1;
            }
        }
        return numbers[i];
    }
}
