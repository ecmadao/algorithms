<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [最小生成树](#%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91)
  - [加权无向图](#%E5%8A%A0%E6%9D%83%E6%97%A0%E5%90%91%E5%9B%BE)
  - [MST](#mst)
    - [Prim 算法](#prim-%E7%AE%97%E6%B3%95)
      - [延时 Prim](#%E5%BB%B6%E6%97%B6-prim)
      - [即时 Prim](#%E5%8D%B3%E6%97%B6-prim)
    - [Kruskal 算法](#kruskal-%E7%AE%97%E6%B3%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 最小生成树

一个图的生成树，是指它的一棵含有所有顶点的无环子连通图。一幅加权图的最小生成树（MST），则是值生成的树的所有边的权值之和最小。

树的性质：

1. 用一条边连接树的任意两个顶点，会产生一个新的环
2. 从树中删去一条边，将会得到两棵独立的树

切分定理前提：

1. 图的切分是将图的所有顶点分为两个非空且不重叠的两个集合。通常，可以通过指定一个顶点集并隐式的认为它的补集为另一个顶点集来指定一个切分。
2. 横切边，是一个连接两个属于不同集合的顶点的边

切分定理：

在一幅加权图中，给定任意的切分，它的横切边中的权重最小者必然属于图的最小生成树。

### 加权无向图

类似于无向图，但每个边都有自己的权重。因此需要额外的数据结构去储存边的权重。

```javascript
class WeightedGraph {
  /*
   * datas 为 [[0, 1], [2, 3]]，代表各个点的连接
   * weights 为 [1, 2]，依次对应 datas 相应位置上的边的权重
   */
  constructor(datas, weights) {
    this.adj = []; // 邻接表数组
    this.edges = []; // 边
    this.weights = []; // 跟邻接表数组对应，储存边的权重
    this._points = new Set([]); // 储存所有的点

    this.init(datas, weights);
  }

  init(datas, weights) {
    for (let i = 0; i < datas.length; i += 1) {
      const data = datas[i];
      const weight = weights[i];

      const p1 = data[0];
      const p2 = data[1];

      this._points.add(p1);
      this._points.add(p2);

      if (!this.adj[p1]) this.adj[p1] = [];
      if (!this.adj[p2]) this.adj[p2] = [];
      this.adj[p1].push(p2);
      this.adj[p2].push(p1);

      if (!this.weights[p1]) this.weights[p1] = [];
      if (!this.weights[p2]) this.weights[p2] = [];
      this.weights[p1].push(weight);
      this.weights[p2].push(weight);

      this.edges.push([p1, p2, weight]);
    }
  }

  get points() {
    return [...this._points.values()];
  }
}
```

### MST

#### Prim 算法

以一个顶点开始，作为最小树的初始顶点。之后每一步，将连接树中顶点和不在树中的顶点的权重最小的边（以及顶点）加入树中，直到不存在不在树中的顶点。

##### 延时 Prim

根据 Prim 的算法概念可以知道，我们需要维护一个包含了所有横切边的集合。但是当一个顶点被加入到树中的时候，该顶点和树中其他顶点组成的横切边就已经失效了。对于延时 Prim 算法而言，在顶点加入树中后，不会立即删除失效的边

```javascript
class LazyPrimMST {
  constructor(weightedGraph) {
    this.marked = {};
    this.mst = []; // 储存最小生成树的所有边
    this.pq = [];  // 加权无向图中所有的横切边

    this.init(weightedGraph);
  }

  init(weightedGraph) {
    this.visit(weightedGraph, weightedGraph.points[0]);

    while (this.pq.length) {
      // popMin 获取权重最小的边，方法略
      // 实际上为了保障速度，可以使用最小堆来做 pq，保障每次从顶点取出的一定是最小权重的边
      // 在 pop 的同时也从 pq 里删除了该边
      const minEdge = popMin(this.pq);

      // 在 visit 中，向 pq 中添加了 [point1, point2, weight] 这样的数据来表示一个带有权重的边
      const [p1, p2, _] = minEdge;
      if (this.marked[p1] && this.marked[p2]) continue;

      this.mst.push(minEdge);
      if (!this.marked[p1]) this.visit(weightedGraph, p1);
      if (!this.marked[p2]) this.visit(weightedGraph, p2);
    }
  }

  visit(weightedGraph, point) {
    this.marked[point] = true;

    const points = weightedGraph.adj[point];
    const weights = weightedGraph.weights[point];

    for (let i = 0; i < points.length; i += 1) {
      const p = points[i];
      const weight = weights[i];
      if (!this.marked[p]) {
        this.pq.push([point, p, weight]);
      }
    }
  }
}
```

##### 即时 Prim

和延时 Prim 对立，当边失效时就将其删除。但同时，对于每个非树的顶点，都将其到树的最小权重的边保存到横切边队列中去。

```javascript
class PrimMST {
  constructor(weightedGraph) {
    this.marked = {};
    this.edgeTo = []; // 连接非树顶点和树的最近的边
    this.distTo = []; // 某位置上的值，代表 edgeTo 中对应位置上的边的权重
    // this.mst = []; // 储存最小生成树的所有边
    this.pq = [];  // 加权无向图中所有的横切边

    this.init(weightedGraph);
  }

  init(weightedGraph){
    // 初始化，将 distTo 各个位置上的权重设置为正无穷
    for (let i = 0; i < weightedGraph.edges.length; i += 1) {
      this.distTo[i] = Infinity;
    }

    const point = weightedGraph.points[0];
    this.distTo[point] = 0;
    this.pq.push([
      point,
      weightedGraph.weights[point][0]
    ]);

    while (this.pq.length) {
      const minEdge = popMin(this.pq);

      this.visit(weightedGraph, minEdge);
    }
  }

  visit(weightedGraph, edge) {
    const [point, _] = edge;
    this.marked[point] = true;

    const points = weightedGraph.adj[point];
    const weights = weightedGraph.weights[point];

    for (let i = 0; i < points.length; i += 1) {
      const p = points[i];
      const weight = weights[i];

      if (this.marked[p]) continue;
      if (weight < this.distTo[p]) {
        this.edgeTo[p] = [p, point];
        this.distTo[p] = weight;

        if (this.pq.find(e => e[0] === p)) {
          // 将横切边队列中一个边的权重更新
          update(this.pq, [p, weight]);
        } else {
          // 加入新的横切边
          insert(this.pq, [p, weight]);
        }
      }
    }
  }
}
```

#### Kruskal 算法

按照边的权重顺序从小到大进行处理，将边加入到最小生成树中，且加入的边不会与已经加入的边构成环。

将加权无向图中的各个顶点看做是各个独立的只有一个顶点的子树。取出连接两棵子树的最小权重的边，将两个子树合并为一个新的树。以此不断重复就可以获得最小生成树。

```javascript
class KruskalMST {
  constructor(weightedGraph) {
    this.marked = {};
    this.mst = []; // 储存最小生成树的所有边
    this.pq = []; // 使用优先队列将边按照权重排列
    this.uf = []; // 使用 union-find 来识别会形成环的边

    this.init(weightedGraph);
  }

  init(weightedGraph) {
    for (edge of weightedGraph.edges) {
      insert(this.pq, edge);
    }

    while (this.pq.length && this.mst.length < weightedGraph.edges.length) {
      const edge = popMin(this.pq);
      const [p1, p2, _] = edge;

      if (connected(this.uf, p1, p2)) continue;
      union(this.uf, p1, p2);
      this.mst.push(edge);
    }
  }
}
```
