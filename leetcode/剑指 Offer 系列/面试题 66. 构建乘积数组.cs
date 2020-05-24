/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B 中的元素 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。
 *
 * 示例:
 * 输入: [1,2,3,4,5]
 * 输出: [120,60,40,30,24]
 *
 * 提示：
 * 所有元素乘积之和不会溢出 32 位整数
 * a.length <= 100000
 */

public class Solution {
    public int[] ConstructArr(int[] a) {
        int[] prefix = new int[a.Length + 1];
        prefix[0] = 1;
        
        for (int i = 0; i < a.Length; i += 1) {
            prefix[i + 1] = prefix[i] * a[i];
        }
        
        int product = 1;
        int[] res = new int[a.Length];
        for (int i = a.Length - 1; i >= 0; i -= 1) {
            res[i] = prefix[i] * product;
            product *= a[i];
        }
        return res;
    }
}