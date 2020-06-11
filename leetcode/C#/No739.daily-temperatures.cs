/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of daily temperatures T, return a list such that, for each day in the input,
 * tells you how many days you would have to wait until a warmer temperature.
 * If there is no future day for which this is possible, put 0 instead.
 *
 * For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 *
 * Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/


public class Solution {
    public int[] DailyTemperatures(int[] T) {
        Stack<int[]> stack = new Stack<int[]>();
        int[] res = new int[T.Length];

        for (int i = T.Length - 1; i >= 0; i -= 1) {
            while (stack.Count > 0 && T[i] >= stack.Peek()[0]) stack.Pop();

            if (stack.Count > 0) {
                res[i] = stack.Peek()[1] - i;
            } else {
                res[i] = 0;
            }
            stack.Push(new int[]{ T[i], i });
        }
        return res;
    }
}