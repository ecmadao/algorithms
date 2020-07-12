/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。
 * 你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
 * 返回的长度需要从小到大排列。
 *
 * 示例：
 * 输入：
 * shorter = 1
 * longer = 2
 * k = 3
 * 输出： {3,4,5,6}
 *
 * 提示：
 * 0 < shorter <= longer
 * 0 <= k <= 100000
 */

public class Solution {
    public int[] DivingBoard(int shorter, int longer, int k) {
        if (k == 0) {
            return new int[0];
        }
        if (longer == shorter) {
            return new int[1]{ shorter * k };
        }

        List<int> res = new List<int>();
        for (int i = 0; i <= k; i += 1) {
            res.Add(shorter * i + longer * (k - i));
        }

        res.Sort();
        return res.ToArray();
    }
}
