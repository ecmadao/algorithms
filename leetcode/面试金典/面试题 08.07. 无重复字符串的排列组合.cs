/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。
 *
 * 示例1:
 * 输入：S = "qwe"
 * 输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
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
            int k = s.Length - 1;

            while (k > i && s[k] < s[i]) k -= 1;

            char min = s[i];
            s[i] = s[k];
            s[k] = min;

            char[] tmp = s[j..];
            Array.Sort(tmp);

            s = s[..j].Concat(tmp).ToArray();
            res.Add(string.Join("", s));
        }
        return res.ToArray();
    }
}