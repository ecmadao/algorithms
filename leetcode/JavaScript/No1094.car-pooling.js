/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are driving a vehicle that has capacity empty seats initially available for passengers.
 * The vehicle only drives east (ie. it cannot turn around and drive west.)
 * Given a list of trips, trip[i] = [num_passengers, start_location, end_location] contains information about the i-th trip:
 * - the number of passengers that must be picked up
 * - and the locations to pick them up and drop them off.
 * The locations are given as the number of kilometers due east from your vehicle's initial location.
 * Return true if and only if it is possible to pick up and drop off all passengers for all the given trips.
 *
 * Example 1:
 * Input: trips = [[2,1,5],[3,3,7]], capacity = 4
 * Output: false
 *
 * Example 2:
 * Input: trips = [[2,1,5],[3,3,7]], capacity = 5
 * Output: true
 *
 * Example 3:
 * Input: trips = [[2,1,5],[3,5,7]], capacity = 3
 * Output: true
 *
 * Example 4:
 * Input: trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
 * Output: true
 *
 * Constraints:
 * 1. trips.length <= 1000
 * 2. trips[i].length == 3
 * 3. 1 <= trips[i][0] <= 100
 * 4. 0 <= trips[i][1] < trips[i][2] <= 1000
 * 5. 1 <= capacity <= 100000
 *
 * 假设你是一位顺风车司机，车上最初有 capacity 个空座位可以用来载客。
 * 由于道路的限制，车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向，你可以将其想象为一个向量）。
 * 这儿有一份行程计划表 trips[][]，其中 trips[i] = [num_passengers, start_location, end_location] 包含了你的第 i 次行程信息：
 * - 必须接送的乘客数量；
 * - 乘客的上车地点；
 * - 以及乘客的下车地点。
 * 这些给出的地点位置是从你的 初始 出发位置向前行驶到这些地点所需的距离（它们一定在你的行驶方向上）。
 * 请你根据给出的行程计划表和车子的座位数，来判断你的车是否可以顺利完成接送所用乘客的任务（当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false）
 */

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  const seats = []
  for (const [k, i, j] of trips) {
    seats[i] = (seats[i] || 0) + k
    seats[j] = (seats[j] || 0) - k
  }

  for (let i = 1; i < seats.length; i += 1) {
    seats[i] = (seats[i] || 0) + (seats[i - 1] || 0)
    if (seats[i] > capacity) return false
  }
  return true
}
