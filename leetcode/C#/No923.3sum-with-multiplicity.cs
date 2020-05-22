/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array A, and an integer target,
 * return the number of tuples i, j, k  such that i < j < k and A[i] + A[j] + A[k] == target.
 * As the answer can be very large, return it modulo 10^9 + 7.
 *
 * Example 1:
 * Input: A = [1,1,2,2,3,3,4,4,5,5], target = 8
 * Output: 20
 * Explanation: 
 * Enumerating by the values (A[i], A[j], A[k]):
 * (1, 2, 5) occurs 8 times;
 * (1, 3, 4) occurs 8 times;
 * (2, 2, 4) occurs 2 times;
 * (2, 3, 3) occurs 2 times.
 *
 * Example 2:
 * Input: A = [1,1,2,2,2,2], target = 5
 * Output: 12
 * Explanation: 
 * A[i] = 1, A[j] = A[k] = 2 occurs 12 times:
 * We choose one 1 from [1,1] in 2 ways, and two 2s from [2,2,2,2] in 6 ways.
 *
 * Note:
 * 3 <= A.length <= 3000
 * 0 <= A[i] <= 100
 * 0 <= target <= 300
*/

public class Solution {
    public int MOD = 1000000007;

    private int TwoSumMulti(int[] A, int start, int target) {
        int i = start;
        int j = A.Length - 1;
        int res = 0;
        if (A[i] > target) return res;
        if (A[i] == target && A[i + 1] != 0) return res;
        
        while (i < j) {
            if (A[i] + A[j] == target) {
                if (A[i] == A[j]) {
                    int count = j - i;
                    res = (res + ((count + 1) * count / 2) % MOD) % MOD;
                    break;
                }

                int k = j - 1;
                while (k > i && A[k] == A[j]) k -= 1;
                int m = i + 1;
                while (m < j && A[m] == A[i]) m += 1;
                res = (res + (j - k) * (m - i) % MOD) % MOD;

                j = k;
                i = m;
            } else if (A[i] + A[j] > target) {
                j -= 1;
            } else {
                i += 1;
            }
        }
        return res;
    }

    public int ThreeSumMulti(int[] A, int target) {
        Array.Sort(A);
        int res = 0;

        for (int i = 0; i < A.Length - 2; i += 1) {
            if (A[i] > target) break;
            if (A[i] == target && A[i + 1] + A[i + 2] != 0) break;
            res = (res + TwoSumMulti(A, i + 1, target - A[i]) % MOD) % MOD;
        }
        return res;
    }
}
