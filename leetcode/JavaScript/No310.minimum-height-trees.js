/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * For a undirected graph with tree characteristics, we can choose any node as the root.
 * The result graph is then a rooted tree. Among all possible rooted trees,
 * those with minimum height are called minimum height trees (MHTs).
 * Given such a graph, write a function to find all the MHTs and return a list of their root labels.
 *
 * Format
 * The graph contains n nodes which are labeled from 0 to n - 1.
 * You will be given the number n and a list of undirected edges (each edge is a pair of labels).
 * You can assume that no duplicate edges will appear in edges.
 * Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
 *
 * Example:
 * Given n = 4, edges = [[1, 0], [1, 2], [1, 3]], return [1]
 *      0
        |
        1
       / \
      2   3
 *
 * Given n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]], return [3, 4]
 *   0  1  2
      \ | /
        3
        |
        4
        |
        5
 *
 * Note:
 * 1. According to the definition of tree on Wikipedia:
 *  “a tree is an undirected graph in which any two vertices are connected by exactly one path.
 *  In other words, any connected graph without simple cycles is a tree.”
 * 2. The height of a rooted tree is the number of edges on the longest downward path between the root
 *  and a leaf.
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
      this.adj[edge[1]].push(edge[0])
    }
  }
}

class DFS {
  constructor(graph, val) {
    this.marked = {}
    this.pathes = []
    this.tmp = []
    this.dfs(graph, val)
  }

  dfs(graph, val) {
    if (this.marked[val]) {
      if (this.tmp.length > this.pathes.length) this.pathes = [...this.tmp]
      return
    }

    this.marked[val] = true
    this.tmp.push(val)

    for (const point of graph.adj[val]) {
      this.dfs(graph, point)
    }
    this.tmp.pop()
  }
}

/**
* @param {number} n
* @param {number[][]} edges
* @return {number[]}
*/
var findMinHeightTrees = function(n, edges) {
  if (!edges.length) return [0]

  const graph = new Graph(edges)
  let pathes = []

  for (let i = 0; i < n; i += 1) {
    if (graph.adj[i].length === 1) {
      const dfs = new DFS(graph, i)
      if (dfs.pathes.length > pathes.length) pathes = dfs.pathes
    }
  }
  const results = [
    pathes[Math.floor(pathes.length / 2)]
  ]
  if (pathes.length % 2 === 0) results.push(
    pathes[pathes.length / 2 - 1]
  )
  return results
}
