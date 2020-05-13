/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two integers A and B, return any string S such that:
 * S has length A + B and contains exactly A 'a' letters, and exactly B 'b' letters;
 * The substring 'aaa' does not occur in S;
 * The substring 'bbb' does not occur in S.
 *
 * Example 1:
 * Input: A = 1, B = 2
 * Output: "abb"
 * Explanation: "abb", "bab" and "bba" are all correct answers.
 *
 * Example 2:
 * Input: A = 4, B = 1
 * Output: "aabaa"
 *
 * Note:
 * 0 <= A <= 100
 * 0 <= B <= 100
 * It is guaranteed such an S exists for the given A and B.
*/

public class Solution {
    public string StrWithout3a3b(int A, int B) {
        StringBuilder sb = new StringBuilder();

        while (A > 0 && B > 0) {
            if (A == B) {
                if (sb.Length == 0 || sb[^1] == 'b') {
                    sb.Append('a');
                    A -= 1;
                } else {
                    sb.Append('b');
                    B -= 1;
                }
            } else if (A > B) {
                sb.Append("aa");
                sb.Append('b');
                A -= 2;
                B -= 1;
            } else {
                sb.Append("bb");
                sb.Append('a');
                A -= 1;
                B -= 2;
            }
        }

        if (A > 0) sb.Append(string.Join("", Enumerable.Range(0, A).Select(i => 'a').ToArray()));
        if (B > 0) sb.Append(string.Join("", Enumerable.Range(0, B).Select(i => 'b').ToArray()));

        return sb.ToString();
    }
}