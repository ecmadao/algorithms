/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 假设你有两个数组，一个长一个短，短的元素均不相同。找到长数组中包含短数组所有的元素的最短子数组，其出现顺序无关紧要。
 * 返回最短子数组的左端点和右端点，如有多个满足条件的子数组，返回左端点最小的一个。若不存在，返回空数组。
 *
 * 示例 1:
 * 输入:
 * big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7]
 * small = [1,5,9]
 * 输出: [7,10]
 *
 * 示例 2:
 * 输入:
 * big = [1,2,3]
 * small = [4]
 * 输出: []
 *
 * 提示：
 * big.length <= 100000
 * 1 <= small.length <= 100000
 */

public class Solution {
    public int[] ShortestSeq(int[] big, int[] small) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        Dictionary<int, int> cache = new Dictionary<int, int>();
        foreach (int num in small) {
            int c = 0;
            dict.TryGetValue(num, out c);
            dict[num] = c + 1;
            cache[num] = 0;
        }

        int missing = small.Length;
        int i = 0;
        int j = 0;
        int left = -1;
        int right = -1;

        while (i <= big.Length && j < big.Length) {
            if (missing == 0) {
                if (left == -1 || right - left + 1 > i - j) {
                    left = j;
                    right = i - 1;
                }
                if (dict.ContainsKey(big[j])) {
                    cache[big[j]] -= 1;
                    if (cache[big[j]] < dict[big[j]]) missing += 1;
                }
                j += 1;
            } else {
                if (i == big.Length) break;
                if (dict.ContainsKey(big[i])) {
                    cache[big[i]] += 1;
                    if (cache[big[i]] <= dict[big[i]]) missing -= 1;
                }
                i += 1;
            }
        }
        return left == -1 ? new int[0] : new int[]{ left, right };
    }
}