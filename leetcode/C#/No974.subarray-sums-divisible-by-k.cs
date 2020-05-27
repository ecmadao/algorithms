/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.
 *
 * Example 1:
 * Input: A = [4,5,0,-2,-3,1], K = 5
 * Output: 7
 * Explanation: There are 7 subarrays with a sum divisible by K = 5:
 * [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 *
 * Note:
 * 1 <= A.length <= 30000
 * -10000 <= A[i] <= 10000
 * 2 <= K <= 10000
*/

public class Solution {
    public int SubarraysDivByK(int[] A, int K) {
        int sum = 0;
        int res = 0;
        Dictionary<int, int> dict = new Dictionary<int, int>();
        dict[0] = 1;
    
        foreach (int a in A) {
            sum += a;
            int modulus = (sum % K + K) % K;

            int count = 0;
            dict.TryGetValue(modulus, out count);
            res += count;
            dict[modulus] = count + 1;
        }
        return res;
    }
}
