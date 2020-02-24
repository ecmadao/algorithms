/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * On an infinite number line, the position of the i-th stone is given by stones[i].
 * Call a stone an endpoint stone if it has the smallest or largest position.
 * Each turn, you pick up an endpoint stone and move it to an unoccupied position so that it is no longer an endpoint stone.
 * In particular, if the stones are at say, stones = [1,2,5], you cannot move the endpoint stone at position 5, since moving it to any position (such as 0, or 3) will still keep that stone as an endpoint stone.
 * The game ends when you cannot make any more moves, ie. the stones are in consecutive positions.
 * When the game ends, what is the minimum and maximum number of moves that you could have made?
 * Return the answer as an length 2 array: answer = [minimum_moves, maximum_moves]
 * 
 * Example 1:
 * Input: [7,4,9]
 * Output: [1,2]
 * Explanation: 
 * We can move 4 -> 8 for one move to finish the game.
 * Or, we can move 9 -> 5, 4 -> 6 for two moves to finish the game.
 * 
 * Example 2:
 * Input: [6,5,4,3,10]
 * Output: [2,3]
 * We can move 3 -> 8 then 10 -> 7 to finish the game.
 * Or, we can move 3 -> 7, 4 -> 8, 5 -> 9 to finish the game.
 * Notice we cannot move 10 -> 2 to finish the game, because that would be an illegal move.
 * 
 * Example 3:
 * Input: [100,101,104,102,103]
 * Output: [0,0]
 * 
 * Note:
 * 1. 3 <= stones.length <= 10^4
 * 2. 1 <= stones[i] <= 10^9
 * 3. stones[i] have distinct values.
 * 
 * 在一个长度无限的数轴上，第 i 颗石子的位置为 stones[i]。如果一颗石子的位置最小/最大，那么该石子被称作端点石子。
 * 每个回合，你可以将一颗端点石子拿起并移动到一个未占用的位置，使得该石子不再是一颗端点石子。
 * 值得注意的是，如果石子像 stones = [1,2,5] 这样，你将无法移动位于位置 5 的端点石子，因为无论将它移动到任何位置（例如 0 或 3），该石子都仍然会是端点石子。
 * 当你无法进行任何移动时，即，这些石子的位置连续时，游戏结束。
 * 要使游戏结束，你可以执行的最小和最大移动次数分别是多少？
 * 以长度为 2 的数组形式返回答案：answer = [minimum_moves, maximum_moves] 
 */

/**
 * @param {number[]} stones
 * @return {number[]}
 *
 * https://leetcode-cn.com/problems/moving-stones-until-consecutive-ii/solution/jie-ti-si-lu-by-owenzzz/
 * 
 * 最小值：
 * 如果最后游戏结束，那么一定有 n 个连续坐标摆满了石子。如果我们要移动最少，必定要找一个石子序列，使得在 n 大小连续的坐标内，初始时有最多的石子
 */
var numMovesStonesII = function(stones) {
  stones.sort((s1, s2) => s1 - s2)
  const max = stones[stones.length - 1] - stones[0] + 1 - stones.length - Math.min(
    stones[stones.length - 1] - stones[stones.length - 2] - 1,
    stones[1] - stones[0] - 1
  )

  let min = Infinity
  for (let i = 0; i < stones.length; i += 1) {
    let j = i + 1
    while (j < stones.length && stones[j] - stones[i] + 1 <= stones.length) j += 1

    let step = stones.length - (j - i)
    // 1, 2, 3, 4, 7
    if (j - i === stones.length - 1 && stones[j - 1] - stones[i] + 1 === stones.length - 1) step = 2
    min = Math.min(min, step)
  }

  return [min, max]
}
