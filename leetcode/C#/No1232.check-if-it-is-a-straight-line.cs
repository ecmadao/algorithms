/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
 *
 * Example 1:
 * Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
 * Output: true
 *
 * Example 2:
 * Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
 * Output: false
 *
 * Constraints:
 * 2 <= coordinates.length <= 1000
 * coordinates[i].length == 2
 * -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
 * coordinates contains no duplicate point.
*/

public class Solution {
    public bool CheckStraightLine(int[][] coordinates) {
        if (coordinates.Length <= 2) return true;

        bool isStraightLine (int[] c1, int[] c2, int[] c3) {
            if (c1[0] == c2[0]) return c2[0] == c3[0];
            if (c1[1] == c2[1]) return c2[1] == c3[1];

            return (c1[1] - c2[1]) * (c3[0] - c2[0]) == (c1[0] - c2[0]) * (c3[1] - c2[1]); 
        }
        for (int i = 2; i < coordinates.Length; i += 1) {
            if (!isStraightLine(coordinates[i], coordinates[i - 1], coordinates[i - 2])) return false;
        }
        return true;
    }
}