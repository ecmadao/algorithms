/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。
 * 注意：本题相对原题稍作修改
 *
 * 示例:
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出:
 * [
 *    ["ate","eat","tea"],
 *    ["nat","tan"],
 *    ["bat"]
 * ]
 *
 * 说明：
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 */

public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, IList<string>> dict = new Dictionary<string, IList<string>>();

        foreach(string str in strs) {
            char[] arr = str.ToCharArray();
            Array.Sort(arr);
            string sorted = new string(arr);
            if (dict.ContainsKey(sorted)) {
                dict[sorted].Add(str);
            } else {
                dict.Add(sorted, new List<string>{ str });
            }
        }
        return dict.Values.ToArray();
    }
}