=begin
Difficulty:
Hard

Desc:
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:
s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.

Example:
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
=end

def match(s, p, i, j)
  if i >= s.size && j >= p.size then
    return true
  end
  if i < s.size && j >= p.size then
    return false
  end
  if i >= s.size then
    return is_empty(p, j)
  end

  s1 = s[i]
  s2 = p[j]
  if s1 == s2 || s2 == '.' then
    if j < p.size - 1 && p[j + 1] == '*' then
      result = match(s, p, i, j + 2)
      return result unless result == false
      i += 1
      while i < s.size && (s2 == '.' || (s2 != '.' && s[i] == s2)) do
        result = match(s, p, i, j + 2)
        return result unless result == false
        i += 1
      end
      return match(s, p, i, j + 2)
    else
      return match(s, p, i + 1, j + 1)
    end
  else
    return false unless j < p.size - 1 && p[j + 1] == '*'
    return match(s, p, i, j + 2)
  end
end

def is_empty(p, j)
  count = p.size - j
  return false unless count % 2 == 0
  while j < p.size do
    return false unless p[j + 1] == '*'
    j += 2
  end
  return true
end

# @param {String} s
# @param {String} p
# @return {Boolean}
def is_match(s, p)
  return match(s, p, 0, 0)
end
