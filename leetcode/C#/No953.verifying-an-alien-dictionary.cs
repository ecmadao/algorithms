/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
 * Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.
 *
 * Example 1:
 * Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
 * Output: true
 * Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
 *
 * Example 2:
 * Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
 * Output: false
 * Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
 *
 * Example 3:
 * Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
 * Output: false
 * Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 *
 * Constraints:
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 20
 * order.length == 26
 * All characters in words[i] and order are English lowercase letters.
*/

public class Solution {
    public bool IsAlienSorted(string[] words, string order) {
        Dictionary<char, int> dict = new Dictionary<char, int>();
        for (int i = 0; i < order.Length; i += 1) {
            dict[order[i]] = i;
        }
        string[] tmp = words[..];
        Array.Sort(tmp, (w1, w2) => {
            int i = 0;
            while (i < Math.Min(w1.Length, w2.Length)) {
                if (dict[w1[i]] < dict[w2[i]]) return -1;
                if (dict[w1[i]] > dict[w2[i]]) return 1;
                i += 1;
            }
            if (i < w1.Length) return 1;
            return -1;
        });

        for (int i = 0; i < words.Length; i += 1) {
            if (tmp[i] != words[i]) return false;
        }
        return true;
    }
}