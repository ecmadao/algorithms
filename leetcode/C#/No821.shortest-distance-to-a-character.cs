/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
 *
 * Example 1:
 * Input: S = "loveleetcode", C = 'e'
 * Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 *
 * Note:
 * S string length is in [1, 10000].
 * C is a single character, and guaranteed to be in string S.
 * All letters in S and C are lowercase.
*/

public class Solution {
    public int[] ShortestToChar(string S, char C) {
        int[] res = new int[S.Length];
        int? dis = null;

        int i = 0;
        while (i < S.Length) {
            int j = i;
            while (i < S.Length && S[i] != C) i += 1;
            if (i == S.Length) i = int.MaxValue - 1;

            while (j <= Math.Min(i, S.Length - 1)) {
                if (dis == null) {
                    res[j] = Math.Abs(i- j);
                } else {
                    res[j] = Math.Min(
                        i - j,
                        j - (int)dis
                    );
                }
                j += 1;
            }
            dis = i;
            i += 1;
        }
        return res;
    }
}