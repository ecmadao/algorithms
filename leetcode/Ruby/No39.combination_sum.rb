=begin
Difficulty:
Medium

Desc:
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sums to target.
The same repeated number may be chosen from candidates unlimited number of times.

Note:
- All numbers (including target) will be positive integers.
- The solution set must not contain duplicate combinations.

Example:
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
=end

def combination(candidates, target, tmp = [], result = [])
  if target == 0 then
    result.push(tmp)
    return
  end
  return false unless candidates[0] <= target

  candidates.each_with_index do |candidate, index|
    if candidate > target then
      break
    end
    combination(candidates[index...candidates.size], target - candidate, tmp + [candidate], result)
  end
end

# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum(candidates, target)
  return [] unless target > 0
  return [] unless candidates.length > 0
  candidates.sort!

  result = []
  combination(candidates, target, [], result)
  return result
end

# Test case
print combination_sum([2,3,6,7], 7)
print combination_sum([2,3,5], 8)
