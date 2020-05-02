/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are N dominoes in a line, and we place each domino vertically upright.
 * In the beginning, we simultaneously push some of the dominoes either to the left or to the right.
 * After each second, each domino that is falling to the left pushes the adjacent domino on the left.
 * Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.
 * When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.
 * For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.
 *
 * Given a string "S" representing the initial state.
 * - S[i] = 'L', if the i-th domino has been pushed to the left;
 * - S[i] = 'R', if the i-th domino has been pushed to the right;
 * - S[i] = '.', if the i-th domino has not been pushed.
 * Return a string representing the final state. 
 *
 * Example 1:
 * Input: ".L.R...LR..L.."
 * Output: "LL.RR.LLRRLL.."
 *
 * Example 2:
 * Input: "RR.L"
 * Output: "RR.L"
 * Explanation: The first domino expends no additional force on the second domino.
 *
 * Note:
 * 0 <= N <= 10^5
 * String dominoes contains only 'L', 'R' and '.'
*/

public class Solution {
    public string PushDominoes(string dominoes) {
        Dictionary<char, List<int>> dict = new Dictionary<char, List<int>>(){
            { 'R', new List<int>() },
            { 'L', new List<int>() }
        };

        char[] res = dominoes.ToCharArray();
        for (int i = 0; i < dominoes.Length; i += 1) {
            if (dominoes[i] == '.') continue;

            if (dominoes[i] == 'R') {
                dict['R'].Add(i);
            } else if (dict['R'].Count == 0) {
                dict['L'].Add(i);
            } else {
                int j = dict['R'][dict['R'].Count - 1];
                dict['R'].RemoveAt(dict['R'].Count - 1);

                int k = i;
                while (k > j && (res[j + 1] == '.' || res[k - 1] == '.')) {
                    if (j + 1 == k - 1) break;
                    if (res[j + 1] == '.') res[++j] = 'R';
                    if (res[k - 1] == '.') res[--k] = 'L';
                }
            }
        }

        foreach (int r in dict['R']) {
            int right = r;
            while (right + 1 < res.Length && res[++right] == '.') res[right] = 'R';
        }
        foreach (int l in dict['L']) {
            int left = l;
            while (left - 1 >= 0 && res[--left] == '.') res[left] = 'L';
        }

        return string.Join("", res);
    }
}