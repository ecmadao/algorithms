/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.
 * For a given query word, the spell checker handles two categories of spelling mistakes:
 * 1. Capitalization: If the query matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the case in the wordlist.
 *    Example: wordlist = ["yellow"], query = "YellOw": correct = "yellow"
 *    Example: wordlist = ["Yellow"], query = "yellow": correct = "Yellow"
 *    Example: wordlist = ["yellow"], query = "yellow": correct = "yellow"
 * 2. Vowel Errors: If after replacing the vowels ('a', 'e', 'i', 'o', 'u') of the query word with any vowel individually, it matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the match in the wordlist.
 *    Example: wordlist = ["YellOw"], query = "yollow": correct = "YellOw"
 *    Example: wordlist = ["YellOw"], query = "yeellow": correct = "" (no match)
 *    Example: wordlist = ["YellOw"], query = "yllw": correct = "" (no match)
 * 3. In addition, the spell checker operates under the following precedence rules:
 *    When the query exactly matches a word in the wordlist (case-sensitive), you should return the same word back.
 *    When the query matches a word up to capitlization, you should return the first such match in the wordlist.
 *    When the query matches a word up to vowel errors, you should return the first such match in the wordlist.
 * 4. If the query has no matches in the wordlist, you should return the empty string.
 *
 * Given some queries, return a list of words answer, where answer[i] is the correct word for query = queries[i].
 *
 * Example 1:
 * Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
 * Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
 *
 * Note:
 * 1 <= wordlist.length <= 5000
 * 1 <= queries.length <= 5000
 * 1 <= wordlist[i].length <= 7
 * 1 <= queries[i].length <= 7
 * All strings in wordlist and queries consist only of english letters.
*/

public class Solution {
    public string[] Spellchecker(string[] wordlist, string[] queries) {
        HashSet<string> set = new HashSet<string>();
        Dictionary<string, string> dict1 = new Dictionary<string, string>();
        Dictionary<string, string> dict2 = new Dictionary<string, string>();

        for (int i = wordlist.Length - 1; i >= 0; i -= 1) {
            string word = wordlist[i];
            set.Add(word);

            string word2 = word.ToLower();
            if (dict1.ContainsKey(word2)) {
                dict1[word2] = word;
            } else {
                dict1.Add(word2, word);
            }
            
            string word3 = System.Text.RegularExpressions.Regex.Replace(word2, @"[aeiou]", "a");
            if (dict2.ContainsKey(word3)) {
                dict2[word3] = word;
            } else {
                dict2.Add(word3, word);
            }
        }
        
        return queries.Select((string query) => {
            if (set.Contains(query)) return query;
            string word = query.ToLower();
            if (dict1.ContainsKey(word)) return dict1[word];

            string word2 = System.Text.RegularExpressions.Regex.Replace(word, @"[aeiou]", "a");
            if (dict2.ContainsKey(word2)) return dict2[word2];
            return "";
        }).ToArray();
    }
}