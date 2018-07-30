=begin
Difficulty:
Medium

Desc:
Given a string, find the length of the longest substring without repeating characters.

Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
=end

# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
  h = Hash.new
  max = 0
  len = 0
  s.chars.each_with_index do |char, index|
    if h[char] != nil then
      max = [max, len].max
      i = h[char]
      len = index - i
      i += 1
      h = Hash.new
      while i < index do
        h[s[i]] = i
        i += 1
      end
    else
      len += 1
    end
    h[char] = index
  end
  [max, len].max
end

def length_of_longest_substring2(s)
  h = Hash.new
  start = 0
  i = 0
  len = 0
  while i < s.size do
    char = s[i]
    if h.has_key?(char) then
      start = [start, h[char] + 1].max
    end
    len = [len, i + 1 - start].max
    h[char] = i
    i += 1
  end
  return len
end

# Test case
puts length_of_longest_substring2("abcabcbb") # 3
puts length_of_longest_substring2("pwwkew") # 3
puts length_of_longest_substring2("bbbbb") # 1
puts length_of_longest_substring2("bbabbb") # 2
