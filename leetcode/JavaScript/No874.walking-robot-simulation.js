/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * A robot on an infinite grid starts at point (0, 0) and faces north.
 * The robot can receive one of three possible types of commands:
 * 1. -2: turn left 90 degrees
 * 2. -1: turn right 90 degrees
 * 3. 1 <= x <= 9: move forward x units
 *
 * Some of the grid squares are obstacles.
 * The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])
 * If the robot would try to move onto them, the robot stays on the previous grid square instead
 * (but still continues following the rest of the route.)
 *
 * Return the square of the maximum Euclidean distance that the robot will be from the origin.
 *
 * Example 1:
 * Input: commands = [4,-1,3], obstacles = []
 * Output: 25
 * Explanation: robot will go to (3, 4)
 *
 * Example 2:
 * Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
 * Output: 65
 * Explanation: robot will be stuck at (1, 4) before turning left and going to (1, 8)
 *
 * Note:
 * 1. 0 <= commands.length <= 10000
 * 2. 0 <= obstacles.length <= 10000
 * 3. -30000 <= obstacle[i][0] <= 30000
 * 4. -30000 <= obstacle[i][1] <= 30000
 * 5. The answer is guaranteed to be less than 2 ^ 31.
 *
 * 机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：
 * 1. -2：向左转 90 度
 * 2. -1：向右转 90 度
 * 3. 1 <= x <= 9：向前移动 x 个单位长度
 *
 * 在网格上有一些格子被视为障碍物。
 * 第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])
 * 如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。
 * 返回从原点到机器人的最大欧式距离的平方。
 */

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  const stones = {}
  for (const obstacle of obstacles) {
    const [i, j] = obstacle
    if (!stones[i]) stones[i] = {}
    stones[i][j] = true
  }

  const go = (coordinates, dir, step) => {
    let [i, j] = coordinates
    while (step) {
      i += dir[0]
      j += dir[1]
      if (stones[i] && stones[i][j]) return [i - dir[0], j - dir[1]]
      step -= 1
    }
    return [i, j]
  }

  const nextStatus = (status, direction) => {
    switch (status) {
      case 'N':
        return direction === -1 ? 'E' : 'W'
      case 'S':
        return direction === -1 ? 'W' : 'E'
      case 'E':
        return direction === -1 ? 'S' : 'N'
      case 'W':
        return direction === -1 ? 'N' : 'S'
    }
  }

  let i = 0
  let j = 0
  let max = 0
  let status = 'N'
  let offset = [0, 1]
  for (const cmd of commands) {
    if (cmd >= 1 && cmd <= 9) {
      const point = go([i, j], offset, cmd)
      i = point[0]
      j = point[1]
    } else {
      status = nextStatus(status, cmd)
      switch (status) {
        case 'N':
          offset = [0, 1]
          break
        case 'S':
          offset = [0, -1]
          break
        case 'E':
          offset = [1, 0]
          break
        case 'W':
          offset = [-1, 0]
          break
      }
      max = Math.max(max, i * i + j * j)
    }
  }

  return Math.max(max, i * i + j * j)
}
