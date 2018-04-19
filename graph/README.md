## 图

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
- **有向图的可达性**

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
    this.points = new Set([]); // 储存所有的点

    this.init(datas);
  }

  init(datas) {
    for (const data of datas) {
      this.addEdge(data[0], data[1]);
    }
  }

  // 构建顶点的连接
  addEdge(p1, p2) {
    this.points.add(p1);
    this.points.add(p2);

    if (!this.adj[p1]) this.adj[p1] = [];
    if (!this.adj[p2]) this.adj[p2] = [];
    this.adj[p1].push(p2);
    this.adj[p2].push(p1);
    this.edges += 1;
  }

  get points() {
    return this.points.values();
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

  // 初始化顶点所连接到的所有顶点的数目
  get count() {
    return this.count;
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

  get count() {
    return this.count;
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
    this.points = new Set([]); // 储存所有的点

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

    this.points.add(p1);
    this.points.add(p2);

    this.edges += 1;
  }

  get points() {
    return this.points.values();
  }

  // 将一个有向图的所有连接都反转，得到一个新的有向图
  reverse() {
    const graph = new Graph([]);

    for (let i = 0; i < this.adj.length; i += 1) {
      const points = this.adj[i] || [];

      for (const point of points) {
        graph.addEdge(point, i);
      }
    }
    return graph;
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

  get cycle() { return this.cycle; }
}
```

##### 树顶点的排序

##### 拓扑排序

> 一个有向无环图的拓扑排序，即为所有顶点的逆后序排序