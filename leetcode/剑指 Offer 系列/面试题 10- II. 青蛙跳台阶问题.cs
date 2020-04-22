/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 *
 * 示例 1：
 * 输入：n = 2
 * 输出：2
 *
 * 示例 2：
 * 输入：n = 7
 * 输出：21
 *
 * 提示：
 * 0 <= n <= 100
 * 注意：本题与主站 70 题相同：https://leetcode-cn.com/problems/climbing-stairs/
 */

public class Solution {
    public int NumWays(int n) {
        int n1 = 1;
        int n2 = 0;

        for (int i = 1; i <= n; i += 1) {
            int num = (n1 + n2) % 1000000007;
            n2 = n1;
            n1 = num;
        }
        return n1;
    }
}