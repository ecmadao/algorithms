/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 *
 * 示例:
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 *
 * 限制：
 * 1 <= s 的长度 <= 8
 */

public class Solution {
    public string[] Permutation(string s) {
        char[] arr = s.ToCharArray();
        Array.Sort(arr);

        List<string> res = new List<string>();
        res.Add(string.Join("", arr));

        while (true) {
            int j = arr.Length - 1;
            while (j > 0 && arr[j] <= arr[j - 1]) j -= 1;
            if (j == 0) break;

            int i = j - 1;
            int k = arr.Length - 1;
            while (k > i && arr[k] <= arr[i]) k -= 1;

            char tmp = arr[i];
            arr[i] = arr[k];
            arr[k] = tmp;

            List<char> list = new List<char>(arr[0..(i + 1)]);
            char[] sorted = arr[(i + 1)..];
            Array.Sort(sorted);
            list.AddRange(sorted);

            arr = list.ToArray();
            res.Add(string.Join("", arr));
        }

        return res.ToArray();
    }
}