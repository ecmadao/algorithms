/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are a total of n courses you have to take, labeled from 0 to n - 1.
 * Some courses may have prerequisites,
 * for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
 *
 * Example:
 * 2, [[1,0]]
 * There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0. So it is possible.
 *
 * 2, [[1,0],[0,1]]
 * There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 *
 * 有向图，关于任务调度的应用。即基本要求，有向图中不能有环
 */

class Graph {
  constructor(edges) {
    this.adj = []
    this.init(edges)
  }

  init(edges) {
    for (const edge of edges) {
      if (!this.adj[edge[0]]) this.adj[edge[0]] = []
      if (!this.adj[edge[1]]) this.adj[edge[1]] = []

      this.adj[edge[0]].push(edge[1])
    }
  }

  hasCircle(point, tmp = {}) {
    if (!this.adj[point]) return false
    if (tmp[point]) return true

    tmp[point] = true
    for (const p of this.adj[point]) {
      const check = this.hasCircle(p, tmp)
      if (check) return true
    }
    tmp[point] = false
    return false
  }
}

/**
* @param {number} numCourses
* @param {number[][]} prerequisites
* @return {boolean}
*/
var canFinish_1 = function(numCourses, prerequisites) {
  const graph = new Graph(prerequisites)

  for (let i = 0; i < numCourses; i += 1) {
    const hasCircle = graph.hasCircle(i)
    if (hasCircle) return false
  }
  return true
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish_2 = function(numCourses, prerequisites) {
  const adjs = {}
  const visited = {}

  for (const [i, j] of prerequisites) {
    if (!adjs[i]) adjs[i] = []
    adjs[i].push(j)
  }

  const dfs = (i, marked) => {
    if (visited[i]) return true
    visited[i] = true
    marked[i] = true

    for (const p of adjs[i] || []) {
      if (marked[p]) return false
      const res = dfs(p, marked)
      if (!res) return false
    }
    marked[i] = false
    return true
  }

  for (const key of Object.keys(adjs)) {
    const res = dfs(key, {})
    if (!res) return false
  }

  return true
}

console.log(
  canFinish_2(2, [[1,0],[0,1]]) // false
)
console.log(
  canFinish_2(3, [[0,1],[0,2],[1,2]]) // true
)
