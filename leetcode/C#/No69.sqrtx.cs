/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Implement int sqrt(int x).
 * Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
 * Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
 *
 * Example 1:
 * Input: 4
 * Output: 2
 *
 * Example 2:
 * Input: 8
 * Output: 2
 * Explanation:
 * The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/

public class Solution {
    public int MySqrt(int x) {
        int i = 0;
        int j = x;

        while (i <= j) {
            int mid = (i + j) / 2;
            if (mid == 0) {
                if (mid == x) return mid;
                if (mid < x) i += 1;
                if (mid > x) j -= 1;
                continue;
            }
            if (mid == x / mid) return mid;
            if (mid < x / mid) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }

        return i - 1;
    }
}