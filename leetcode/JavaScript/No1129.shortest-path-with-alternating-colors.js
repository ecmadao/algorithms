/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Consider a directed graph, with nodes labelled 0, 1, ..., n-1.
 * In this graph, each edge is either red or blue, and there could be self-edges or parallel edges.
 * Each [i, j] in red_edges denotes a red directed edge from node i to node j.
 * Similarly, each [i, j] in blue_edges denotes a blue directed edge from node i to node j.
 * Return an array answer of length n, where each answer[X] is the length of the shortest path from node 0 to node X such that the edge colors alternate along the path (or -1 if such a path doesn't exist).
 *
 * Example 1:
 * Input: n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
 * Output: [0,1,-1]
 *
 * Example 2:
 * Input: n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
 * Output: [0,1,-1]
 *
 * Example 3:
 * Input: n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]
 * Output: [0,-1,-1]
 *
 * Example 4:
 * Input: n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]
 * Output: [0,1,2]
 *
 * Example 5:
 * Input: n = 3, red_edges = [[0,1],[0,2]], blue_edges = [[1,0]]
 * Output: [0,1,1]
 *
 * Constraints:
 * 1. 1 <= n <= 100
 * 2. red_edges.length <= 400
 * 3. blue_edges.length <= 400
 * 4. red_edges[i].length == blue_edges[i].length == 2
 * 5. 0 <= red_edges[i][j], blue_edges[i][j] < n
 *
 * 在一个有向图中，节点分别标记为 0, 1, ..., n-1。这个图中的每条边不是红色就是蓝色，且存在自环或平行边。
 * red_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的红色有向边。类似地，blue_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的蓝色有向边。
 * 返回长度为 n 的数组 answer，其中 answer[X] 是从节点 0 到节点 X 的最短路径的长度，且路径上红色边和蓝色边交替出现。如果不存在这样的路径，那么 answer[x] = -1
 */

/**
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, red_edges, blue_edges) {
  if (!n) return []

  const red = red_edges.reduce((dict, [from, to]) => {
    if (!dict[from]) dict[from] = []
    dict[from].push(to)
    return dict
  }, {})
  const blue = blue_edges.reduce((dict, [from, to]) => {
    if (!dict[from]) dict[from] = []
    dict[from].push(to)
    return dict
  }, {})

  const result = Array.from({ length: n }, (_, i) => Infinity)

  const dfs = (point, step, color, marked) => {
    result[point] = Math.min(step, result[point])

    const graph = color === 'red' ? blue : red
    const curColor = color === 'red' ? 'blue' : 'red'

    for (const p of graph[point] || []) {
      if (p === 0) continue
      if (marked[`${point}-${p}-${curColor}`] && marked[`${point}-${p}-${curColor}`] <= step + 1) continue
      marked[`${point}-${p}-${curColor}`] = step + 1
      dfs(p, step + 1, curColor, marked)
    }
  }

  dfs(0, 0, 'blue', {})
  dfs(0, 0, 'red', {})

  for (let i = 1; i < n; i += 1) {
    if (result[i] === Infinity) result[i] = -1
  }
  return result
}
