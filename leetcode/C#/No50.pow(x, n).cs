/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement pow(x, n), which calculates x raised to the power n (xn).
 *
 * Example 1:
 * Input: 2.00000, 10
 * Output: 1024.00000
 *
 * Example 2:
 * Input: 2.10000, 3
 * Output: 9.26100
 *
 * Example 3:
 * Input: 2.00000, -2
 * Output: 0.25000
 * Explanation: 2-2 = 1/22 = 1/4 = 0.25
 *
 * Note:
 * -100.0 < x < 100.0
 * n is a 32-bit signed integer, within the range [−2^31, 2^31 − 1]
*/

public class Solution {
    public double MyPow(double x, int n) {

        double Pow(double num, int count) {
            if (count == 0) return 1;
            bool isEven = count % 2 == 0;

            return isEven
                ? Pow(num * num, count / 2)
                : num * Pow(num * num, (count < 0 ? (count + 1) : (count - 1)) / 2);
        }

        double res = Pow(x, n);
        return n < 0 ? 1 / res : res;
    }
}