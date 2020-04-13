/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。
 *
 * 示例:
 * s = "abaccdeff"
 * 返回 "b"
 *
 * s = "" 
 * 返回 " "
 *
 * 限制：
 * 0 <= s 的长度 <= 50000
 */

using System.Collections.Generic;

public class Solution {
    public char FirstUniqChar(string s) {
        Dictionary<char, int> dict = new Dictionary<char, int>();

        foreach (char str in s) {
            if (dict.ContainsKey(str)) {
                dict[str] += 1;
            } else {
                dict.Add(str, 1);
            }
        }

        foreach (char str in s) if (dict[str] == 1) return str;
        return ' ';
    }
}