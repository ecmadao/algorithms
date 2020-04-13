/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Let's call an array A a mountain if the following properties hold:
 * 1. A.length >= 3
 * There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
 * Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].
 *
 * Example 1:
 * Input: [0,1,0]
 * Output: 1
 *
 * Example 2:
 * Input: [0,2,1,0]
 * Output: 1
 *
 * Note:
 * 3 <= A.length <= 10000
 * 0 <= A[i] <= 10^6
 * A is a mountain, as defined above.
*/

public class Solution {
    public int PeakIndexInMountainArray(int[] A) {
        int i = 0;
        int j = A.Length - 1;
        while (i <= j) {
            int mid = (i + j) >> 1;
            if (A[mid - 1] < A[mid] && A[mid] > A[mid + 1]) return mid;
            if (A[mid - 1] < A[mid] && A[mid] < A[mid + 1]) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return i;
    }
}