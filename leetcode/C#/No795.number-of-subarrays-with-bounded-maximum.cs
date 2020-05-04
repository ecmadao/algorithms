/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * We are given an array A of positive integers, and two positive integers L and R (L <= R).
 * Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least L and at most R.
 *
 * Example:
 * Input: 
 * A = [2, 1, 4, 3]
 * L = 2
 * R = 3
 * Output: 3
 * Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].
 *
 * Note:
 * L, R and A[i] will be an integer in the range [0, 10^9].
 * The length of A will be in the range of [1, 50000].
*/

public class Solution {
    public int NumSubarrayBoundedMax(int[] A, int L, int R) {
        int j = 0;

        int max = int.MinValue;
        List<int> indexes = new List<int>();
        int res = 0;

        while (j < A.Length) {
            if (A[j] >= L && A[j] <= R) {
                // find left, find right
                int i = j;
                while (i - 1 >= 0 && A[i - 1] <= A[j]) i -= 1;
                int k = j;
                while (k + 1 < A.Length && A[k + 1] < A[j]) k += 1;

                res += (j - i + 1) * (k - j + 1);
            }
            j += 1;
        }
        return res;
    }
}
