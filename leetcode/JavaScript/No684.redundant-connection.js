/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In this problem, a tree is an undirected graph that is connected and has no cycles.
 * The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N),
 * with one additional edge added. The added edge has two different vertices chosen from 1 to N,
 * and was not an edge that already existed.
 *
 * The resulting graph is given as a 2D-array of edges.
 * Each element of edges is a pair [u, v] with u < v,
 * that represents an undirected edge connecting nodes u and v.
 *
 * Return an edge that can be removed so that the resulting graph is a tree of N nodes.
 * If there are multiple answers, return the answer that occurs last in the given 2D-array.
 * The answer edge [u, v] should be in the same format, with u < v.
 *
 * Example:
 * Input: [[1,2], [1,3], [2,3]]
 * Output: [2,3]
 * Explanation: The given undirected graph will be like this:
      1
    / \
    2 - 3
 *
 * Input: [[1,2], [2,3], [3,4], [1,4], [1,5]]
 * Output: [1,4]
 * Explanation: The given undirected graph will be like this:
    5 - 1 - 2
        |   |
        4 - 3
 *
 * Input 内各个数组代表无向连接的两个节点。先数组内有某些连接使得图形成了环，需要找出这样不合法发连接。
 * 如果有多个非法连接，则返回输入的数组中位置靠后的那个
 */

class Graph {
  constructor(edges) {
    this.adj = [];
    this.init(edges);
  }

  init(edges) {
    for (const edge of edges) {
      const p1 = edge[0];
      const p2 = edge[1];

      if (!this.adj[p1]) this.adj[p1] = [];
      if (!this.adj[p2]) this.adj[p2] = [];

      this.adj[p1].push(p2);
      this.adj[p2].push(p1);
    }
  }
}

class CycleChecker {
  constructor(graph, p1, p2) {
    this.marked = {};
    this.inCycle = false;
    this.target = p2;
    this.start = p1;

    if (graph.adj[p1].length >= 2 && graph.adj[p2].length >= 2) {
      this.marked[p1] = true;
      for (const p of graph.adj[p1]) {
        if (p !== p2 && !this.inCycle && !this.marked[p]) {
          this.dfs(graph, p);
        }
      }
    }
  }

  dfs(graph, point) {
    if (this.inCycle) return;
    this.marked[point] = true;

    for (const p of graph.adj[point]) {
      if (p === this.target) {
        this.inCycle = true;
        return;
      }
      if (!this.marked[p]) {
        this.dfs(graph, p);
      }
    }
    this.marked[point] = false;
  }
}

/**
* @param {number[][]} edges
* @return {number[]}
*/
var findRedundantConnection = function(edges) {
  if (!edges.length) return [];
  const graph = new Graph(edges);

  while (edges.length) {
    const points = edges.pop();
    const cycleChecker = new CycleChecker(graph, points[0], points[1]);
    if (cycleChecker.inCycle) {
      return points;
    }
  }
  return [];
};
