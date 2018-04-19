/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are a total of n courses you have to take, labeled from 0 to n - 1.
 * Some courses may have prerequisites,
 * for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 *
 * Given the total number of courses and a list of prerequisite pairs,
 * return the ordering of courses you should take to finish all courses.
 * There may be multiple correct orders, you just need to return one of them.
 * If it is impossible to finish all courses, return an empty array.
 *
 * Example:
 * 2, [[1,0]]
 * There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0. So the correct course order is [0,1]
 *
 * 4, [[1,0],[2,0],[3,1],[3,2]]
 * There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2.
 * Both courses 1 and 2 should be taken after you finished course 0.
 * So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].
 */


/**
 * 拓扑排序，逆后排序，在递归调用之后将顶点压入栈
 * 主要最后的结果里要加入独立的节点，即没有跟其他节点连接的节点
 */

class Digraph {
  constructor(full, datas) {
    this.adj = {};
    this.independents = new Set(full);
    this.init(datas);
  }

  init(datas) {
    for (const data of datas) {
      const p1 = data[1];
      const p2 = data[0];

      this.independents.delete(p1);
      this.independents.delete(p2);

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
    this.paths = [];

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
    this.paths.unshift(Number(point));
    this.stack[point] = false;
  }
}


/**
* @param {number} numCourses
* @param {number[][]} prerequisites
* @return {number[]}
* 拓扑排序/逆后排序
*/
var findOrder = function(numCourses, prerequisites) {
  const full = new Array(numCourses).fill(0).map((_, i) => i);
  if (!prerequisites.length) {
    return full;
  }
  const digraph = new Digraph(full, prerequisites);
  const cycleDigraph = new CycleDigraph(digraph);
  if (cycleDigraph.hasCycle) return [];

  const result = cycleDigraph.paths;
  result.push(...digraph.independents);
  return result;
};