/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * We are given hours, a list of the number of hours worked per day for a given employee.
 * A day is considered to be a tiring day if and only if the number of hours worked is (strictly) greater than 8.
 * A well-performing interval is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days.
 * Return the length of the longest well-performing interval.
 *
 * Example 1:
 * Input: hours = [9,9,6,0,6,6,9]
 * Output: 3
 * Explanation: The longest well-performing interval is [9,9,6].
 *
 * Constraints:
 * 1 <= hours.length <= 10000
 * 0 <= hours[i] <= 16
*/

public class Solution {
    public int LongestWPI(int[] hours) {
        int[] prefix = new int[hours.Length + 1];
        for (int i = 0; i < hours.Length; i += 1) {
            int num = hours[i] > 8 ? 1 : -1;
            prefix[i + 1] = prefix[i] + num;
        }

        int res = 0;
        for (int i = 1; i < prefix.Length; i += 1) {
            for (int j = 0; j < i - res; j += 1) {
                if (prefix[i] - prefix[j] > 0) {
                    res = Math.Max(res, i - j);
                    break;
                }
            }
        }
        return res;
    }
}