/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an integer, return its base 7 string representation.
 *
 * Example 1:
 * Input: 100
 * Output: "202"
 *
 * Example 2:
 * Input: -7
 * Output: "-10"
 *
 * Note: The input will be in range of [-1e7, 1e7].
*/

public class Solution {
    public string ConvertToBase7(int num) {
        if (num == 0) return "0";

        string res = "";
        int n = Math.Abs(num);

        while (n > 0) {
            res = (n % 7).ToString() + res;
            n /= 7;
        }
        if (num < 0) res = "-" + res;
        return res;
    }
}

// 2 * 7^2 + 0 * 7^1 + 2 * 7^0 = 100
