/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a collection of distinct integers, return all possible permutations.
 *
 * Example:
 * Input: [1,2,3]
 * Output:
 * [
 *  [1,2,3],
 *  [1,3,2],
 *  [2,1,3],
 *  [2,3,1],
 *  [3,1,2],
 *  [3,2,1]
 * ]
*/


public class Solution {
    public IList<IList<int>> Permute(int[] nums) {
        IList<IList<int>> res = new List<IList<int>>();
        if (nums.Length == 1) {
            res.Add(new List<int>(nums));
            return res;
        }

        for (int i = 0; i < nums.Length; i += 1) {
            List<int> remain = new List<int>(nums[..i]);
            remain.AddRange(new List<int>(nums[(i + 1)..]));
            IList<IList<int>> tmp = Permute(
                remain.ToArray()
            );

            foreach (IList<int> list in tmp) {
                list.Add(nums[i]);
                res.Add(list);
            }
        }
        return res;
    }
}