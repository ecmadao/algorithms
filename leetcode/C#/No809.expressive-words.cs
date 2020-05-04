/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".
 * In these strings like "heeellooo", we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".
 * For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications of the following extension operation:
 * choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.
 *
 * For example, starting with "hello", we could do an extension on the group "o" to get "hellooo",
 * but we cannot get "helloo" since the group "oo" has size less than 3.
 * Also, we could do another extension like "ll" -> "lllll" to get "helllllooo".
 * If S = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = S.
 * Given a list of query words, return the number of words that are stretchy. 
 *
 * Example:
 * Input: 
 * S = "heeellooo"
 * words = ["hello", "hi", "helo"]
 * Output: 1
 * Explanation: 
 * We can extend "e" and "o" in the word "hello" to get "heeellooo".
 * We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.
 *
 * Notes:
 * 0 <= len(S) <= 100.
 * 0 <= len(words) <= 100.
 * 0 <= len(words[i]) <= 100.
 * S and all words in words consist only of lowercase letters
*/

public class Solution {
    public int ExpressiveWords(string S, string[] words) {
        ArrayList list = new ArrayList();

        int i = 0;
        while (i < S.Length) {
            int j = i;
            while (i + 1 < S.Length && S[i] == S[i + 1]) i += 1;
            list.Add(S[i]);
            list.Add(i - j + 1);
            i += 1;
        }

        bool IsExpressiveWord(string word) {
            int j = 0;
            Queue q = new Queue(list);
            while (j < word.Length) {
                if (word[j] != (char)q.Dequeue()) return false;
                int k = j;
                while (j + 1 < word.Length && word[j + 1] == word[j]) j += 1;
                
                int count = (int)q.Dequeue();
                if (j - k + 1 > count) return false;
                if (j - k + 1 < count && count < 3) return false;
                j += 1;
            }
            return q.Count == 0;
        }

        return words.Count(word => IsExpressiveWord(word));
    }
}

