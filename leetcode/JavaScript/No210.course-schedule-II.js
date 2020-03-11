/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are a total of n courses you have to take, labeled from 0 to n - 1.
 * Some courses may have prerequisites,
 * for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 *
 * Given the total number of courses and a list of prerequisite pairs,
 * return the ordering of courses you should take to finish all courses.
 * There may be multiple correct orders, you just need to return one of them.
 * If it is impossible to finish all courses, return an empty array.
 *
 * Example:
 * 2, [[1,0]]
 * There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0. So the correct course order is [0,1]
 *
 * 4, [[1,0],[2,0],[3,1],[3,2]]
 * There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2.
 * Both courses 1 and 2 should be taken after you finished course 0.
 * So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].
 */


/**
 * 拓扑排序，逆后排序，在递归调用之后将顶点压入栈
 * 主要最后的结果里要加入独立的节点，即没有跟其他节点连接的节点
 */

class Graph {
  constructor(edges, full) {
    this.adj = {}
    this.full = new Set(full)
    this.init(edges)
  }

  init(edges) {
    for (const edge of edges) {
      if (!this.adj[edge[0]]) this.adj[edge[0]] = []
      if (!this.adj[edge[1]]) this.adj[edge[1]] = []

      this.full.delete(edge[0])
      this.full.delete(edge[1])

      this.adj[edge[1]].push(edge[0])
    }
  }
}

class DFS {
  constructor() {
    this.pathes = []
    this.tmp = {}
    this.hasCircle = false
  }

  dfs(graph, point, marked) {
    if (marked[point]) this.hasCircle = true
    if (this.hasCircle) return
    if (this.tmp[point]) return

    this.tmp[point] = true
    marked[point] = true

    for (const p of graph.adj[point]) {
      if (marked[p]) this.hasCircle = true
      if (this.hasCircle) return
      if (!this.tmp[p]) this.dfs(graph, p, marked)
    }
    this.pathes.unshift(point)
    marked[point] = false
  }
}

/**
* @param {number} numCourses
* @param {number[][]} prerequisites
* @return {number[]}
* 拓扑排序/逆后排序
*/
var findOrder_1 = function(numCourses, prerequisites) {
  const full = Array.from({ length: numCourses }, (_, i) => i)
  if (!prerequisites.length) return full
  const graph = new Graph(prerequisites, full)

  const dfs = new DFS()

  for (const i of Object.keys(graph.adj)) {
    if (dfs.hasCircle) return []
    dfs.dfs(graph, i, {})
  }
  if (dfs.hasCircle) return []
  return [...dfs.pathes, ...graph.full]
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder_2 = function(numCourses, prerequisites) {
  const adjs = {}
  const visited = {}
  const individuals = new Set(
    Array.from({ length: numCourses }, (_, i) => i)
  )
  for (const [i, j] of prerequisites) {
    if (!adjs[j]) adjs[j] = []
    adjs[j].push(i)
    individuals.delete(i)
    individuals.delete(j)
  }

  const pathes = [...individuals]

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
    pathes.unshift(i)
    return true
  }

  for (const key of Object.keys(adjs)) {
    const res = dfs(key, {})
    if (!res) return []
  }
  return pathes
}

console.log(
  findOrder_2(2, [[0, 1]])
)
console.log(
  findOrder_2(2, [[1, 0]])
)
console.log(
  findOrder_2(3, [[1, 0]])
)
console.log(
  findOrder_2(4, [[1, 0], [2, 0], [3, 1], [3, 2]])
)
