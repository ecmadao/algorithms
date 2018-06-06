/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are n cities connected by m flights. Each fight starts from city u and arrives at v with a price w.
 * Now given all the cities and fights, together with starting city src and the destination dst,
 * your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1
 *
 * Example:
 * Input:
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 1
 * Output: 200
 *
 * Input:
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 0
 * Output: 500
 *
 * Note:
 * - The number of nodes n will be in range [1, 100], with nodes labeled from 0 to n - 1.
 * - The size of flights will be in range [0, n * (n - 1) / 2].
 * - The format of each flight will be (src, dst, price).
 * - The price of each flight will be in the range [1, 10000].
 * - k is in the range of [0, n - 1].
 * - There will not be any duplicated flights or self cycles.
 */

class WeightedDigraph {
  constructor(datas) {
    this.adj = {};
    this.weights = {};
    this.init(datas);
  }

  init(datas) {
    for (const arr of datas) {
      const [p1, p2, weight] = arr;
      if (!this.adj[p1]) this.adj[p1] = [];
      this.adj[p1].push(p2);

      if (!this.weights[p1]) this.weights[p1] = [];
      this.weights[p1].push(weight);
    }
  }
}

class BFS {
  constructor(digraph) {
    this.digraph = digraph;
  }

  bfs(start, target, limit) {
    this.marked = {};
    this.limit = limit;
    this.step = 0;
    this.target = target;
    this._bfs(start, 0);
  }

  _bfs(point, cost) {
    if (this.marked[point] && this.marked[point] <= cost) return;
    this.marked[point] = cost;

    if (point === this.target) return;
    if (this.step === this.limit) {
      this.marked[point] = Infinity;
      return;
    }

    const points = this.digraph.adj[point] || [];
    const weights = this.digraph.weights[point];

    for (let i = 0; i < points.length; i += 1) {
      const p = points[i];
      const weight = weights[i];
      this.step += 1;
      this._bfs(p, cost + weight);
      this.step -= 1;
    }
  }
}

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  const weightedDigraph = new WeightedDigraph(flights);
  const bFS = new BFS(weightedDigraph);
  bFS.bfs(src, dst, K + 1);
  return bFS.marked[dst] && bFS.marked[dst] !== Infinity ? bFS.marked[dst] : -1;
};

// Test case
findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1); // 200
findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0); // 500
findCheapestPrice(5, [[4,1,1],[1,2,3],[0,3,2],[0,4,10],[3,1,1],[1,4,3]], 2, 1, 1); // -1
findCheapestPrice(10, [[3,4,4],[2,5,6],[4,7,10],[9,6,5],[7,4,4],[6,2,10],[6,8,6],[7,9,4],[1,5,4],[1,0,4],[9,7,3],[7,0,5],[6,5,8],[1,7,6],[4,0,9],[5,9,1],[8,7,3],[1,2,6],[4,1,5],[5,2,4],[1,9,1],[7,8,10],[0,4,2],[7,2,8]], 6, 0, 7); // 14

