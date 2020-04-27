/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * In an array A of 0s and 1s, how many non-empty subarrays have sum S?
 *
 * Example 1:
 * Input: A = [1,0,1,0,1], S = 2
 * Output: 4
 * Explanation: 
 * The 4 subarrays are bolded below:
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 *
 * Note:
 * A.length <= 30000
 * 0 <= S <= A.length
 * A[i] is either 0 or 1.
*/

public class Solution {
    public int NumSubarraysWithSum(int[] A, int S) {
        if (A.Length == 0) return 0;
        int i = 0;
        int j = 1;
        int sum = A[0];
        int res = 0;

        while (j < A.Length) {
            if (sum > S) {
                sum -= A[i];
                i += 1;
            } else if (sum < S) {
                sum += A[j];
                j += 1;
            } else {
                int k = i;                
                while (sum == S && i < j) {
                    res += 1;
                    sum -= A[i];
                    i += 1;
                }
                
                i = k;
                sum = S + A[j];              
                j += 1;                
            }
        }
        
        while (i < A.Length && sum >= S) {
            if (sum == S) res += 1;
            sum -= A[i];
            i += 1;
        }
        return res;
    }
}