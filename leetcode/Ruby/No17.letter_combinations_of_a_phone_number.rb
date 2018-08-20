=begin
Difficulty:
Medium

Desc:
Given a string containing digits from 2-9 inclusive,
return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
=end

def digit_map(i, j)
  h = Hash.new
  letter_index = 0
  letters = "abcdefghijklmnopqrstuvwxyz"

  i.upto(j) do |index|
    gap = 3
    if index == 7 || index == 9 then
      gap = 4
    end
    h[index] = letters[letter_index...(letter_index + gap)]
    letter_index += gap
  end
  return h
end

# @param {String} digits
# @return {String[]}
def letter_combinations(digits)
  results = []
  hash = digit_map(2, 9)

  digits.chars.each do |digit|
    letter = hash[digit.to_i]
    letters = letter.split('')
    if results.size == 0 then
      results = letters
    else
      results.map! { |r|
        letters.map { |l| r + l }
      }.flatten!
    end
  end

  return results
end
