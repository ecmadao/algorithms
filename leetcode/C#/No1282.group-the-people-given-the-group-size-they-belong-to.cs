/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group.
 * Given the array groupSizes of length n telling the group size each person belongs to, return the groups there are and the people's IDs each group includes.
 * You can return any solution in any order and the same applies for IDs.
 * Also, it is guaranteed that there exists at least one solution. 
 *
 * Example 1:
 * Input: groupSizes = [3,3,3,3,3,1,3]
 * Output: [[5],[0,1,2],[3,4,6]]
 * Explanation: 
 * Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].
 *
 * Example 2:
 * Input: groupSizes = [2,1,3,3,3,2]
 * Output: [[1],[0,5],[2,3,4]]
 *
 * Constraints:
 * groupSizes.length == n
 * 1 <= n <= 500
 * 1 <= groupSizes[i] <= n
*/


public class Solution {
    public IList<IList<int>> GroupThePeople(int[] groupSizes) {
        Dictionary<int, List<int>> dict = new Dictionary<int, List<int>>();
        List<IList<int>> res = new List<IList<int>>();

        for (int i = 0; i < groupSizes.Length; i += 1) {
            int size = groupSizes[i];
            if (!dict.ContainsKey(size)) dict[size] = new List<int>();
            dict[size].Add(i);
            if (dict[size].Count == size) {
                res.Add(dict[size]);
                dict.Remove(size);
            }
        }

        return res;
    }
}