/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * There is a room with n bulbs, numbered from 1 to n, arranged in a row from left to right. Initially, all the bulbs are turned off.
 * At moment k (for k from 0 to n - 1), we turn on the light[k] bulb. A bulb change color to blue only if it is on and all the previous bulbs (to the left) are turned on too.
 * Return the number of moments in which all turned on bulbs are blue.
 *
 * Example 1:
 * Input: light = [2,1,3,5,4]
 * Output: 3
 * Explanation: All bulbs turned on, are blue at the moment 1, 2 and 4.
 *
 * Example 2:
 * Input: light = [3,2,4,1,5]
 * Output: 2
 * Explanation: All bulbs turned on, are blue at the moment 3, and 4 (index-0).
 *
 * Example 3:
 * Input: light = [4,1,2,3]
 * Output: 1
 * Explanation: All bulbs turned on, are blue at the moment 3 (index-0). Bulb 4th changes to blue at the moment 3.
 *
 * Example 4:
 * Input: light = [2,1,4,3,6,5]
 * Output: 3
 *
 * Example 5:
 * Input: light = [1,2,3,4,5,6]
 * Output: 6
 *
 * Constraints:
 * n == light.length
 * 1 <= n <= 5 * 10^4
 * light is a permutation of  [1, 2, ..., n]
*/

public class Solution {
    private int Search(List<int[]> range, int num) {
        int i = 0;
        int j = range.Count - 1;
        while (i <= j) {
            int mid = (i + j) / 2;
            if (range[mid][0] < num) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return i;
    }

    public int NumTimesAllBlue(int[] light) {
        int res = 0;
        List<int[]> range = new List<int[]>();


        foreach (int num in light) {
            int index = Search(range, num);
            int[] section = new int[2]{ num, num };

            if (index > 0) {
                int[] left = range[index - 1];
                if (left[1] + 1 == num) {
                    section[0] = left[0];
                    range.RemoveAt(--index);
                }
            }
            if (index < range.Count) {
                int[] right = range[index];
                if (right[0] - 1 == num) {
                    section[1] = right[1];
                    range.RemoveAt(index);
                }
            }
            range.Insert(index, section);
            if (section[0] == 1 && range.Count == 1) res += 1;
        }
        return res;
    }
}