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
 * 输入一个无向图，检测其是否是一个二分图。
 * 即，图内的每个边上的两点，分别属于两个集合
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
var isBipartite = function(graph) {
  const checkGraph = new CheckGraph();
  const result = checkGraph.check(graph);
  return result;
};
