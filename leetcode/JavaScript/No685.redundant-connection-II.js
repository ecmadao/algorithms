/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * In this problem, a rooted tree is a directed graph such that,
 * there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent,
 * except for the root node which has no parents.
 * The given input is a directed graph that started as a rooted tree with N nodes (with distinct values 1, 2, ..., N),
 * with one additional directed edge added.
 * The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.
 *
 *  The resulting graph is given as a 2D-array of edges.
 * Each element of edges is a pair [u, v] that represents a directed edge connecting nodes u and v,
 * where u is a parent of child v.
 *
 * Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes.
 * If there are multiple answers, return the answer that occurs last in the given 2D-array.
 *
 * Example:
 * Input: [[1,2], [1,3], [2,3]]
 * Output: [2,3]
 * Explanation: The given directed graph will be like this:
      1
     / \
    v   v
    2-->3
 *
 * Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
 * Output: [4,1]
 * Explanation: The given directed graph will be like this:
     5 <- 1 -> 2
          ^    |
          |    v
          4 <- 3
 *
 * Note:
 * The size of the input 2D-array will be between 3 and 1000.
 * Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.
 *
 * 定义一组图，可以组成如下合法的树：
 * 1. 输入的数组中，每一位上的数组里，表示从父节点到子节点的有向连接
 * 2. 对一个合法的树而言，除根节点没有父节点以外，其他每个节点都有一个父节点
 *
 * 现在在输入的数组中再插入一个有向连接，使得树不合法。找出那组连接
 */

class Digraph {
  constructor(edges) {
    this.adj = {};
    this.father = {};
    this.points = new Set([]);
    this.init(edges);
  }

  init(edges) {
    for (const edge of edges) {
      const p1 = edge[0];
      const p2 = edge[1];

      if (!this.adj[p1]) this.adj[p1] = new Set([]);
      if (!this.father[p2]) this.father[p2] = new Set([]);

      this.adj[p1].add(p2);
      this.father[p2].add(p1);

      this.points.add(p1);
      this.points.add(p2);
    }
  }

  get size() {
    return this.points.size;
  }
}

class CycleDigraph {
  constructor(digraph) {
    this.marked = {};
    this.count = 0;

    for (const point of digraph.points.values()) {
      const fathers = digraph.father[point];
      if (!fathers || !fathers.size) {
        this.dfs(digraph, point);
        break;
      }
    }
  }

  dfs(digraph, point) {
    this.marked[point] = true;
    this.count += 1;
    const points = digraph.adj[point];

    if (!points) return;
    for (const p of points) {
      if (!this.marked[p]) {
        this.dfs(digraph, p);
      }
    }
  }
}

/**
* @param {number[][]} edges
* @return {number[]}
*/
var findRedundantDirectedConnection = function(edges) {
  if (!edges.length) return [];
  const digraph = new Digraph(edges);

  while (edges.length) {
    const edge = edges.pop();
    const [father, child] = edge;

    digraph.adj[father].delete(child);
    digraph.father[child].delete(father);

    const cycleDigraph = new CycleDigraph(digraph);
    if (cycleDigraph.count === digraph.size) return edge;

    digraph.adj[father].add(child);
    digraph.father[child].add(father);
  }
  return [];
};

