<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [最短路径问题](#%E6%9C%80%E7%9F%AD%E8%B7%AF%E5%BE%84%E9%97%AE%E9%A2%98)
  - [基本概念](#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)
  - [数据结构](#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
  - [Dijkstra 算法](#dijkstra-%E7%AE%97%E6%B3%95)
  - [应用](#%E5%BA%94%E7%94%A8)
    - [求给定两点的最短距离](#%E6%B1%82%E7%BB%99%E5%AE%9A%E4%B8%A4%E7%82%B9%E7%9A%84%E6%9C%80%E7%9F%AD%E8%B7%9D%E7%A6%BB)
  - [LeetCode](#leetcode)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 最短路径问题

### 基本概念

加权有向图：每条有向路径都有一个与之关联的路径权重，它是该路径中所有边的权重之和。最短路径问题即找到加权有向图中，符合条件且权重最小的有向路径。

- 单点最短路径：给定一幅加权有向图和一个起点 s，从 s 到给定目的顶点 v 是否存在一条有向路径？如果有，找出最短（总权重最小）的那条路径。

- 最短路径树：给定一幅加权有向图和一个顶点 s，以 s 为起点的一颗最短路径树是图的一幅子图，它包含 s 和从 s 可达的所有顶点。这棵有向树的根节点为 s，树的每条路径都是有向图中的一条最短路径。通过构造这棵最短路径树，可以为用例提供从 s 到图中任何顶点的最短路径

### 数据结构

构造加权有向图，结构和有向图非常相似，只是需要储存每条边的权重

```javascript
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
      const weight = data[2];

      if (!this.adj[p1]) this.adj[p1] = [];
      if (!this.adj[p2]) this.adj[p2] = [];
      if (!this.weights[p1]) this.weights[p1] = [];
      this.adj[p1].push(p2);
      this.weights[p1].push(weight);
    }
  }
}
```

最短路径的数据结构：

- `edgeTo[v]`代表树中连接 v 点和其父顶点的边，也是顶点到 v 点最短路径上的最后一条边
- 使用`distTo[]`数组来表示从顶点到某点的最短路径的长度。对于起点，`distTo[s] = 0`，对于从起点不可到达的边，`distTo[i] = INFINITY`，且初始化时，`distTo`中除起点外，其他点都是无穷大，需要逐步去松弛。
- 边的松弛：检查边`s -> w`的最短路径，是否长于`s -> v, v -> w`，如果是，则使用`distTo[v] + weights[w]`来替代`distTo[w]`，即松弛了边`v -> w`。否则，称原有的边`v -> w`失效了
- 顶点的松弛：放松从一个给定顶点指出的所有边

### Dijkstra 算法

Dijkstra 算法的过程：

1. 首先将`distTo[s]`初始化为 0， 将`distTo`中的其他元素初始化为正无穷
2. 使用优先队列（最小堆）来保存下一次需要被放松的顶点
3. 从最小堆中去除顶点 v，遍历该顶点指向的其他顶点 w。将 w 加入优先队列，并放松`v -> w`。将放松后的结果加入最短路径树

```javascript
class DijkstraSP {
  constructor(weightedGraph, point) {
    this.distTo = []; // 某位置上的值，代表 edgeTo 中对应位置上的边的权重
    this.pq = [];  // 加权无向图中所有的横切边

    this.init(weightedGraph, point);
  }

  init(weightedGraph, point) {
    this.distTo[point] = 0;
    // 将 [point, weight] 插入最小堆
    enqueue(this.pq, [point, 0]);

    while (this.pq.length) {
      const minEdge = dequeue(this.pq);
      this.relax(weightedGraph, minEdge);
    }
  }

  relax(digraph, edge) {
    const [point, weight] = edge;

    const points = digraph.adj[point];
    const weights = digraph.weights[point];

    if (!points) return;
    for (let i = 0; i < points.length; i += 1) {
      const p = points[i];
      const w = weights[i];

      if (!this.distTo[p] || this.distTo[p] > this.distTo[point] + weight) {
        if (this.pq.find(e => e[0] === p)) {
          // 将横切边队列中一个边的权重更新
          update(this.pq, [p, w + weight]);
        } else {
          // 加入新的横切边
          enqueue(this.pq, [p, w + weight]);
        }
      }
    }
  }
}
```

### 应用

#### 求给定两点的最短距离

给定一幅加权有向图，一个起点 s 和一个目标点 t，寻找从 s 到 t 的最短路径

使用 Dijkstra 算法，在优先队列中取到 t 后进行放松即可结束

### LeetCode

1. [No.743 Network Delay Time](../leetcode/JavaScript/No743.network-delay-time.js)
