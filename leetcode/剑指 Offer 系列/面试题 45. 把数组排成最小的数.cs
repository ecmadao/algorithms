/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 *
 * 示例 1:
 * 输入: [10,2]
 * 输出: "102"
 *
 * 示例 2:
 * 输入: [3,30,34,5,9]
 * 输出: "3033459"
 *
 * 提示:
 * 0 < nums.length <= 100
 *
 * 说明:
 * 输出结果可能非常大，所以你需要返回一个字符串而不是整数
 * 拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0
 */
 
public class Solution {
    public string MinNumber(int[] nums) {
        Array.Sort(nums, (int n1, int n2) => {
            string s1 = $"{n1}";
            string s2 = $"{n2}";

            return string.Compare(s1 + s2, s2 + s1);
            // return (s1 + s2).Compare(s2 + s1);

            // string longStr = s1.Length >= s2.Length ? s1 : s2;
            // string shortStr = s1.Length >= s2.Length ? s2 : s1;

            int i = 0;
            int j = 0;

            while (i < s1.Length && j < s2.Length) {
                if (s1[i] < s2[j]) return -1;
                if (s1[i] > s2[j]) return 1;
                i += 1;
                j += 1;
                if (s1.Length >= s2.Length && i == s1.Length) break;
                if (s2.Length >= s1.Length && j == s2.Length) break;

                if (i == s1.Length) i = 0;
                if (j == s2.Length) j = 0;
            }
            return 0;
            // if (i == s1.Length && i == s2.Length) return 0;
            // if (i == s1.Length) return -1;
            // return 1;
        });

        return string.Join("", nums);
    }
}