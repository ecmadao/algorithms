/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are N gas stations along a circular route, where the amount of gas at station i is gas[i].
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1).
 * You begin the journey with an empty tank at one of the gas stations.
 * Return the starting gas station's index if you can travel around the circuit once,
 * otherwise return -1.
 *
 * Note:
 * The solution is guaranteed to be unique.
 *
 * 在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
 * 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
 * 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let total = 0
  let current = 0
  let index = 0

  for (let i = 0; i < gas.length; i += 1) {
    total += (gas[i] - cost[i])
    current += (gas[i] - cost[i])
    if (current < 0) {
      index = i + 1
      current = 0
    }
  }
  return total >= 0 ? index : -1
}
