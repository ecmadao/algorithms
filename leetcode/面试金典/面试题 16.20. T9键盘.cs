/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 在老式手机上，用户通过数字键盘输入，手机将提供与这些数字相匹配的单词列表。每个数字映射到0至4个字母。给定一个数字序列，实现一个算法来返回匹配单词的列表。你会得到一张含有有效单词的列表。映射如下图所示：
 *
 * 示例 1:
 * 输入: num = "8733", words = ["tree", "used"]
 * 输出: ["tree", "used"]
 *
 * 示例 2:
 * 输入: num = "2", words = ["a", "b", "c", "d"]
 * 输出: ["a", "b", "c"]
 *
 * 提示：
 * num.length <= 1000
 * words.length <= 500
 * words[i].length == num.length
 * num中不会出现 0, 1 这两个数字
 */



public class WordTree {
    char word;
    public bool finish;
    public Dictionary<char, WordTree> next;

    public WordTree(char w) {
        next = new Dictionary<char, WordTree>();
        word = w;
        finish = false;
    }
}

public class Solution {
    public IList<string> GetValidT9Words(string num, string[] words) {
        WordTree tree = new WordTree('\0');

        foreach (string word in words) {
            WordTree node = tree;
            foreach (char w in word) {
                if (!node.next.ContainsKey(w)) node.next[w] = new WordTree(w);
                node = node.next[w];
            }
            node.finish = true;
        }
        Dictionary<char, char[]> dict = new Dictionary<char, char[]>()
        {
            { '2', new char[]{ 'a', 'b', 'c' }},
            { '3', new char[]{ 'd', 'e', 'f' }},
            { '4', new char[]{ 'g', 'h', 'i' }},
            { '5', new char[]{ 'j', 'k', 'l' }},
            { '6', new char[]{ 'm', 'n', 'o' }},
            { '7', new char[]{ 'p', 'q', 'r', 's' }},
            { '8', new char[]{ 't', 'u', 'v' }},
            { '9', new char[]{ 'w', 'x', 'y', 'z' }}
        };

        List<string> res = new List<string>();

        void dfs(int index, WordTree node, System.Text.StringBuilder sb) {
            if (index >= num.Length && node.finish) {
                res.Add(sb.ToString());
                return;
            }

            foreach (char c in dict[num[index]]) {
                if (!node.next.ContainsKey(c)) continue;
                sb.Append(c);
                dfs(index + 1, node.next[c], sb);
                sb.Remove(sb.Length - 1, 1);
            }
        }
        dfs(0, tree, new System.Text.StringBuilder());
        return res;
    }
}