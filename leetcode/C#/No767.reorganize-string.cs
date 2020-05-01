/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.
 * If possible, output any possible result.  If not possible, return the empty string.
 *
 * Example 1:
 * Input: S = "aab"
 * Output: "aba"
 *
 * Example 2:
 * Input: S = "aaab"
 * Output: ""
 *
 * Note:
 * S will consist of lowercase letters and have length in range [1, 500].
*/

public class Solution {
    private static int Search(List<char> list, char target, Dictionary<char, int> dict) {
        int i = 0;
        int j = list.Count - 1;

        while (i <= j) {
            int mid = (i + j) / 2;
            if (dict[list[mid]] == dict[target]) return mid;
            if (dict[list[mid]] < dict[target]) {
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        }
        return i;
    }

    public string ReorganizeString(string S) {
        Dictionary<char, int> dict = new Dictionary<char, int>();
        foreach (char s in S) {
            int n = 0;
            dict.TryGetValue(s, out n);
            dict[s] = n + 1;
        }
        
        List<char> keys = new List<char>(dict.Keys);
        keys.Sort((char k1, char k2) => dict[k2] - dict[k1]);
        List<char> res = new List<char>();
        
        while (keys.Count > 1) {
            for (int i = 1; i <= dict[keys[1]]; i += 1) {
                res.Add(keys[0]);
                res.Add(keys[1]);
            }
            char head = keys[0];
            dict[head] -= dict[keys[1]];
            dict[keys[1]] = 0;

            keys.RemoveAt(1);
            keys.RemoveAt(0);
            if (dict[head] > 0) {
                int index = Search(keys, head, dict);
                keys.Insert(index, head);
            }
        }
        
        if (keys.Count == 1 && dict[keys[0]] > 1) return "";
        string word = string.Join("", res);
        if (keys.Count == 1) word += keys[0];
        return word;
    }
}