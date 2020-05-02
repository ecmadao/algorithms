/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
 * Note that elements beyond the length of the original array are not written.
 * Do the above modifications to the input array in place, do not return anything from your function.
 *
 * Example 1:
 * Input: [1,0,2,3,0,4,5,0]
 * Output: null
 * Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
 *
 * Example 2:
 * Input: [1,2,3]
 * Output: null
 * Explanation: After calling your function, the input array is modified to: [1,2,3]
 *
 * Note:
 * 1 <= arr.length <= 10000
 * 0 <= arr[i] <= 9
*/

public class Solution {
    public void DuplicateZeros(int[] arr) {
        int count = 0;
        int i = 0;
        while (i < arr.Length) {
            count += 1;
            if (arr[i] == 0) count += 1;
            if (count >= arr.Length) break;
            i += 1;
        }

        int j = arr.Length - 1;
        while (j >= 0) {
            if (arr[i] != 0) {
                arr[j] = arr[i];
            } else {
                arr[j] = 0;
                if (count == arr.Length || j < arr.Length - 1) arr[--j] = 0;
            }
            j -= 1;
            i -= 1;
        }
    }
}