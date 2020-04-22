/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * A Tic-Tac-Toe board is given as a string array board. Return True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.
 * The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.
 *
 * Here are the rules of Tic-Tac-Toe:
 * 1. Players take turns placing characters into empty squares (" ").
 * 2. The first player always places "X" characters, while the second player always places "O" characters.
 * 3. "X" and "O" characters are always placed into empty squares, never filled ones.
 * 4. The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
 * 5. The game also ends if all squares are non-empty.
 * 6. No more moves can be played if the game is over.
 *
 * Example 1:
 * Input: board = ["O  ", "   ", "   "]
 * Output: false
 * Explanation: The first player always plays "X".
 *
 * Example 2:
 * Input: board = ["XOX", " X ", "   "]
 * Output: false
 * Explanation: Players take turns making moves.
 *
 * Example 3:
 * Input: board = ["XXX", "   ", "OOO"]
 * Output: false
 *
 * Example 4:
 * Input: board = ["XOX", "O O", "XOX"]
 * Output: true
 *
 * Note:
 * - board is a length-3 array of strings, where each string board[i] has length 3.
 * - Each board[i][j] is a character in the set {" ", "X", "O"}.
*/

public class Solution {
    public bool ValidTicTacToe(string[] board) {
        HashSet<int> X = new HashSet<int>();
        HashSet<int> O = new HashSet<int>();

        for (int i = 0; i < board.Length; i += 1) {
            for (int j = 0; j < board[i].Length; j += 1) {
                if (board[i][j] == 'X') {
                    X.Add(i * 3 + j);
                } else if (board[i][j] == 'O') {
                    O.Add(i * 3 + j);
                }
            }
        }

        bool IsWinner(HashSet<int> set) {
            return (
                (set.Contains(0) && set.Contains(1) && set.Contains(2)) ||
                (set.Contains(3) && set.Contains(4) && set.Contains(5)) ||
                (set.Contains(6) && set.Contains(7) && set.Contains(8)) ||
                (set.Contains(0) && set.Contains(3) && set.Contains(6)) ||
                (set.Contains(1) && set.Contains(4) && set.Contains(7)) ||
                (set.Contains(2) && set.Contains(5) && set.Contains(8)) ||
                (set.Contains(0) && set.Contains(4) && set.Contains(8)) ||
                (set.Contains(2) && set.Contains(4) && set.Contains(6))
            );
        }

        if (Math.Abs(X.Count - O.Count) > 1) return false;
        if (O.Count > X.Count) return false;
        if (X.Count == 0 && O.Count > 0) return false;
        if (IsWinner(X) && IsWinner(O)) return false;

        if (IsWinner(X) && X.Count <= O.Count) return false;
        if (IsWinner(O) && O.Count != X.Count) return false;
        return true;
    }
}