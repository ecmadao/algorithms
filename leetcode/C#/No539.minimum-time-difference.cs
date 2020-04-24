/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of 24-hour clock time points in "Hour:Minutes" format,
 * find the minimum minutes difference between any two time points in the list.
 *
 * Example 1:
 * Input: ["23:59","00:00"]
 * Output: 1
 *
 * Note:
 * The number of time points in the given list is at least 2 and won't exceed 20000.
 * The input time is legal and ranges from 00:00 to 23:59.
*/

public class Solution {
    private static int Search(List<int> times, int time) {
        int i = 0;
        int j = times.Count - 1;
        
        while (i <= j) {
            int mid = (i + j) / 2;
            if (times[mid] == time) return mid;
            if (times[mid] < time) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return i;
    }
    
    public int FindMinDifference(IList<string> timePoints) {
        int res = int.MaxValue;
        List<int> times = new List<int>();
        int baseTime = 24 * 60;

        foreach (string timePoint in timePoints) {
            string[] tmp = timePoint.Split(":");
            int time = Int32.Parse(tmp[0]) * 60 + Int32.Parse(tmp[1]);
    
            int i = Search(times, time);
            
            if (i > 0) res = new int[]{ res, time - times[i - 1], times[i - 1] + baseTime - time }.Min();
            if (i < times.Count) res = new int[]{ res, times[i] - time, time + baseTime - times[i] }.Min();
            if (i == times.Count && times.Count > 0) res = Math.Min(res, times[0] + baseTime - time);
            if (i == 0 && times.Count > 0) res = Math.Min(res, time + baseTime - times[times.Count - 1]);
            if (res == 0) return res;

            times.Insert(i, time);
        }
        return res;
    }
}
