=begin
Difficulty:
Easy

Desc:
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example:
Input: haystack = "hello", needle = "ll"
Output: 2

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
=end

# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
  return 0 unless needle.size > 0

  i = 0
  while i <= haystack.size - needle.size do
    if haystack[i...(i + needle.size)] == needle then
      return i
    end
    i += 1
  end
  return -1
end
