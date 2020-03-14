/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two sequences pushed and popped with distinct values,
 * return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.
 *
 * Example 1:
 * Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
 * Output: true
 * Explanation: We might do the following sequence:
 * push(1), push(2), push(3), push(4), pop() -> 4,
 * push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
 *
 * Example 2:
 * Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
 * Output: false
 * Explanation: 1 cannot be popped before 2.
 *
 * Note:
 * 1. 0 <= pushed.length == popped.length <= 1000
 * 2. 0 <= pushed[i], popped[i] < 1000
 * 3. pushed is a permutation of popped.
 * 4. pushed and popped have distinct values.
 *
 * 给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，
 * 只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const stack = []
  let i = 0
  for (const num of pushed) {
    stack.push(num)
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop()
      i += 1
    }
  }
  return stack.length === 0
}

// pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// [3, 2, 4, 0, 1]
