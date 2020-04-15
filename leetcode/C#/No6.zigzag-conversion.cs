/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 * string convert(string s, int numRows);
 *
 * Example 1:
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 * Example 2:
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 *
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
*/

public class Solution {
    public string Convert(string s, int numRows) {
        if (numRows == s.Length || numRows == 1) return s;

        List<List<char>> arr = new List<List<char>>(numRows);
        Func<int, int>[] funcs = new Func<int, int>[] {
            (int i) => i + 1,
            (int i) => i - 1
        };

        int i = 0;
        int r = 0;
        while (i < s.Length) {
            if (r >= arr.Count) arr.Add(new List<char>());
            arr[r].Add(s[i]);

            int funcIndex = (i /(numRows - 1)) % 2;
            r = funcs[funcIndex](r);
            i += 1;
        }

        return arr.Aggregate("", (str, list) => str + new string(list.ToArray()));
    }
}