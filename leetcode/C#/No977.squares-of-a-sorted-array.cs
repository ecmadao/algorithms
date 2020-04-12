/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers A sorted in non-decreasing order,
 * return an array of the squares of each number, also in sorted non-decreasing order.
 *
 * Example 1:
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 *
 * Example 2:
 * Input: [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 *
 * Note:
 * 1 <= A.length <= 10000
 * -10000 <= A[i] <= 10000
 * A is sorted in non-decreasing order.
*/

using System;

public class Solution {
    public int[] SortedSquares(int[] A) {
        int i = 0;
        int j = A.Length - 1;
        int k = A.Length - 1;
        int[] res = new int[A.Length];

        while (i <= j) {
            if (Math.Pow(A[j], 2) >= Math.Pow(A[i], 2)) {
              res[k] = A[j] * A[j];
              j -= 1;
            } else {
              res[k] = A[i] * A[i];
              i += 1;
            }
            k -= 1;
        }

        return res;
    }
}