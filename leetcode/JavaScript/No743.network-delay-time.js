/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are N network nodes, labelled 1 to N.
 * Given times, a list of travel times as directed edges times[i] = (u, v, w),
 * where u is the source node, v is the target node,
 * and w is the time it takes for a signal to travel from source to target.
 *
 * Now, we send a signal from a certain node K.
 * How long will it take for all nodes to receive the signal? If it is impossible, return -1.
 *
 * Note:
 * - N will be in the range [1, 100].
 * - K will be in the range [1, N].
 * - The length of times will be in the range [1, 6000].
 * - All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 1 <= w <= 100.
 */


/*
 * Test case
 * networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2) -> 2
 * networkDelayTime([[1,2,1],[2,1,3]], 2, 2) -> 3
 * networkDelayTime([[1,2,1],[2,3,2],[1,3,2]], 3, 1) -> 2
 * networkDelayTime([[1,2,1],[2,3,2],[1,3,4]], 3, 1) -> 3
 * networkDelayTime([[1,2,1],[2,3,7],[1,3,4],[2,1,2]], 4, 1) -> -1
 * networkDelayTime([[1,2,1],[2,3,2],[1,3,4], [1, 4, 10]], 4, 1) -> 10
 * networkDelayTime([[3,5,78],[2,1,1],[1,3,0],[4,3,59],[5,3,85],[5,2,22],[2,4,23],[1,4,43],[4,5,75],[5,1,15],[1,5,91],[4,1,16],[3,2,98],[3,4,22],[5,4,31],[1,2,0],[2,5,4],[4,2,51],[3,1,36],[2,3,59]], 5, 5) -> 31
 */


 /**
  * 通用的加权有向图
  */
class Digraph {
  constructor(datas) {
    this.adj = {};
    this.weights = {};
    this.init(datas);
  }

  init(datas) {
    for (const data of datas) {
      const p1 = data[0];
      const p2 = data[1];
      const time = data[2];

      if (!this.adj[p1]) this.adj[p1] = [];
      if (!this.adj[p2]) this.adj[p2] = [];
      if (!this.weights[p1]) this.weights[p1] = [];
      this.adj[p1].push(p2);
      this.weights[p1].push(time);
    }
  }
}

/* ==================================================================================== */


/*
 * 方法一：
 * 转换为有向图，然后深度搜索。但是该深度搜索不会跳过已经搜索过的点，而是根据之前储存的时间来判断是否需要跳过
 * 如果点已经被遍历过，且之前遍历时，经过该点所需的时间小于当前时间，则不需要再次遍历
 */


class DFS {
  constructor(digraph, point) {
    this.dist = new Map();
    this.digraph = digraph;

    this.dfs(point, 0);
  }

  dfs(point, total) {
    if (this.dist.get(point) !== undefined && total >= this.dist.get(point)) return;
    this.dist.set(point, total);

    const points = this.digraph.adj[point];
    if (!points) return;
    const weights = this.digraph.weights[point];

    for (let i = 0; i < points.length; i += 1) {
      const p = points[i];
      const weight = weights[i];
      this.dfs(p, total + weight);
    }
  }
}

/**
* @param {number[][]} times
* @param {number} N
* @param {number} K
* @return {number}
*/
var networkDelayTime_dfs = function(times, N, K) {
  if (!times.length) return -1;
  const digraph = new Digraph(times);
  const dfs = new DFS(digraph, K);
  if (dfs.dist.size < N) return -1;
  return Math.max(...dfs.dist.values());
};


/* ==================================================================================== */

/*
 * 方法二：
 * 用最小堆 + Dijkstra 最短路径法的
 */

/* ===================== heap ===================== */

const lessArr = index => (arr1, arr2) => arr1[index] < arr2[index];
const less = lessArr(1);

const exchange = (arr, i1, i2) => {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
  return arr;
};

const sortWithChild = (heaps, fatherIndex) => {
  const childIndexLeft = fatherIndex * 2;
  const childIndexRight = childIndexLeft + 1;

  if (childIndexLeft > heaps.length) return heaps;
  // 如果子元素的大小 < 父元素，则交换位置
  if (less(heaps[childIndexLeft - 1], heaps[fatherIndex - 1])) {
    heaps = exchange(heaps, childIndexLeft - 1, fatherIndex - 1);
  }

  if (childIndexRight > heaps.length) return heaps;
  if (less(heaps[childIndexRight - 1], heaps[fatherIndex - 1])) {
    heaps = exchange(heaps, childIndexRight - 1, fatherIndex - 1);
  }

  // 将两个子元素作为父元素，继续和它们的子元素进行排序
  heaps = sortWithChild(heaps, childIndexLeft);
  heaps = sortWithChild(heaps, childIndexRight);
  return heaps;
};

const sortWithFather = (heaps, childIndex) => {
  const fatherIndex = Math.floor(childIndex / 2);
  if (fatherIndex <= 0) return;
  if (less(heaps[childIndex - 1], heaps[fatherIndex - 1])) {
    // 交换两者的值
    exchange(heaps, childIndex - 1, fatherIndex - 1);
    // 递归，不断和父节点比较，直到达到根节点
    sortWithFather(heaps, fatherIndex);
  }
};

const enqueue = (heaps, child) => {
  heaps.push(child);
  const childIndex = heaps.length;
  sortWithFather(heaps, childIndex);
};

const dequeue = (heaps) => {
  // 根部元素和底部最后一位元素交换位置
  exchange(heaps, 0, heaps.length - 1);
  // 取出并删除此时的最后一位元素，即原二叉堆的根元素
  const result = heaps.pop();
  // 从根部开始排序
  sortWithChild(heaps, 1);
  return result;
};

/* ====================================================================== */

class DijkstraSP {
  constructor(digraph, point) {
    this.pq = [];
    this.dist = new Map();
    this.init(digraph, point);
  }

  init(digraph, point) {
    enqueue(this.pq, [point, 0]);

    while (this.pq.length) {
      const minEdge = dequeue(this.pq);
      this.relax(digraph, minEdge);
    }
  }

  relax(digraph, edge) {
    const [point, weight] = edge;
    if (this.dist.get(point) !== undefined) return;
    this.dist.set(point, weight);

    const points = digraph.adj[point];
    const weights = digraph.weights[point];

    if (!points) return;
    for (let i = 0; i < points.length; i += 1) {
      const p = points[i];
      const w = weights[i];

      if (this.dist.get(p) === undefined) {
        enqueue(this.pq, [p, w + weight]);
      }
    }
  }
}

var networkDelayTime_dijkstra = function(times, N, K) {
  if (!times.length) return -1;
  const digraph = new Digraph(times);
  // use Dijkstra
  const result = new DijkstraSP(digraph, K);
  if (result.dist.size < N) return -1;
  return Math.max(...result.dist.values());
};