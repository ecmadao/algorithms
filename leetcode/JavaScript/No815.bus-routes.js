/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * We have a list of bus routes. Each routes[i] is a bus route that the i-th bus repeats forever.
 * For example if routes[0] = [1, 5, 7], this means that the first bus (0-th indexed) travels in the sequence 1->5->7->1->5->7->1->... forever.
 * We start at bus stop S (initially not on a bus), and we want to go to bus stop T.
 * Travelling by buses only, what is the least number of buses we must take to reach our destination? Return -1 if it is not possible.
 *
 * Example:
 * Input:
 * routes = [[1, 2, 7], [3, 6, 7]]
 * S = 1
 * T = 6
 * Output: 2
 * Explanation:
 * The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
 *
 * Note:
 * 1. 1 <= routes.length <= 500.
 * 2. 1 <= routes[i].length <= 500.
 * 3. 0 <= routes[i][j] < 10 ^ 6.
 *
 * 我们有一系列公交路线。每一条路线 routes[i] 上都有一辆公交车在上面循环行驶。
 * 例如，有一条路线 routes[0] = [1, 5, 7]，表示第一辆 (下标为0) 公交车会一直按照 1->5->7->1->5->7->1->... 的车站路线行驶。
 * 假设我们从 S 车站开始（初始时不在公交车上），要去往 T 站。 期间仅可乘坐公交车，求出最少乘坐的公交车数量。返回 -1 表示不可能到达终点车站。
 */

/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 *
 * BFS
 */
var numBusesToDestination = function(routes, S, T) {
  const stations = {}
  for (let car = 0; car < routes.length; car += 1) {
    for (const station of routes[car]) {
      if (!stations[station]) stations[station] = []
      stations[station].push(car)
    }
  }

  if (!stations[S] || !stations[T]) return -1

  let count = 0
  const queue = [S]
  const marked = {
    car: {},
    station: {}
  }

  while (queue.length) {
    let len = queue.length
    while (len) {
      const station = queue.shift()
      if (station === T) return count

      for (const car of stations[station]) {
        if (marked.car[car]) continue
        marked.car[car] = true
        for (const s of routes[car]) {
          if (marked.station[s]) continue
          marked.station[s] = true
          queue.push(s)
        }
      }
      len -= 1
    }
    count += 1
  }

  return -1
}
