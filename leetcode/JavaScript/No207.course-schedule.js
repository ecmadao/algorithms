/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are a total of n courses you have to take, labeled from 0 to n - 1.
 * Some courses may have prerequisites,
 * for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
 *
 * Example:
 * 2, [[1,0]]
 * There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0. So it is possible.
 *
 * 2, [[1,0],[0,1]]
 * There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 *
 * 有向图，关于任务调度的应用。即基本要求，有向图中不能有环
 */

class Digraph {
  constructor(n, datas) {
    this.adj = {};
    this.init(datas);
  }

  init(datas) {
    for (const data of datas) {
      const p1 = data[1];
      const p2 = data[0];

      if (!this.adj[p1]) this.adj[p1] = [];
      if (!this.adj[p2]) this.adj[p2] = [];
      this.adj[p1].push(p2);
    }
  }
}

class CycleDigraph {
  constructor(digraph) {
    this.marked = {};
    this.stack = {};
    this.hasCycle = false;

    const points = Object.keys(digraph.adj);
    for (const p of points) {
      if (this.hasCycle) break;
      if (!this.marked[p]) {
        this.dfs(digraph, p);
      }
    }
  }

  dfs(digraph, point) {
    if (this.hasCycle) return;
    this.marked[point] = true;
    this.stack[point] = true;

    for (const p of digraph.adj[point]) {
      if (this.stack[p]) {
        this.hasCycle = true;
        break;
      } else if (this.hasCycle) {
        break;
      } else if (!this.marked[p]) {
        this.dfs(digraph, p);
      }
    }

    this.stack[point] = false;
  }
}

/**
* @param {number} numCourses
* @param {number[][]} prerequisites
* @return {boolean}
*/
var canFinish = function(numCourses, prerequisites) {
  if (!prerequisites.length) return true;
  const digraph = new Digraph(numCourses, prerequisites);
  const cycleDigraph = new CycleDigraph(digraph);
  return !cycleDigraph.hasCycle;
};