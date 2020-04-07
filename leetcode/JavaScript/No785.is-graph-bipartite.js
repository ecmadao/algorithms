/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an undirected graph, return true if and only if it is bipartite.
 * Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.
 * The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.
 * Each node is an integer between 0 and graph.length - 1.
 * There are no self edges or parallel edges: graph[i] does not contain i,
 * and it doesn't contain any element twice.
 *
 * Example:
 * Input: [[1,3], [0,2], [1,3], [0,2]]
 * Output: true
 * Explanation:
 * The graph looks like this:
    0----1
    |    |
    |    |
    3----2
 * We can divide the vertices into two groups: {0, 2} and {1, 3}.
 *
 * Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
 * Output: false
 * Explanation:
 * The graph looks like this:
    0----1
    | \  |
    |  \ |
    3----2
 * We cannot find a way to divide the set of nodes into two independent subsets.
 *
 * Note:
 * - graph will have length in range [1, 100].
 * - graph[i] will contain integers in range [0, graph.length - 1].
 * - graph[i] will not contain i or duplicate values.
 * - The graph is undirected: if any element j is in graph[i], then i will be in graph[j].
 *
 * 给定一个无向图 graph，当这个图为二分图时返回 true。
 * 如果我们能将一个图的节点集合分割成两个独立的子集 A 和 B，并使图中的每一条边的两个节点一个来自 A 集合，一个来自 B 集合，我们就将这个图称为二分图。
 * graph 将会以邻接表方式给出，graph[i] 表示图中与节点 i 相连的所有节点。每个节点都是一个在 0 到 graph.length-1 之间的整数。这图中没有自环和平行边： graph[i] 中不存在 i，并且 graph[i] 中没有重复的值
 */


class CheckGraph {
  constructor() {
    this.marked = {};
    this.queue = [];
  }

  check(graph) {
    for (let i = 0; i < graph.length; i += 1) {
      if (this.marked[i] === undefined) {
        this.queue.push({
          p: i,
          s: -1
        });
        const r = this.bfs(graph);
        if (!r) return false;
      }
    }
    return true;
  }

  bfs(graph) {
    while (this.queue.length) {
      const item = this.queue.shift();
      const {
        p,
        s,
      } = item;
      this.marked[p] = s;

      const points = graph[p];
      const status = s * -1;
      for (const point of points) {
        if (this.marked[point] !== undefined && this.marked[point] !== status) {
          return false;
        } else if (this.marked[point] === undefined) {
          this.queue.push({
            p: point,
            s: status
          });
        }
      }
    }
    return true;
  }
}

/**
* @param {number[][]} graph
* @return {boolean}
*/
var isBipartite_1 = function(graph) {
  const checkGraph = new CheckGraph();
  const result = checkGraph.check(graph);
  return result;
};

/*
 * ======================== Solution 2 ========================
 * DFS
 * 判断二分图：DFS，使用两种颜色（例如利用 1 和 -1 表示），每次给边的两个顶点染色（不同颜色）。如果出现某个顶点，和其链接顶点的颜色一样，则不是二分图
 */

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite_2 = function(graph) {
  const map = new Set()

  const dfs = (point, status, cache) => {
    map.add(point)
    cache.set(point, status)

    const nextStatus = status * -1

    for (const p of (graph[point] || [])) {
      if (cache.has(p)) {
        const data = cache.get(p)
        if (data !== nextStatus) return false
      } else {
        let result = dfs(p, nextStatus, cache)
        if (!result) return false
      }
    }

    return true
  }

  for (let i = 0; i < graph.length; i += 1) {
    if (map.has(i)) continue
    const check = dfs(i, 1, new Map())
    if (!check) return false
  }

  return true
}
