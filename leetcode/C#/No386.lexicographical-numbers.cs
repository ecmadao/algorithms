/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer n, return 1 - n in lexicographical order.
 * For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].
 * Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.
*/

public class Solution {
    private static int Next(int num, int max) {
        if (num * 10 <= max) return num * 10;
        num += 1;

        if (num % 10 == 0) {
            while (num % 10 == 0) num /= 10;
            return num;
        }
        if (num <= max) return num;

        while (num > max) {
            num /= 10;
        }
        num += 1;
        while (num % 10 == 0) num /= 10;
        return num;
    }

    public IList<int> LexicalOrder(int n) {
        List<int> res = new List<int>();
        int i = 1;

        while (res.Count < n) {
            res.Add(i);
            i = Next(i, n);
        }

        return res;
    }
}