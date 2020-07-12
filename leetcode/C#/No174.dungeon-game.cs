/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon.
 * The dungeon consists of M x N rooms laid out in a 2D grid.
 * Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.
 * The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.
 * 
 * Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms;
 * other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).
 * In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.
 *
 * Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.
 * For example, given the dungeon below, the initial health of the knight must be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN -> DOWN.
 * -2 (K)	-3	3
 * -5	-10	1
 * 10	30	-5 (P)
 *
 * Note:
 * The knight's health has no upper bound.
 * Any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.
*/

public class Solution {
    public int CalculateMinimumHP(int[][] dungeon) {
        int res = int.MaxValue;
        int[,] cache = new int[dungeon.Length, dungeon[0].Length];

        int Dfs(int i, int j) {
            if (i >= dungeon.Length || j >= dungeon[0].Length) return int.MaxValue;
            if (cache[i, j] != 0) return cache[i, j];

            int num = dungeon[i][j];
            if (i == dungeon.Length - 1 && j == dungeon[0].Length - 1) return num > 0 ? 1 : Math.Abs(num) + 1;

            int next = Math.Min(
                Dfs(i + 1, j),
                Dfs(i, j + 1)
            );

            int res = next > num ? next - num : 1;

            cache[i, j] = res;
            return res;
        }

        return Dfs(0, 0);
    }
}