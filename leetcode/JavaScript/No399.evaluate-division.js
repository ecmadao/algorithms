/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Equations are given in the format A / B = k,
 * where A and B are variables represented as strings,
 * and k is a real number (floating point number).
 * Given some queries, return the answers. If the answer does not exist, return -1.0.
 *
 * Example:
 * Given a / b = 2.0, b / c = 3.0.
 * queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
 * return [6.0, 0.5, -1.0, 1.0, -1.0 ].
 *
 * The input is always valid.
 * You may assume that evaluating the queries will result in no division by zero and there is no contradiction.
 */


class Graph {
  constructor(edges, weights) {
    this.adj = {};
    this.weights = {};
    this.points = new Set([]);

    this.init(edges, weights);
  }

  init(edges, weights) {
    for (let i = 0; i < edges.length; i += 1) {
        const weight = weights[i];
      const edge = edges[i];

      const p1 = edge[0];
      const p2 = edge[1];

      this.points.add(p1);
      this.points.add(p2);

      if (!this.adj[p1]) this.adj[p1] = [];
      if (!this.adj[p2]) this.adj[p2] = [];
      if (!this.weights[p1]) this.weights[p1] = [];
      if (!this.weights[p2]) this.weights[p2] = [];

      this.adj[p1].push(p2);
      this.adj[p2].push(p1);

      this.weights[p1].push(weight);
      this.weights[p2].push(1 / weight);
    }
  }

  has(point) {
    return this.points.has(point);
  }
}

class DepthGraph {
  constructor(graph, start, end) {
    this.marked = {};
    this.end = end;
    this.finish = false;
    this._paths = [];

    this.dfs(graph, start);
  }

  dfs(graph, point) {
    if (this.finish) return;
    this.marked[point] = true;

    const points = graph.adj[point];
    for (let i = 0; i < points.length; i += 1) {
      const p = points[i];
      const weight = graph.weights[point][i];
      this._paths.push(weight);

      if (p === this.end) {
        this.finish = true;
        break;
      }
      if (!this.marked[p]) {
        this.dfs(graph, p);
        if (this.finish) break;
      }
      this._paths.pop();
    }
  }

  get paths() {
    if (!this.finish) return [-1];
    return this._paths;
  }
}

/**
* @param {string[][]} equations
* @param {number[]} values
* @param {string[][]} queries
* @return {number[]}
*/
var calcEquation = function(equations, values, queries) {
  const graph = new Graph(equations, values);
  const results = [];

  for (const query of queries) {
    const start = query[0];
    const end = query[1];
    if (!graph.has(start) || !graph.has(end)) {
      results.push(-1);
    } else if (start === end) {
      results.push(1);
    } else {
      const depthGraph = new DepthGraph(graph, start, end);
      results.push(depthGraph.paths.reduce((pre, cur) => pre * cur, 1));
    }
  }
  return results
};
