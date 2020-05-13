/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * URL化。编写一种方法，将字符串中的空格全部替换为%20。
 * 假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。
 * （注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）
 *
 * 示例1:
 * 输入："Mr John Smith    ", 13
 * 输出："Mr%20John%20Smith"
 *
 * 示例2:
 * 输入："               ", 5
 * 输出："%20%20%20%20%20"
 *
 * 提示：
 * 字符串长度在[0, 500000]范围内。
 */

public class Solution {
    public string ReplaceSpaces(string S, int length) {
        int i = 0;
        StringBuilder sb = new StringBuilder();
        while (i < S.Length && length > 0) {
            if (S[i] == ' ') {
                sb.Append("%20");
            } else {
                sb.Append(S[i]);
            }
            length -= 1;
            i += 1;
        }
        while (length > 0) {
            sb.Append("%20");
            length -= 1;
        }
        return sb.ToString();
    }
}