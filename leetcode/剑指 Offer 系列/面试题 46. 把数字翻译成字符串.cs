/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 * 一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 *
 * 示例 1:
 * 输入: 12258
 * 输出: 5
 * 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
 *
 * 提示：
 * 0 <= num < 2^31
 */

public class Solution {
    public int TranslateNum(int num) {
        int res = 0;

        void dfs (int n, int i) {
            if (i <= 0) {
                res += 1;
                return;
            }

            dfs(n / 10, i - 1);
            if (n % 100 <= 25 && n % 100 > 0 && n % 100 != n % 10) dfs(n / 100, i - 2);
        }

        dfs(num, $"{num}".Length - 1);
        return res;
    }
}