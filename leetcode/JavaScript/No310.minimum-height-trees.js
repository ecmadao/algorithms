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
  constructor(n, edges) {
    this.count = n;
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

class DFS {
  constructor(graph, point) {
    this.marked = {};
    this.paths = [];
    this.tmpPaths = [];

    this.dfs(graph, point);
  }

  dfs(graph, point) {
    this.marked[point] = true;
    this.tmpPaths.push(point);

    for (const p of graph.adj[point]) {
      if (!this.marked[p]) {
        if (graph.adj[p].length === 1) {
          this.marked[p] = true;
          if (this.tmpPaths.length + 1 > this.paths.length) {
            this.paths = [...this.tmpPaths, p];
          }
        } else {
          this.dfs(graph, p);
        }
      }
    }

    this.tmpPaths.pop();
  }
}

/**
* @param {number} n
* @param {number[][]} edges
* @return {number[]}
*/
var findMinHeightTrees = function(n, edges) {
  if (!edges.length) return [0];
  const graph = new Graph(n, edges);
  const result = [];
  let paths = [];

  for (let i = 0; i < graph.count; i += 1) {
    // get any foot node, dfs it to find all foot2foot path
    if (graph.adj[i].length === 1) {
      // DFS
      const dfs = new DFS(graph, i);
      if (dfs.paths.length > paths.length) {
        paths = dfs.paths;
      }
    }
  }

  const mid = Math.floor(paths.length / 2);
  if (mid * 2 === paths.length) {
    result.push(paths[mid - 1]);
  }
  result.push(paths[mid]);

  return result;
};
