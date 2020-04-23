/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement a MapSum class with insert, and sum methods.
 * For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.
 * For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.
 *
 * Example 1:
 * Input: insert("apple", 3), Output: Null
 * Input: sum("ap"), Output: 3
 * Input: insert("app", 2), Output: Null
 * Input: sum("ap"), Output: 5
*/

public class Node {
    public char letter;
    public int count = 0;
    public Dictionary<char, Node> next = new Dictionary<char, Node>();

    public Node(char s) {
        letter = s;
    }
}

public class MapSum {

    private Node tree;
    private Dictionary<string, int> dict = new Dictionary<string, int>();

    /** Initialize your data structure here. */
    public MapSum() {
        tree = new Node('\0');
    }
    
    public void Insert(string key, int val) {
        int num = 0;
        dict.TryGetValue(key, out num);
        num = val - num;

        Node node = tree;
        foreach (char s in key) {
            node.count += num;
            if (!node.next.ContainsKey(s)) node.next.Add(s, new Node(s));
            node = node.next[s];
        }
        node.count += num;

        dict[key] = val;
    }
    
    public int Sum(string prefix) {
        Node node = tree;
        foreach (char s in prefix) {
            if (!node.next.ContainsKey(s)) return 0;
            node = node.next[s];
        }
        return node.count;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum obj = new MapSum();
 * obj.Insert(key,val);
 * int param_2 = obj.Sum(prefix);
 */