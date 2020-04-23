/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Implement the StreamChecker class as follows:
 * StreamChecker(words): Constructor, init the data structure with the given words.
 * query(letter): returns true if and only if for some k >= 1, the last k characters queried (in order from oldest to newest, including this letter just queried) spell one of the words in the given list.
 *
 * Example:
 * StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
 * streamChecker.query('a');          // return false
 * streamChecker.query('b');          // return false
 * streamChecker.query('c');          // return false
 * streamChecker.query('d');          // return true, because 'cd' is in the wordlist
 * streamChecker.query('e');          // return false
 * streamChecker.query('f');          // return true, because 'f' is in the wordlist
 * streamChecker.query('g');          // return false
 * streamChecker.query('h');          // return false
 * streamChecker.query('i');          // return false
 * streamChecker.query('j');          // return false
 * streamChecker.query('k');          // return false
 * streamChecker.query('l');          // return true, because 'kl' is in the wordlist
 *
 * Note:
 * 1 <= words.length <= 2000
 * 1 <= words[i].length <= 2000
 * Words will only consist of lowercase English letters.
 * Queries will only consist of lowercase English letters.
 * The number of queries is at most 40000.
*/


public class TreeNode {
    public char letter;
    public bool finish;
    public Dictionary<char, TreeNode> next = new Dictionary<char, TreeNode>();

    public TreeNode(char s, bool f = false) {
        letter = s;
        finish = f;
    }
}

public class StreamChecker {
    private List<TreeNode> nodes;
    private TreeNode tree;
    private List<char> history;

    public StreamChecker(string[] words) {
        nodes = new List<TreeNode>();
        tree = new TreeNode('\0');
        history = new List<char>();
    
        foreach (string word in words) {
            TreeNode node = tree;
            for (int i = word.Length - 1; i >= 0; i -= 1) {
                char s = word[i];
                if (!node.next.ContainsKey(s)) node.next.Add(s, new TreeNode(s));
                node = node.next[s];
            }
            node.finish = true;
        }
    }
    
    public bool Query(char letter) {
        history.Add(letter);

        TreeNode node = tree;
        for (int i = history.Count - 1; i >= 0; i -= 1) {
            if (!node.next.ContainsKey(history[i])) return false;
            node = node.next[history[i]];
            if (node.finish) return true;
        }
        return false;
    }
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * StreamChecker obj = new StreamChecker(words);
 * bool param_1 = obj.Query(letter);
 */