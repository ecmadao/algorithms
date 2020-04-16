/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * Example 1:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 *
 * Example 2:
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/

public class Solution {
    public int[][] Merge(int[][] intervals) {
        Array.Sort(intervals, (int[] i1, int[] i2) => {
            if (i1[0] == i2[0]) return i1[1] - i2[1];
            return i1[0] - i2[0];
        });

        Stack<int[]> stack = new Stack<int[]>();
        foreach (int[] arr in intervals) {
            int[] tmp = arr;
            if (stack.Count != 0) {
                int[] peek = stack.Peek();
                if (peek[0] == tmp[0]) {
                    stack.Pop();
                } else if (peek[1] >= tmp[1]) {
                    continue;
                } else if (peek[1] >= tmp[0]) {
                    tmp[0] = peek[0];
                    stack.Pop();
                }
            }
            stack.Push(tmp);
        }

        return stack.ToArray();
    }
}