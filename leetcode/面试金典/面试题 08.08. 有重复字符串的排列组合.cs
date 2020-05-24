/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。
 *
 * 示例1:
 * 输入：S = "qqe"
 * 输出：["eqq","qeq","qqe"]
 *
 * 示例2:
 * 输入：S = "ab"
 * 输出：["ab", "ba"]
 *
 * 提示:
 * 字符都是英文字母。
 * 字符串长度在[1, 9]之间。
 */

public class Solution {
    public string[] Permutation(string S) {
        char[] s = S.ToCharArray();
        Array.Sort(s);

        List<string> res = new List<string>();
        res.Add(string.Join("", s));

        while (true) {
            int j = s.Length - 1;
            while (j > 0 && s[j - 1] >= s[j]) j -= 1;
            if (j == 0) break;

            int i = j - 1;

            int target = -1;
            for (int k = s.Length - 1; k > i; k -= 1) {
                if (s[k] > s[i]) {
                    if (target == -1 || s[k] <= s[target]) {
                        target = k;
                    }
                }
            }

            char minimum = s[target];
            s[target] = s[i];
            s[i] = minimum;

            char[] tmp = s[j..];
            Array.Sort(tmp);

            s = s[..j].Concat(tmp).ToArray();
            res.Add(string.Join("", s));
        }
        return res.ToArray();
    }
}
