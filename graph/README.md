<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [图](#%E5%9B%BE)
  - [基本概念](#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)
  - [图的数据结构](#%E5%9B%BE%E7%9A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
  - [无向图](#%E6%97%A0%E5%90%91%E5%9B%BE)
    - [构建无向图](#%E6%9E%84%E5%BB%BA%E6%97%A0%E5%90%91%E5%9B%BE)
    - [无向图的搜索](#%E6%97%A0%E5%90%91%E5%9B%BE%E7%9A%84%E6%90%9C%E7%B4%A2)
      - [深度优先搜索 DFS](#%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2-dfs)
      - [用 DFS 查找图中的路径](#%E7%94%A8-dfs-%E6%9F%A5%E6%89%BE%E5%9B%BE%E4%B8%AD%E7%9A%84%E8%B7%AF%E5%BE%84)
      - [广度优先搜索 BFS](#%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2-bfs)
      - [连通分量](#%E8%BF%9E%E9%80%9A%E5%88%86%E9%87%8F)
  - [有向图](#%E6%9C%89%E5%90%91%E5%9B%BE)
    - [构建有向图](#%E6%9E%84%E5%BB%BA%E6%9C%89%E5%90%91%E5%9B%BE)
    - [有向图的应用](#%E6%9C%89%E5%90%91%E5%9B%BE%E7%9A%84%E5%BA%94%E7%94%A8)
      - [有向环检测](#%E6%9C%89%E5%90%91%E7%8E%AF%E6%A3%80%E6%B5%8B)
      - [树顶点的排序](#%E6%A0%91%E9%A1%B6%E7%82%B9%E7%9A%84%E6%8E%92%E5%BA%8F)
        - [拓扑排序](#%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F)
      - [寻找强连通分量（`Kosaraju`算法）](#%E5%AF%BB%E6%89%BE%E5%BC%BA%E8%BF%9E%E9%80%9A%E5%88%86%E9%87%8Fkosaraju%E7%AE%97%E6%B3%95)
  - [Leetcode](#leetcode)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 图

- [无向图和有向图](./README.md)
- [最小生成树](./MST.md)
- [最短路径](./PATH.md)

简而言之，图是由一组顶点和一组能够将两个顶点连接的边组成的。

### 基本概念

- 路径

由边顺序连接的一系列的顶点

- 顶点的度数

顶点的度数即依附于该顶点的边的总数

- 简单环

除了起点和终点之外，不含有重复顶点和边的环

- 平行边

连接同一对顶点的两条边

- 连通

连个顶点之间存在至少一条连接双方的路径

- 连通图

从任意一个顶点都存在一条路径到达另一个任意顶点的图。树是一个无环连通图。互不相连的树组成的集合成为森林

- 树

树是一个无环连通图。用一条边连接树中任意两个顶点都会产生一个新的环；从树中删去任意一条边会得到两颗独立的树

- 图的密度

已经连接的顶点对，占所有可能被连接的顶点对的比例

- 二分图

能够将所有顶点分成两部分的图，其中图的**每条边所连接的两个顶点都分别属于不同的部分**

### 图的数据结构

与二叉树或者链表不同，图的每个顶点可能会被任意的其他顶点所连接，即每个顶点可以有任意出路，也可以有任意的入口路径。因此，使用**邻接表数组**来表示图可以使其有较好的性能。

在图的邻接表数组中，维护一个数组表示图的各个顶点，该数组的每一位索引都代表一个顶点（将顶点数字化表示）。同时，每个索引位置上的元素的值，又是一个数组，代表了当前顶点连接到的其他顶点。即例如：

```javascript
// 对于无向图，连接可逆
// 因此，当一个顶点连接到另一个顶点时，那个顶点也连接到了当前该顶点
[
  [1, 2] // 顶点 0 连接到了顶点 1 和 2
  [0, 2] // 因为 0 连接到了 1，所以 1 也连接到了 0。同时，1 也连接到了 2
  [0, 1] // 顶点 2 连接到了 0 和 1
]

// 而对于有向图，则连接不可逆
[
  [1, 2] // 顶点 0 连接到了顶点 1 和 2
  [2] // 顶点 1 连接顶点 2
  [0] // 顶点 2 连接顶点 0
]
```

使用这样的数据结构会有如下特点：

1. 使用的空间和顶点数+边数成正比
2. 添加一条边所需的时间为常量
3. 遍历某一顶点的所有连接顶点，所需的时间和该顶点的度数成正比

对于表示图的*邻接表数组*而言，在`JavaScript`中，也可以使用`Set`或者`Map`来实现。

注意如下概念：

- **无向图的连通性**

如果在无向图中有一条路径连接了两个顶点，则称这两个顶点是**连通**的（两顶点相互可达）

- **有向图的可达性**

当在有向图中，从顶点 W 到顶点 V 有路径时，则称从顶点 W 到顶点 V 是**可达**的。

- 有向图的强连通性

如果有向图中的两个顶点是相互可达的，则称这两个顶点是**强连通**的。如果有向图中的任意两个顶点都是强连通的，则这幅图也是强连通的。

*有向环是强连通的有向图*

有向图的强连通有如下性质：

1. 自反性：任意顶点和它自己都是强连通的
2. 对称性：如果 V 和 W 是强连通的，则 W 和 V 也是强连通的
3. 传递性：如果 V 和 W 是强连通的，且 W 和 X 也是强连通的，则 V 和 X 也是强连通的

### 无向图

在无向图中，两个顶点的连接并没有方向限制，即路径是可逆的。

#### 构建无向图

```javascript
/*
通过输入构建一个无向图
输入数据为一系列边组成的数组，例如：
[
  [0, 1], // 代表该边连接了顶点 0 和顶点 1。因为是无向图，连接可逆
  [1, 2],
  [3, 2],
  [2, 0]
]
*/
class Graph {
  constructor(datas) {
    this.adj = []; // 邻接表数组
    this.edges = 0; // 边的数目
    this._points = new Set([]); // 储存所有的点

    this.init(datas);
  }

  init(datas) {
    for (const data of datas) {
      this.addEdge(data[0], data[1]);
    }
  }

  // 构建顶点的连接
  addEdge(p1, p2) {
    this._points.add(p1);
    this._points.add(p2);

    if (!this.adj[p1]) this.adj[p1] = [];
    if (!this.adj[p2]) this.adj[p2] = [];
    this.adj[p1].push(p2);
    this.adj[p2].push(p1);
    this.edges += 1;
  }

  get points() {
    return this._points.values();
  }
}
```

#### 无向图的搜索

给定一个无向图和一个顶点，返回和该顶点连通的所有的点。在无向图的搜索中，每条边都会被遍历两次（从 a 到 b，再从 b 到 a）

##### 深度优先搜索 DFS

先沿着一条路径走到底，然后再回头遍历其他可能的路径

```javascript
class DepthFirstSearch {
  // 从一个指定顶点开始深度遍历
  constructor(graph, point) {
    this.count = 0; // 和给定连连接的顶点总数
    this.marked = {}; // 用于标记一个点是否已经被搜索过

    this.dfs(graph, point);
  }

  dfs(graph, point) {
    this.marked[point] = true;

    for (const p of graph.adj[point]) {
      if (!this.marked[p]) {
        this.count += 1;
        this.dfs(graph, p);
      }
    }
  }
}
```

##### 用 DFS 查找图中的路径

```javascript
class DepthFirstPath {
  constructor(graph, point) {
    this.count = 0; // 和给定连连接的顶点总数
    this.marked = {}; // 用于标记一个点是否已经被搜索过
    this.point = point; // 储存初始化顶点
    this.edgeTo = {}; // 储存在遍历初始化顶点的连接点的过程中，路过的每个顶点的上一个连接点

    this.dfs(graph, point);
  }

  dfs(graph, point) {
    this.marked[point] = true;

    for (const p of graph.adj[point]) {
      if (!this.marked[p]) {
        this.count += 1;
        this.edgeTo[p] = point;
        this.dfs(graph, p);
      }
    }
  }

  // 是否存在 p 点和初始化顶点之间的连接？
  hasPathTo(p) {
    return this.marked[p] || false;
  }

  // 从 v 点到初始化顶点之间的路径
  pathTo(v) {
    if (!this.hasPathTo(v)) return null;

    let p = v;
    const result = [];
    while (p !== this.point) {
      result.push(p);
      p = this.edgeTo[p];
    }
    result.push(this.point);
    return result;
  }
}
```

##### 广度优先搜索 BFS

优先遍历一个点所连接的所有点，而不是针对一条路径走到底。可用于查找点点连接之间的最短路径。

```javascript
class BreadthFirstPaths {
  constructor(graph, point) {
    this.marked = {};
    this.edgeTo = {};
    this.point = point;

    this.bfs(graph, point);
  }

  bfs(graph, point) {
    const queue = [];
    this.marked[point] = true;
    queue.push(point);

    while (queue.length) {
      const p = queue.shift();

      for (const v of graph.adj[p]) {
        if (!this.marked[v]) {
          this.marked[v] = true;
          this.edgeTo[v] = p;
          queue.push(v);
        }
      }
    }
  }

  // hasPathTo/pathTo 的方法都和深度优先遍历中的方法相同
  hasPathTo(v) {
    return this.marked[v] || false;
  }

  pathTo(v) {
    if (!this.hasPathTo(v)) return null;

    let p = v;
    const result = [];
    while (p !== this.point) {
      result.push(p);
      p = this.edgeTo[p];
    }
    result.push(this.point);
    return result;
  }
}
```

##### 连通分量

如果两个顶点之间有路径可以使其连接，不管路径有多长，这两个顶点都是连通的。利用深度优先搜索可以查找出一幅图里的所有连通分量。其原理是，深度优先的遍历各点的所有连接点，连线之间的各个点，其相互之间都是连通的。

```javascript
class CC {
  constructor(graph) {
    this.marked = []; // 标记点是否已经遍历过
    this.id = []; // 标记各个点的连通分量的标识
    this.count = 0; // 图的连通分量数

    for (const point of graph.points) {
      if (!this.marked[point]) {
        this.dfs(graph, point);
        this.count += 1;
      }
    }
  }

  dfs(graph, point) {
    this.marked[point] = true;
    this.id[point] = count;
    for (const p of graph.adj[point]) {
      if (!this.marked[p]) {
        this.dfs(graph, p);
      }
    }
  }

  // 判断两个点是否连通
  connected(p1, p2) {
    return this.id[p1] === this.id[p2];
  }

  id(p) {
    return this.id[p];
  }
}
```

### 有向图

在有向图里，边是单向的。每条边所连接的两个顶点都是一个有序对，它们之间的邻接性是单向的。

在有向图中，

- *出度*：顶点的*出度*为由该顶点指出的边的总数
- *入度*：顶点的*入度*为指向该顶点的边的总数
- *有向环*：至少含有一条边，且起点和终点相同的有向路径
- *简单有向环*：除起点和终点必须重复以外，不含有其他重复的顶点和边的环

#### 构建有向图

```javascript
class Digraph {
  constructor(datas) {
    this.adj = []; // 邻接表数组
    this.edges = 0; // 边的数目
    this._points = new Set([]); // 储存所有的点

    this.init(datas);
  }

  init(datas) {
    for (const data of datas) {
      this.addEdge(data[0], data[1]);
    }
  }

  // 构建顶点的连接
  addEdge(p1, p2) {
    if (!this.adj[p1]) this.adj[p1] = [];
    this.adj[p1].push(p2);

    this._points.add(p1);
    this._points.add(p2);

    this.edges += 1;
  }

  get points() {
    return this._points.values();
  }

  // 将一个有向图的所有连接都反转，得到一个新的有向图
  reverse() {
    const digraph = new Digraph([]);

    for (let i = 0; i < this.adj.length; i += 1) {
      const points = this.adj[i] || [];

      for (const point of points) {
        digraph.addEdge(point, i);
      }
    }
    return digraph;
  }
}
```

#### 有向图的应用

- 垃圾清除

当内存中的对象没有被引用时，可以被清除。因此，需要利用有向图的可达性，遍历图中可以被访问到的对象并对其进行标记，然后清除没有被标记的对象。

- 寻路问题

寻找有向图中是否存在给定两点之间的路径，且找出最短路径。

- 任务调度

给定一组有优先级顺序的任务，各个任务可以映射为图中的各个顶点，而有向边则对应优先级顺序。利用拓扑排序可以使所有顶点安装优先级从高到低的顺序排列。当且仅当有向图是无环图时，才能进行拓扑排序。

在这些应用中，要求有向图必须是无环有向图，否则，任务优先级无解（没有起始点），垃圾无法释放（循环引用）。因此，可以利用有向图的数据结构，构建有向环检测

##### 有向环检测

```javascript
class DirectedCycle {
  constructor(digraph) {
    this.marked = {};
    this.edgeTo = {};
    this.stack = []; // 递归调用栈上的所有顶点
    this.cycle = []; // 如果有环，则储存环上的所有顶点

    for (const point of digraph.points) {
      if (!this.marked[point]) {
        this.dfs(digraph, point);
      }
    }
  }

  dfs(digraph, point) {
    this.marked[point] = true;
    this.stack[point] = true;

    for (const p of digraph.adj[point]) {
      if (this.cycle.length) {
        return;
      } else if (!this.marked[p]) {
        this.edgeTo[p] = point;
        this.dfs(digraph, p);
      } else if (this.stack[p]) {
        // 当前顶点出现在已经遍历过的顶点上，则证明有环
        for (let x = point; x !== p; x = this.edgeTo[x]) {
          this.cycle.push(x);
        }
        this.cycle.push(p);
      }
    }
    this.stack[point] = false;
  }

  get hasCycle() { return this.cycle.length > 0; }
}
```

##### 树顶点的排序

- 前序排列`preorder`：在递归调用之前将顶点加入队列
- 后序排列`postorder`：在递归调用之后将顶点加入队列
- 逆后序排列`reversePost`：在递归调用之后将顶点压入栈

```javascript
// 深度优先搜索有向图，并在搜索过程中保存顶点的排序
class DepthFirstOrder {
  constructor(digraph) {
    this.pre = [];
    this.post = [];
    this.reversePost = [];
    this.marked = {};

    for (const point of digraph.points) {
      if (!this.marked[point]) {
        this.dfs(digraph, point);
      }
    }
  }

  dfs(digraph, point) {
    this.pre.push(point);
    this.marked[point] = true;

    for (const p of digraph.adj[point]) {
      if (!this.marked[p]) {
        this.dfs(digraph, p);
      }
    }

    this.post.push(point);
    this.reversePost.unshift(point);
  }
}
```

###### 拓扑排序

给定一幅有向图，将所有的顶点排序，使得所有的有向边均从排在前面的元素指向排在后面的元素

> 一个有向无环图的拓扑排序，即为所有顶点的逆后序排序。
>
> 任何一个子节点必位于其所有父节点之后。任一个节点必须在它的所有父节点都被记录后才可以被记录。

##### 寻找强连通分量（`Kosaraju`算法）

`Kosaraju`算法的核心思想：

1. 给定一个有向图 G，将其反转获得反向图 G'
2. 获取 G' 所有顶点的逆后序排列
3. 依次遍历逆后序排列中的各个顶点，每次利用该顶点在 G 中进行深度优先搜索。则在同一个递归的`dfs`调用中，被访问到的顶点都在同一个强连通分量中

```javascript
class KosarajuSCC {
  constructor(digraph) {
    this.marked = {};
    this.id = [];
    this.count = 0; // 储存强连通分量的数量

    const order = new DepthFirstOrder(digraph.reverse());
    for (const p of order.reversePost) {
      if (!this.marked[p]) {
        this.dfs(digraph, p);
      }
    }
  }

  dfs(digraph, point) {
    this.marked[point] = false;
    this.id[point] = count;

    for (const p of digraph.adj[point]) {
      if (!this.marked[p]) {
        this.dfs(digraph, p);
      }
    }
  }

  // 判断两点是否是强连通的
  isStrongConnected(p1, p2) {
    return this.id[p1] === this.id[p2];
  }
}
```

### Leetcode

1. [No.133 Clone Graph](../leetcode/JavaScript/No133.clone-graph.js)
2. [No.207 Course Schedule](../leetcode/JavaScript/No207.course-schedule.js)
3. [No.210 Course Schedule II](../leetcode/JavaScript/No210.course-schedule-II.js)
4. [No.310 Minimum Height Trees](../leetcode/JavaScript/No310.minimum-height-trees.js)
5. [No.332 Reconstruct Itinerary](../leetcode/JavaScript/No332.reconstruct-itinerary.js)
6. [No.399 Evaluate Division](../leetcode/JavaScript/No399.evaluate-division.js)
7. [No.684 Redundant Connection](../leetcode/JavaScript/No684.redundant-connection.js)
8. [No.685 Redundant Connection II](../leetcode/JavaScript/No685.redundant-connection-II.js)
9. [No.721 Accounts Merge](../leetcode/JavaScript/No721.accounts-merge.js)
10. [No.743 Network Delay Time](../leetcode/JavaScript/No743.network-delay-time.js)
11. [No.785 Is Graph Bipartite?](../leetcode/JavaScript/No785.is-graph-bipartite?.js)
12. [No.802 Find Eventual Safe States](../leetcode/JavaScript/No802.find-eventual-safe-states.js)

