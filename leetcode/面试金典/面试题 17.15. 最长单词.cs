/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定一组单词words，编写一个程序，找出其中的最长单词，且该单词由这组单词中的其他单词组合而成。若有多个长度相同的结果，返回其中字典序最小的一项，若没有符合要求的单词则返回空字符串。
 *
 * 示例：
 * 输入： ["cat","banana","dog","nana","walk","walker","dogwalker"]
 * 输出： "dogwalker"
 * 解释： "dogwalker"可由"dog"和"walker"组成。
 *
 * 提示：
 * 0 <= len(words) <= 100
 * 1 <= len(words[i]) <= 100
 */

public class Solution {
    private bool isComposeWord(HashSet<string> set, string word) {
        if (word.Length == 0) return true;

        for (int i = 0; i < word.Length; i += 1) {
            if (set.Contains(word.Substring(0, i + 1)) && isComposeWord(set, word.Substring(i + 1))) return true;
        }
        return false;
    }

    public string LongestWord(string[] words) {
        Array.Sort(words, (w1, w2) => {
            if (w1.Length == w2.Length) {
                return string.Compare(w1, w2);
            }
            return w2.Length.CompareTo(w1.Length);
        });

        HashSet<string> set = new HashSet<string>(words);

        foreach (string word in words) {
            set.Remove(word);
            if (isComposeWord(set, word)) return word;
        }

        return "";
    }
}