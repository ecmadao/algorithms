/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of intervals, remove all intervals that are covered by another interval in the list.
 * Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.
 * After doing so, return the number of remaining intervals.
 *
 * Example 1:
 * Input: intervals = [[1,4],[3,6],[2,8]]
 * Output: 2
 * Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
 *
 * Constraints:
 * 1 <= intervals.length <= 1000
 * 0 <= intervals[i][0] < intervals[i][1] <= 10^5
 * intervals[i] != intervals[j] for all i != j
*/


public class Solution {
    public int RemoveCoveredIntervals(int[][] intervals) {
        Array.Sort(intervals, (int[] i1, int[] i2) => {
            if (i1[0] == i2[0]) return i1[1] - i2[1];
            return i1[0] - i2[0];
        });
        
        Stack<int[]> stack = new Stack<int[]>();
        foreach (int[] interval in intervals) {
            while (stack.Count > 0 && stack.Peek()[0] == interval[0]) stack.Pop();
            if (stack.Count > 0 && stack.Peek()[1] >= interval[1]) continue;
            stack.Push(interval);
        }
        return stack.Count;
    }
}
