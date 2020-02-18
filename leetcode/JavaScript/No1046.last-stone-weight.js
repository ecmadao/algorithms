/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * We have a collection of rocks, each rock has a positive integer weight.
 * Each turn, we choose the two heaviest rocks and smash them together.
 * Suppose the stones have weights x and y with x <= y.  The result of this smash is:
 * 1. If x == y, both stones are totally destroyed;
 * 2. If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
 * At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)
 *
 * Example 1:
 * Input: [2,7,4,1,8,1]
 * Output: 1
 * Explanation:
 * 1. We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
 * 2. we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
 * 3. we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
 * 4. we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 *
 * Note:
 * 1. 1 <= stones.length <= 30
 * 2. 1 <= stones[i] <= 1000
 *
 * 有一堆石头，每块石头的重量都是正整数。
 * 每一回合，从中选出两块最重的石头，然后将它们一起粉碎。
 * 假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 * 1. 如果 x == y，那么两块石头都会被完全粉碎；
 * 2. 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  stones.sort((s1, s2) => s1 - s2)

  while (stones.length > 1) {
    const diff = stones.pop() - stones.pop()
    let i = 0
    while (stones[i] < diff) i += 1
    stones.splice(i, 0, diff)
  }

  return stones.length ? stones[0] : 0
}
