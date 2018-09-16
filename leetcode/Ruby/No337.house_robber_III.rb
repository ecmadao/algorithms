=begin
Difficulty:
Medium

Desc:
The thief has found himself a new place for his thievery again.
There is only one entrance to this area, called the "root."
Besides the root, each house has one and only one parent house.
After a tour, the smart thief realized that "all houses in this place forms a binary tree".
It will automatically contact the police if two directly-linked houses were broken into on the same night.
Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example:
Input: [3,2,3,null,3,null,1]
     3
    / \
   2   3
    \   \
     3   1

Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

Input: [3,4,5,1,3,null,1]
     3
    / \
   4   5
  / \   \
 1   3   1

Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
=end

# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

def dfs(root)
  return [0, 0] unless root != nil
  if root.left == nil && root.right == nil then
    return [root.val, 0]
  end

  tmp1 = dfs(root.left)
  tmp2 = dfs(root.right)

  return [root.val + tmp1[1] + tmp2[1], tmp1.max + tmp2.max]
end

# @param {TreeNode} root
# @return {Integer}
def rob(root)
  dfs(root).max
end
