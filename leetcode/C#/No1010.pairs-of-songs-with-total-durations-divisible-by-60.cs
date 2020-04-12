/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * In a list of songs, the i-th song has a duration of time[i] seconds. 
 * Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i < j with (time[i] + time[j]) % 60 == 0.
 * 
 * Example 1:
 * Input: [30,20,150,100,40]
 * Output: 3
 * Explanation: Three pairs have a total duration divisible by 60:
 * (time[0] = 30, time[2] = 150): total duration 180
 * (time[1] = 20, time[3] = 100): total duration 120
 * (time[1] = 20, time[4] = 40): total duration 60
 *
 * Example 2:
 * Input: [60,60,60]
 * Output: 3
 * Explanation: All three pairs have a total duration of 120, which is divisible by 60.
 *
 * Note:
 * 1 <= time.length <= 60000
 * 1 <= time[i] <= 500
*/

using System;

public class Solution1 {
    public int NumPairsDivisibleBy60(int[] time) {
        int res = 0;
        int preCount = 0;
        Array.Sort(time);
        for (int i = 0; i < time.Length - 1; i += 1) {
            if (i > 0 && time[i] == time[i - 1]) {
                if (preCount > 0) {
                    preCount = (time[i] + time[i - 1]) % 60 == 0 ? preCount - 1 : preCount;
                    res += preCount;
                }
                continue;
            }
            int count = 0;
            for (int j = i + 1; j < time.Length; j += 1) {
                if ((time[i] + time[j]) % 60 == 0) count += 1;
            }
            preCount = count;
            res += preCount;
        }
        return res;
    }
}

public class Solution1 {
    public int NumPairsDivisibleBy60(int[] time) {
      int[] bucket = new int[60];
      int res = 0;
  
      foreach (int t in time) {
        int num = t % 60;
        int remain = num == 0 ? 0 : 60 - num;
        res += bucket[remain];
        bucket[num] += 1;
      }

      return res;
    }
}