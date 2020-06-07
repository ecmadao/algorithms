/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given two words (beginWord and endWord), and a dictionary's word list,
 * find all shortest transformation sequence(s) from beginWord to endWord, such that:
 * Only one letter can be changed at a time
 * Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
 *
 * Note:
 * Return an empty list if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 *
 * Example 1:
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * Output:
 * [
 *  ["hit","hot","dot","dog","cog"],
 *  ["hit","hot","lot","log","cog"]
 * ]
 *
 * Example 2:
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * Output: []
 *
 * Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/

public class Solution {

    // timeout
    public IList<IList<string>> FindLadders(string beginWord, string endWord, IList<string> wordList) {
        HashSet<string> set = new HashSet<string>(wordList);
        List<IList<string>> res = new List<IList<string>>();
        if (!set.Contains(endWord)) return res;
        
        Queue<List<string>> q = new Queue<List<string>>();
        q.Enqueue(new List<string>(new string[]{ beginWord }));

        while (q.Count > 0 && res.Count == 0) {

            foreach (List<string> list in q) set.Remove(list[^1]);

            int len = q.Count;
            while (len > 0) {
                List<string> list = q.Dequeue();
                string lastWord = list[^1];

                bool done = false;
                for (int i = 0; i < lastWord.Length && !done; i += 1) {
                    for (int j = 97; j <= 122; j += 1) {
                        if (j == lastWord[i]) continue;

                        string newWord = lastWord.Substring(0, i) + (char)j + lastWord.Substring(i + 1, lastWord.Length - 1 - i);
                        if (!set.Contains(newWord)) continue;

                        if (newWord == endWord) {
                            list.Add(newWord);
                            res.Add(list);
                            done = true;
                            break;
                        }

                        List<string> newList = new List<string>(list);
                        newList.Add(newWord);
                        q.Enqueue(newList);
                    }
                }

                len -= 1;
            }
        }

        return res;
    }
}