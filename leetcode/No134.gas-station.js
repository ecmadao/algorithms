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
 * 已知两个数组：
 * 第一个数组 gas 代表环形赛道上的加油站，各个值则是赛车在该加油站可以填充的油量
 * 第二个数组 cost 则代表赛车到底各站需要消耗的油量，cost[i] 代表从 i 站到 i +1 站消耗的油量
 * 且已知赛车出发时剩余油量为空，且车辆可容纳的油量为无限大。要求求出从哪一站出发，赛车可以成功环绕一圈。
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  if (!gas.length || !cost.length) return -1;
  const tmp = {};

  // 计算赛车在剩余油量为 remained 的时候，从 stationIndex 出发，是否可以成功到达下一站
  // 需要缓存结果来加速算法
  const canGoNext = (remained, stationIndex, maxIndex) => {
    const key = `${stationIndex}-${maxIndex}`;
    if (tmp[key] !== undefined) {
      return tmp[key] + remained;
    }
    if (stationIndex > maxIndex) return remained;
    const nextRemain = remained + gas[stationIndex] - cost[stationIndex];
    if (nextRemain < 0) return nextRemain;
    const result = canGoNext(nextRemain, stationIndex + 1, maxIndex);
    tmp[key] = result - remained;
    return result;
  };

  for (let i = 0; i < gas.length; i += 1) {
    const goForwardRemained = canGoNext(0, i, gas.length - 1);
    if (goForwardRemained >= 0) {
      const finalRemained = canGoNext(goForwardRemained, 0, i);
      if (finalRemained >= 0) return i;
    }
  }
  return -1;
};
