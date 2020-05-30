/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an encoded string, return its decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
 * Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid;
 * No extra white spaces, square brackets are well-formed, etc.
 *
 * Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.
 * For example, there won't be input like 3a or 2[4].
 *
 * Examples:
 * s = "3[a]2[bc]", return "aaabcbc".
 * s = "3[a2[c]]", return "accaccacc".
 * s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

public class Solution {
    public string DecodeString(string s) {
        if (s == "") return s;
        Stack stack = new Stack();
        int i = 0;
        while (i < s.Length) {
            int j = i;
            if (Char.IsDigit(s[i])) {
                while (i + 1 < s.Length && Char.IsDigit(s[i + 1])) i += 1;
                stack.Push(Int32.Parse(s[j..(i + 1)]));
            } else if (Char.IsLetter(s[i])) {
                while (i + 1 < s.Length && Char.IsLetter(s[i + 1])) i += 1;
                stack.Push(s[j..(i + 1)]);
            } else if (s[i] == ']') {
                while (stack.Count > 1) {
                    string s1 = (string)stack.Pop();
                    var s2 = stack.Pop();
                    if (s2 is string) {
                        stack.Push((string)s2 + s1);
                    } else {
                        stack.Push(
                            string.Join("", new int[(int)s2].Select(k => s1))
                        );
                        break;
                    }
                }
            }
            i += 1;
        }

        while (stack.Count > 1) {
            string s1 = (string)stack.Pop();
            var s2 = stack.Pop();
            
            if (s2 is string) {
                stack.Push((string)s2 + s1);
            } else {
                stack.Push(
                    string.Join("", new int[(int)s2].Select(k => s1))
                );
            }
        }
        return (string)stack.Pop();
    }
}

// 2[yypq + 4[jkjkef]]
// 2[yypqjkjkefjkjkefjkjkefjkjkef]