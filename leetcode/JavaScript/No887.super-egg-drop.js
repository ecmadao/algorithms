/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * You are given K eggs, and you have access to a building with N floors from 1 to N. 
 * Each egg is identical in function, and if an egg breaks, you cannot drop it again.
 * You know that there exists a floor F with 0 <= F <= N such that any egg dropped at a floor higher than F will break, and any egg dropped at or below floor F will not break.
 * Each move, you may take an egg (if you have an unbroken one) and drop it from any floor X (with 1 <= X <= N). 
 * Your goal is to know with certainty what the value of F is.
 * What is the minimum number of moves that you need to know with certainty what F is, regardless of the initial value of F?
 * 
 * Example 1:
 * Input: K = 1, N = 2
 * Output: 2
 * Explanation: 
 * Drop the egg from floor 1.  If it breaks, we know with certainty that F = 0.
 * Otherwise, drop the egg from floor 2.  If it breaks, we know with certainty that F = 1.
 * If it didn't break, then we know with certainty F = 2.
 * Hence, we needed 2 moves in the worst case to know what F is with certainty.
 * 
 * Example 2:
 * Input: K = 2, N = 6
 * Output: 3
 * 
 * Example 3:
 * Input: K = 3, N = 14
 * Output: 4
 * 
 * Note:
 * 1 <= K <= 100
 * 1 <= N <= 10000
 * 
 * 你将获得 K 个鸡蛋，并可以使用一栋从 1 到 N  共有 N 层楼的建筑。
 * 每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。
 * 你知道存在楼层 F ，满足 0 <= F <= N 任何从高于 F 的楼层落下的鸡蛋都会碎，从 F 楼层或比它低的楼层落下的鸡蛋都不会破。
 * 每次移动，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层 X 扔下（满足 1 <= X <= N）。
 * 你的目标是确切地知道 F 的值是多少。
 * 无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？
 */

/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 * 
 * 尽量用完鸡蛋
 * 在所有可能中寻找移动最少次的
 * 
 * 最糟糕情况下的最小移动次数
 */
var superEggDrop = function(K, N) {
  const cache = {}
  const search = (k, n) => {
    if (k === 1) return n
    if (n === 0) return 0

    const key = `${k}-${n}`
    if (cache[key] !== undefined) return cache[key]

    let res = Infinity

    let i = 1
    let j = n
    while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      const broken = search(k - 1, mid - 1)
      const unbroken = search(k, n - mid)
      if (broken === unbroken) {
        res = Math.min(res, broken + 1)
        break
      }
      if (broken > unbroken) {
        j = mid - 1
        res = Math.min(res, broken + 1)
      } else {
        i = mid + 1
        res = Math.min(res, unbroken + 1)
      }
    }

    cache[key] = res
    return res

    // 碎了, F < mid
    // if (egg > 0) search(i, mid - 1, count + 1, egg - 1)
    // 没碎, F >= mid
    // search(mid + 1, j, count + 1, egg)
  }

  return search(K, N)
};

/**
* K = 2, [1,2,3,4,5,6,7]
* i = 0, j = 6, mid = 3, K = 2
* 碎了: F < 3
*  i = 0, j = 2, mid = 1, K = 1
*  
* 
* 没碎: F >= 3
* 
* 
* K = 1, [1,2,3,4,5], i = 0, j = 4
* mid = 2, num = 3
* 碎了: F < 2
*  i = 0, j = 1
*  mid = 0, num = 1
*    碎了: F < 0
*    没碎: F >= 0
*      i = 1, j = 1
*      mid = 1, num = 2
*        碎了: F < 1
*        没碎: F >= 1
* 
* 没碎: F >= 2
*  i = 3, j = 4
*  mid = 3, num = 4
*    碎了: F < 3
*      i = 3, j = 2
*    没碎: F >= 3
*      i = 4, j = 4
*      mid = 4, num = 5
*        碎了: F < 4
*        没碎: F >= 4
* 
* [1,2,3,4,5,6], i = 0, j = 5
* mid = 2, num = 3
* 碎了: F < 2
*  i = 0, j = 1
*  mid = 0, num = 1
*    碎了：F < 0，只能为 0
*    没碎：F >= 0
*      i = 1, j = 1
*      mid = 1, num = 2
*      碎了：F < 1，只能为 0
*      没碎：F >= 1，只能为 1
* 没碎：F >= 2
*  i = 3, j = 5
*  mid = 4, num = 5
*    碎了：F < 4
*      i = 3, j = 3
*      mid = 3, num =4
*      碎了：F < 3，只能为 2
*      没碎：F >= 3，只能为 3
*    没碎：F >= 4
*      i = 5, j = 5
*      mid = 5, num = 6
*      碎了：F < 5，只能为 4
*      没碎：F >= 5，只能为 5
*/