/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)".  Then, we removed all commas, decimal points, and spaces, and ended up with the string S.  Return a list of strings representing all possibilities for what our original coordinates could have been.
 * Our original representation never had extraneous zeroes, so we never started with numbers like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with less digits.  Also, a decimal point within a number never occurs without at least one digit occuring before it, so we never started with numbers like ".1".
 * The final answer list can be returned in any order.  Also note that all coordinates in the final answer have exactly one space between them (occurring after the comma.)
 *
 * Example 1:
 * Input: "(123)"
 * Output: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
 *
 * Example 2:
 * Input: "(00011)"
 * Output:  ["(0.001, 1)", "(0, 0.011)"]
 * Explanation: 
 * 0.0, 00, 0001 or 00.01 are not allowed.
 *
 * Example 3:
 * Input: "(0123)"
 * Output: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
 *
 * Example 4:
 * Input: "(100)"
 * Output: [(10, 0)]
 * Explanation: 
 * 1.0 is not allowed.
 *
 * Note:
 * 4 <= S.length <= 12.
 * S[0] = "(", S[S.length - 1] = ")", and the other elements in S are digits.
*/

public class Solution {
    private List<string> BuildCoordinate(char[] letters) {
        List<string> res = new List<string>();

        if (letters[0] != '0' || letters.Length == 1) {
            string baseStr = string.Join("", letters);
            res.Add(baseStr);
        }
        if (letters[^1] == '0') return res;

        for (int i = 1; i < letters.Length; i += 1) {
            if (int.Parse(string.Join("", letters[i..])) == 0) break;
            string formatted = string.Join("", letters[0..i]) + "." + string.Join("", letters[i..]);
            if (float.Parse(formatted) != float.Parse(string.Join("", letters))) {
                res.Add(formatted);
            }
            if (letters[0] == '0') break;
        }
        return res;
    }

    public IList<string> AmbiguousCoordinates(string S) {
        char[] letters = S.ToCharArray()[1..^1];

        List<string> res = new List<string>();

        for (int i = 0; i < letters.Length - 1; i += 1) {
            List<string> c1 = BuildCoordinate(letters[0..(i + 1)]);
            if (c1.Count == 0) continue;

            List<string> c2 = BuildCoordinate(letters[(i + 1)..]);
            if (c2.Count == 0) continue;

            foreach (string str1 in c1) {
                foreach (string str2 in c2) {
                    res.Add($"({str1}, {str2})");
                }
            }
        }

        return res;
    }
}