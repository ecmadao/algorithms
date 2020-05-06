/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * A cinema has n rows of seats, numbered from 1 to n and there are ten seats in each row, labelled from 1 to 10 as shown in the figure above.
 * Given the array reservedSeats containing the numbers of seats already reserved, for example, reservedSeats[i]=[3,8] means the seat located in row 3 and labelled with 8 is already reserved. 
 * Return the maximum number of four-person families you can allocate on the cinema seats. A four-person family occupies fours seats in one row, that are next to each other.
 * Seats across an aisle (such as [3,3] and [3,4]) are not considered to be next to each other, however, It is permissible for the four-person family to be separated by an aisle, but in that case, exactly two people have to sit on each side of the aisle.
 *
 * Example 1:
 * Input: n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
 * Output: 4
 * Explanation:
 * The figure above shows the optimal allocation for four families,
 * where seats mark with blue are already reserved and contiguous seats mark with orange are for one family. 
 *
 * Example 2:
 * Input: n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
 * Output: 2
 *
 * Example 3:
 * Input: n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
 * Output: 4
 *
 * Constraints:
 * 1 <= n <= 10^9
 * 1 <= reservedSeats.length <= min(10*n, 10^4)
 * reservedSeats[i].length == 2
 * 1 <= reservedSeats[i][0] <= n
 * 1 <= reservedSeats[i][1] <= 10
 * All reservedSeats[i] are distinct.
*/

public class Solution {
    public int MaxNumberOfFamilies(int n, int[][] reservedSeats) {
        Array.Sort(reservedSeats, (int[] d1, int[] d2) => {
            return d1[0] - d2[0];
        });

        int total = n;
        int res = 0;
        int j = 0;
        while (j < reservedSeats.Length) {
            int[,] fields = new int[1, 10];
            fields[0, reservedSeats[j][1] - 1] = 1;
            while (j + 1 < reservedSeats.Length && reservedSeats[j + 1][0] == reservedSeats[j][0]) {
                fields[0, reservedSeats[j + 1][1] - 1] = 1;
                j += 1;
            }

            if (fields[0, 1] == 0 && fields[0, 2] == 0 && fields[0, 3] == 0 && fields[0, 4] == 0) {
                res += 1;
                fields[0, 3] = 1;
                fields[0, 4] = 1;
            }
            if (fields[0, 5] == 0 && fields[0, 6] == 0 && fields[0, 7] == 0 && fields[0, 8] == 0) {
                res += 1;
                fields[0, 5] = 1;
                fields[0, 6] = 1;
            }
            if (fields[0, 3] == 0 && fields[0, 4] == 0 && fields[0, 5] == 0 && fields[0, 6] == 0) {
                res += 1;
            }

            j += 1;

            total -= 1;
        }

        res += total * 2;

        return res;
    }
}