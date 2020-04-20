/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.
 * Return list of lists of the suggested products after each character of searchWord is typed. 
 *
 * Example 1:
 * Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
 * Output: [
 *  ["mobile","moneypot","monitor"],
 *  ["mobile","moneypot","monitor"],
 *  ["mouse","mousepad"],
 *  ["mouse","mousepad"],
 *  ["mouse","mousepad"]
 * ]
 * Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
 * After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
 * After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
 *
 * Example 2:
 * Input: products = ["havana"], searchWord = "havana"
 * Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
 *
 * Example 3:
 * Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
 * Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
 *
 * Example 4:
 * Input: products = ["havana"], searchWord = "tatiana"
 * Output: [[],[],[],[],[],[],[]]
 *
 * Constraints:
 * 1 <= products.length <= 1000
 * There are no repeated elements in products.
 * 1 <= Σ products[i].length <= 2 * 10^4
 * All characters of products[i] are lower-case English letters.
 * 1 <= searchWord.length <= 1000
 * All characters of searchWord are lower-case English letters.
*/

public class TreeNode {
    public char letter;
    public List<string> words;
    public Dictionary<char, TreeNode> next;

    public TreeNode(char str) {
        letter = str;
        words = new List<string>();
        next = new Dictionary<char, TreeNode>();
    }
}

public class Solution {
    public IList<IList<string>> SuggestedProducts(string[] products, string searchWord) {
        TreeNode tree = new TreeNode('\0');
    
        foreach (string product in products) {
            TreeNode node = tree;
            foreach (char str in product) {
                if (!node.next.ContainsKey(str)) node.next.Add(str, new TreeNode(str));
                node = node.next[str];
                node.words.Add(product);
            }
        }

        return searchWord.Select((char str) => {
            if (tree != null && tree.next.ContainsKey(str)) {
                tree = tree.next[str];
                List<string> res = tree.words;
                res.Sort();
                return res.GetRange(0, Math.Min(3, res.Count)).ToArray();
            } else {
                tree = null;
                return new string[0];
            }
        }).ToArray();
    }
}