=begin
Difficulty:
Medium

Desc:
Given a collection of candidate numbers (candidates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sums to target.
Each number in candidates may only be used once in the combination.

Note:
- All numbers (including target) will be positive integers.
- The solution set must not contain duplicate combinations.

Example:
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
=end

def combination(candidates, index, target, tmp, results)
  if target == 0 then
    results.push(tmp)
    return true
  end
  return false unless index < candidates.size
  return false unless candidates[index] <= target

  i = index
  while i < candidates.size do
    candidate = candidates[i]
    if candidate > target then
      break
    end
    combination(candidates, i + 1, target - candidate, tmp + [candidate], results)
    while candidates[i] == candidates[i + 1] do
      i += 1
    end
    i += 1
  end
  return false
end

# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum2(candidates, target)
  return [] unless target > 0
  return [] unless candidates.size > 0
  candidates.sort!
  return [] unless candidates[0] <= target
  results = []

  combination(candidates, 0, target, [], results)
  return results
end

# Test case
print combination_sum2([10,1,2,7,6,1,5], 8)
print combination_sum2([2,5,2,1,2], 5)
