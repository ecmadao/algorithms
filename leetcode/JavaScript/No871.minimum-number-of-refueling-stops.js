/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * A car travels from a starting position to a destination which is target miles east of the starting position.
 * Along the way, there are gas stations.  Each station[i] represents a gas station that is station[i][0] miles east of the starting position, and has station[i][1] liters of gas.
 * The car starts with an infinite tank of gas, which initially has startFuel liters of fuel in it.  It uses 1 liter of gas per 1 mile that it drives.
 * When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car.
 * What is the least number of refueling stops the car must make in order to reach its destination?  If it cannot reach the destination, return -1.
 * Note that if the car reaches a gas station with 0 fuel left, the car can still refuel there.  If the car reaches the destination with 0 fuel left, it is still considered to have arrived.
 *
 * Example 1:
 * Input: target = 1, startFuel = 1, stations = []
 * Output: 0
 * Explanation: We can reach the target without refueling.
 *
 * Example 2:
 * Input: target = 100, startFuel = 1, stations = [[10,100]]
 * Output: -1
 * Explanation: We can't reach the target (or even the first gas station).
 *
 * Example 3:
 * Input: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
 * Output: 2
 * Explanation:
 * We start with 10 liters of fuel.
 * We drive to position 10, expending 10 liters of fuel.  We refuel from 0 liters to 60 liters of gas.
 * Then, we drive from position 10 to position 60 (expending 50 liters of fuel),
 * and refuel from 10 liters to 50 liters of gas.  We then drive to and reach the target.
 * We made 2 refueling stops along the way, so we return 2.
 *
 * Note:
 * 1. 1 <= target, startFuel, stations[i][1] <= 10^9
 * 2. 0 <= stations.length <= 500
 * 3. 0 < stations[0][0] < stations[1][0] < ... < stations[stations.length-1][0] < target
 *
 * 汽车从起点出发驶向目的地，该目的地位于出发位置东面 target 英里处。
 * 沿途有加油站，每个 station[i] 代表一个加油站，它位于出发位置东面 station[i][0] 英里处，并且有 station[i][1] 升汽油。
 * 假设汽车油箱的容量是无限的，其中最初有 startFuel 升燃料。它每行驶 1 英里就会用掉 1 升汽油。
 * 当汽车到达加油站时，它可能停下来加油，将所有汽油从加油站转移到汽车中。
 * 为了到达目的地，汽车所必要的最低加油次数是多少？如果无法到达目的地，则返回 -1 。
 * 注意：如果汽车到达加油站时剩余燃料为 0，它仍然可以在那里加油。如果汽车到达目的地时剩余燃料为 0，仍然认为它已经到达目的地
 */

/**
 * =============================== Solution 1 ===============================
 * 动态规划
 * 注意转换思维：
 * dp[i] 代表加 i 次油后，最远可以走到的位置
 * 我们只需要求出每次加油后最远可以走到的位置，然后选出第一个距离 > target 的 i 就是最少加油次数
 */

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops_1 = function(target, startFuel, stations) {
  if (startFuel >= target) return 0
  if (stations.length && stations[0][0] > startFuel) return -1

  const dp = []
  dp[0] = startFuel

  for (let i = 0; i < stations.length; i += 1) {
    dp[i + 1] = 0
    const station = stations[i]

    for (let j = i; j >= 0; j -= 1) {
      if (dp[j] >= station[0]) {
        dp[j + 1] = Math.max(dp[j + 1], dp[j] + station[1])
      }
    }
  }

  for (let i = 0; i < dp.length; i += 1) {
    if (!dp[i]) break
    if (dp[i] >= target) return i
  }
  return -1
}

/**
 * =============================== Solution 2 ===============================
 * 贪心 + 最大堆
 * 基本思路：
 * 每次有油的时候都尽量向前跑，只有需要加油的时候，往回寻找没有使用过的加油站，
 * 且该加油站是所有可用加油站中，提供最多油的那个
 */

class Heap {
  constructor(less, init) {
    this.less = less
    this.queue = init
  }

  sortWithChildren(pos) {
    const c1 = pos * 2
    if (c1 - 1 >= this.queue.length) return
    if (this.less(this.queue[pos - 1], this.queue[c1 - 1])) {
      const tmp = this.queue[pos - 1]
      this.queue[pos - 1] = this.queue[c1 - 1]
      this.queue[c1 - 1] = tmp
    }

    const c2 = c1 + 1
    if (c2 - 1 >= this.queue.length) return
    if (this.less(this.queue[pos - 1], this.queue[c2 - 1])) {
      const tmp = this.queue[pos - 1]
      this.queue[pos - 1] = this.queue[c2 - 1]
      this.queue[c2 - 1] = tmp
    }

    this.sortWithChildren(c1)
    this.sortWithChildren(c2)
  }

  shift() {
    if (!this.queue.length) return null
    const tail = this.queue.pop()
    if (!this.queue.length) return tail

    const head = this.queue[0]
    this.queue[0] = tail
    this.sortWithChildren(1)
    return head
  }

  push(val) {
    this.queue.push(val)
    this.sortWithFather(this.queue.length)
  }

  sortWithFather(pos) {
    if (pos <= 1) return
    const f = Math.floor(pos / 2)
    if (this.less(this.queue[f - 1], this.queue[pos - 1])) {
      const tmp = this.queue[pos - 1]
      this.queue[pos - 1] = this.queue[f - 1]
      this.queue[f - 1] = tmp
    }
    this.sortWithFather(f)
  }
}

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops_2 = function(target, startFuel, stations) {
  if (startFuel >= target) return 0
  if (stations.length && stations[0][0] > startFuel) return -1

  const less = (s1, s2) => s1[1] < s2[1]
  const heap = new Heap(less, [])

  let count = 0
  let dis = startFuel
  for (const station of stations) {
    while (dis < station[0]) {
      const sta = heap.shift()
      if (!sta) return -1
      dis += sta[1]
      count += 1
    }
    heap.push(station)
  }

  while (dis < target) {
    const station = heap.shift()
    if (!station) return -1
    dis += station[1]
    count += 1
  }
  return count
}
