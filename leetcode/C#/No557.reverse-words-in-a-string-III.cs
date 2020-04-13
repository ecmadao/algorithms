
/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 *
 * Example 1:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 *
 * Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

using System;
using System.Linq;

public class Solution {
    public string ReverseWords(string s) {
        int i = 0;
        string res = "";

        return string.Join(
            " ",
            s.Split(' ').Select((string str) => {
                char[] arr = str.ToCharArray();
                Array.Reverse(arr);
                return new  string(arr);
            }).ToArray()
        );

        // while (i < s.Length) {
        //     string str = "";
        //     while (i < s.Length && s[i] != ' ') {
        //         str = s[i] + str;
        //         i += 1;
        //     }
        //     res += str;
        //     if (i < s.Length && s[i] == ' ') {
        //         res += ' ';
        //     }
        //     i += 1;
        // }
        // return res;
    }
}