=begin
Difficulty: Medium

Desc:
Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.

Example:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Input: "cbbd"
Output: "bb"
=end

def get_palindrome(s, i1, i2)
  while i1 >= 0 && i2 < s.size && s[i1] == s[i2] do
    i1 -= 1
    i2 += 1
  end
  return s[(i1 + 1)...i2]
end

# @param {String} s
# @return {String}
def longest_palindrome(s)
  i = 0
  palindrome = s[i]
  while i < s.size do
    p = get_palindrome(s, i, i + 1)
    if p.size > palindrome.size then
      palindrome = p
    end
    p = get_palindrome(s, i, i + 2)
    if p.size > palindrome.size then
      palindrome = p
    end
    i += 1
  end
  return palindrome || ""
end


# Test case
puts longest_palindrome("babad")
puts longest_palindrome("cbbd")
puts longest_palindrome("a")
puts longest_palindrome("")
