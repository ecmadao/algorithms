/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given scores of N athletes, find their relative ranks and the people with the top three highest scores,
 * who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
 * 
 * Example 1:
 * Input: [5, 4, 3, 2, 1]
 * Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 * Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
 * For the left two athletes, you just need to output their relative ranks according to their scores.
 *
 * Note:
 * N is a positive integer and won't exceed 10,000.
 * All the scores of athletes are guaranteed to be unique.
*/

using System;
public class Solution {
    public string[] FindRelativeRanks(int[] nums) {
        string[] modals = new string[] { "Gold Medal", "Silver Medal", "Bronze Medal"};

        int max = 0;
        foreach (int num in nums) if (max < num) max = num;
        int[] ranks = new int[max + 1];
        for (int i = 0; i < nums.Length; i += 1) {
            ranks[nums[i]] = i + 1;
        }
        int rank = 1;
        string[] res = new string[nums.Length];
        for (int i = ranks.Length - 1; i >= 0; i -= 1) {
            if (ranks[i] > 0) {
                if (rank <= 3) {
                    res[ranks[i] - 1] = modals[rank - 1];
                } else {
                    res[ranks[i] - 1] = $"{rank}";
                }
                rank += 1;
            }
        }

        return res;
    }
}
