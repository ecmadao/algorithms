## JavaScript 数据结构

### 堆，栈，队列

#### 堆，heap

堆是满足一定限制的树型结构

LeetCode 上相关题目：

1. [No.23 Merge k Sorted Lists](./leetcode/No23.merge-k-sorted-lists.js)
1. [No.264 Ugly Number II](./leetcode/No264.ugly-number-II.js)

#### 栈，stack

栈又称堆栈，是一种**先进后出**（FILO, First in Lirst out）的有序集合

LeetCode 上相关题目：

1. [No.20 Valid Parentheses](./leetcode/No20.valid-parentheses.js)
2. [No.42 Trapping Rain Water](./leetcode/No42.trapping-rain-water.js)
3. [No.71 Simplify Path](./leetcode/No71.simplify-path.js)
4. [No.84 Largest Rectangle in Histogram](./leetcode/No84.largest-rectangle-in-histogram.js)
5. [No.85 Maximal Rectangle](./leetcode/No85.maximal-rectangle.js)
6. [No.94 Binary Tree Inorder Traversal](./leetcode/No94.binary-tree-inorder-traversal.js)
7. [No.103 Binary Tree Zigzag Level Order Traversal](./leetcode/No103.binary-tree-zigzag-level-order-traversal.js)
8. [No.144 Binary Tree Preorder Traversal](./leetcode/No144.binary-tree-preorder-traversal.js)
9. [No.145 Binary Tree Postorder Traversal](./leetcode/No145.binary-tree-postorder-traversal.js)
10. [No.150 Evaluate Reverse Polish Notation](./leetcode/No150.evaluate-reverse-polish-notation.js)
11. [No.155 Min Stack](./leetcode/No155.min-stack.js)
12. [No.173 Binary Search Tree Iterator](./leetcode/No173.binary-search-tree-iterator.js)
13. [No.225 Implement Stack using Queues](./leetcode/No225.implement-stack-using-queues.js)
14. [No.232 Implement Queue using Stacks](./leetcode/No232.implement-queue-using-stacks.js)

#### 队列，queue

队列是一种**先进先出**（FIFO, First in first out）的有序集合

### 链表

链表储存有序的元素集合，其中的元素在内存中不是连续放置的。对于**单向链表**，每个元素由一个储存**元素本身的节点**和一个**指向下一个元素的引用**组成；而**双向链表**中的各元素则多了一个**指向上一个元素的引用**

链表的存在有什么意义呢？

对于传统的数组而言，我们增加或删除一个元素时，需要移动其之后的元素。比如删除了 `index` 为 10 的元素，那么之前 `index` 为 11 的元素需要向前挪动一位；同理，后面的每一个元素都要向前挪动一位。

除此以外，链表和数组的又一个差别是，数组可以直接通过 `array[index]` 访问到 `index` 位上的元素；而对于链表而言，需要从头开始遍历到目标元素。

由此可知，当我们在**单向链表**中某个位置上插入一个元素 `node` 时：

1. 遍历查找到位于 `index` 的元素 `current`，以及它的上一位元素 `previous`
2. 将 `previous` 的 `next` 指向 `node`
3. 将 `node` 的 `next` 指向 `current`

同理，删除某个位置上的元素，即是将该位置的上一个元素的 `next` 指向了该位置的下一位元素。

对于双向链表而言，则多了设置 `pre` 指向上一个元素的一步。

LeetCode 上相关题目：

1. [No.2 Add Two Numbers](./leetcode/No02.add-two-numbers.js)
2. [No.19 Remove Nth Node From End of List](./leetcode/No19.remove-nth-node-from-end-of-list.js)
3. [No.21 Merge Two Sorted Lists](./leetcode/No21.merge-two-sorted-lists.js)
4. [No.23 Merge k Sorted Lists](./leetcode/No23.merge-k-sorted-lists.js)
5. [No.24 Swap Nodes in Pairs](./leetcode/No24.swap-nodes-in-pairs.js)
6. [No.25 Reverse Nodes in k-Group](./leetcode/No25.reverse-nodes-in-k-group.js)
7. [No.61 Rotate List](./leetcode/No61.rotate-list.js)
8. [No.82 Remove Duplicates from Sorted List II](./leetcode/No82.remove-duplicates-from-sorted-list-II.js)
9. [No.83 Remove Duplicates from Sorted List](./leetcode/No83.remove-duplicates-from-sorted-list.js)
10. [No.86 Partition List](./leetcode/No86.partition-list.js)
11. [No.92 Reverse Linked List II](./leetcode/No92.reverse-linked-list-II.js)
12. [No.109 Convert Sorted List to Binary Search Tree](./leetcode/No109.convert-sorted-list-to-binary-search-tree.js)
13. [No.138 Copy List with Random Pointer](./leetcode/No138.copy-list-with-random-pointer.js)
14. [No.141 Linked List Cycle](./leetcode/No141.linked-list-cycle.js)
15. [No.142 Linked List Cycle II](./leetcode/No142.linked-list-cycle-II.js)
16. [No.143 Reorder List](./leetcode/No143.reorder-list.js)
17. [No.147 Insertion Sort List](./leetcode/No147.insertion-sort-list.js)
18. [No.148 Sort List](./leetcode/No148.sort-list.js)
19. [No.160 Intersection of Two Linked Lists](./leetcode/No160.intersection-of-two-linked-lists.js)
20. [No.206 Reverse Linked List](./leetcode/No206.reverse-linked-list.js)
21. [No.445 Add Two Numbers II](./leetcode/No445.add-two-numbers-II.js)

### 集合与字典（映射）

LeetCode 上相关题目：

1. [No.560 Subarray Sum Equals K](./leetcode/No560.subarray-sum-equals-k.js)

#### 集合

集合中的元素无序且唯一。可以按照插入元素的顺序来迭代集合中的各元素。

在 ES6 原生 API 中，支持了 [`Set` ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 和 [`WeakSet`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)。但要注意的一点是，尽管 `Set` 中的值是唯一的，且 JS 中 `NaN !== NaN` ，但在 `Set` 里 `NaN` 仍被认为是相同的值。除此以外，集合中以 `value, value` 的形式储存数据，即保存的 `value` 也会作为它本身的 `key` 便于索引查找。

#### 字典（映射）

与 `Set` 中 `value` 做 `key` 不同，字典 `Map` 需要给 `value` 制定一个 `key` 。它也用来储存不重复的数据。

在 ES6 原生 API 中，有 [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 以及 [`WeakMap`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) 两种字典。

---

`Set`、 `Map` 相对于列表的优点在于，当需要储存较多数据时，不会因为其中某个元素的增删而影响到后面其他元素的索引（这一点优势链表也具有），同时，如果需要查找是否存在某个元素，则 `Set`、 `Map` 可以很快的进行判断，而列表则需要对元素进行遍历。

在 [`lodash`](https://github.com/lodash/lodash) 中，有 [`SetCache`](https://github.com/lodash/lodash/blob/master/.internal/SetCache.js) 对象。当数据元素个数大于设定的一定值时，会将数组转化到 `SetCache` 中，在底层其实就是将数组转换为了 `key: value` 的键值对，可以大大增快其索引速度。

`WeakMap` 和 `WeakSet` 相比较于 `Map` 和 `Set` 而言：

- `WeakMap` 和 `WeakSet` 对象中只能存放*对象值*, 不能存放原始值, 而 `Map` 和 `Set` 都可以
- `WeakMap` 和 `WeakSet` 对象中存储的对象值都是被**弱引用**的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉。
- 因此，`WeakMap` 和 `WeakSet` 对象是无法被枚举的, 没有办法拿到它包含的所有元素

### 散列

`HashTable`（或 `HashMap` ）。对散列中的元素而言，拥有一个特殊的键值（通常通过元素的 ASCII 码获取到），以此来增加索引的速度。除此以外，在删除某个元素以后，散列对该键的索引值将指向 `undefined` ，也就因此避免了改变其他元素的位置。

但其实有时候，不同元素计算得到的 `key` 依旧会有重复。如果是不加处理的普通散列，则当 `key` 重复时，后加入的元素会覆盖原有的元素。但我们可以通过`分离链接` 或者 `线性探索` 的方法解决这个问题。

- 分离链接

散列中的每一个 `key` 都指向一个链表；对于每个新增的元素，都会 push 到相对应的引用中去。这也就避免了元素 key 重复的问题，但很显然：占用了多余的储存空间。

- 线性探索

当想向表中某位置加入一个新元素时，如果索引为 `index` 的位置已经被其他元素占据了，则尝试 `index + 1` 的位置。如果仍然被占据，则继续尝试 `index + 2` 的位置；以此类推。

### 二叉树

如其名，是一个树状的数据结构，由很多节点组成，各节点可以有祖先节点（父节点等）和后代节点（子节点等）。节点的深度取决于它祖先节点的数量；树的深度则取决于所有节点深度的最大值。

#### 二叉搜索树（BST）

二叉树的一种。只允许在节点的左侧储存比父节点小的值，在右侧储存比父节点大的值。由此可知：

- 遍历 BST，每个节点只取其*左侧的子节点*进行递归，直至没有子节点。最终所得的数是树中的*最小值*。
- 遍历 BST，每个节点只取其*右侧的子节点*进行递归，直至没有子节点。最终所得的数是树中的*最大值*。

#### BST 的遍历

- 中序遍历（inorder）

按照从最小到最大的顺序访问二叉树中的各节点。即对于每个节点，先遍历左子节点，然后根节点，最后右子节点。LeetCode 中相关题目：

1. [No.94 Binary Tree Inorder Traversal](./leetcode/No94.binary-tree-inorder-traversal.js)
2. [No.173 Binary Search Tree Iterator](./leetcode/No173.binary-search-tree-iterator.js)
3. [No.105 Construct Binary Tree from Preorder and Inorder Traversal](./leetcode/No105.construct-binary-tree-from-preorder-and-inorder-traversal.js)
4. [No.106 Construct Binary Tree from Inorder and Postorder Traversal.js](./leetcode/No106.construct-binary-tree-from-inorder-and-postorder-traversal.js)

- 前序遍历（preorder）

先访问父节点，再访问其所有子节点。即中左右顺序。LeetCode 中相关题目：

1. [No.144 Binary Tree Preorder Traversal](./leetcode/No144.binary-tree-preorder-traversal.js)
2. [No.105 Construct Binary Tree from Preorder and Inorder Traversal](./leetcode/No105.construct-binary-tree-from-preorder-and-inorder-traversal.js)

- 后序遍历（postorder）

先访问所有子节点，再访问父节点。即左右中。LeetCode 中相关题目：

1. [No.145 Binary Tree Postorder Traversal](./leetcode/No145.binary-tree-postorder-traversal.js)
2. [No.106 Construct Binary Tree from Inorder and Postorder Traversal.js](./leetcode/No106.construct-binary-tree-from-inorder-and-postorder-traversal.js)

### 图

图是一种由边连接的节点（或顶点）。

- 相邻顶点：由一条边连接在一起的两个顶点
- 顶点的度：该顶点相邻顶点的数量
- 简单路径：不包含重复顶点的路径
- 环：简单路径的一种，表示从某顶点起始，不经过重复顶点，仍能回到初始顶点
- 无环：图中不存在环
- 连通：图中**每两个顶点间**都存在路径
- 强连通：图中每两个顶点间在双向上都存在路径

图可以通过**邻接表**这样的数据结构来表示。在邻接表中，用列表、链表或者散列来储存所有的顶点，并可以使用字典来储存`顶点: [顶点所有的邻接顶点]`

#### 图的遍历

图的遍历思想是，追踪每一个第一次访问的节点，并且追踪有哪些节点还没被完全探索过（该顶点的每条边都被查看过则算完全探索）。

1. 一开始，所有顶点被储存至**待访问顶点列表**中，并被标记为**未查看**。
2. 每经过一个顶点，将其标记为**已查看，未完全探索**。
3. 待与该顶点相连的所有变都经过以后，将该顶点标记为**已完全探索**。
4. **每个顶点至多访问两次**（未查看 -> 已查看，已查看 -> 已完全探索）

LeetCode 上相关题目：

1. [No.133 Clone Graph](./leetcode/No133.clone-graph.js)

### 深度优先搜索 DFS/Depth-First-Search

深度优先搜索：**栈的形式储存待访问顶点，元素后入先出**。

从指定的第一个顶点开始遍历图，沿着某路径直到最后一个顶点；然后原路退回后搜索下一个路径。即先深入访问，再增加广度。

基本搜索过程：

1. 从某顶点（V）开始搜索，并标注为**已查看，未完全探索**

2. 获取其所有未访问邻节点，放入栈中

   2.1. 依次访问邻节点，后入的邻节点先被取出

   2.2. 对每个邻节点重复 1 的操作（递归）

3. 邻节点访问完毕之后，标注 V 为**已完全探索**

LeetCode 上 DFS 相关题目：

1. [No.98 Validate Binary Search Tree](./leetcode/No98.validate-binary-search-tree.js)
2. [No.100 Same Tree](./leetcode/No100.same-tree.js)
3. [No.101 Symmetric Tree](./leetcode/No101.symmetric-tree.js)
4. [No.104 Maximum Depth of Binary Tree](./leetcode/No104.maximum-depth-of-binary-tree.js)
5. [No.105 Construct Binary Tree from Preorder and Inorder Traversal](./leetcode/No105.construct-binary-tree-from-preorder-and-inorder-traversal.js)
6. [No.106 Construct Binary Tree from Inorder and Postorder Traversal](./leetcode/No106.construct-binary-tree-from-inorder-and-postorder-traversal.js)
7. [No.108 Convert Sorted Array to Binary Search Tree](./leetcode/No108.convert-sorted-array-to-binary-search-tree.js)
8. [No.109 Convert Sorted List to Binary Search Tree](./leetcode/No109.convert-sorted-list-to-binary-search-tree.js)
9. [No.110 Balanced Binary Tree](./leetcode/No110.balanced-binary-tree.js)
10. [No.111 Minimum Depth of Binary Tree](./leetcode/No111.minimum-depth-of-binary-tree.js)
11. [No.112 Path Sum](./leetcode/No112.path-sum.js)
12. [No.113 Path Sum II](./leetcode/No113.path-sum-II.js)
13. [No.114 Flatten Binary Tree to Linked List](./leetcode/No114.flatten-binary-tree-to-linked-list.js)
14. [No.116 Populating Next Right Pointers in Each Node](./leetcode/No116.populating-next-right-pointers-in-each-node.js)
15. [No.117 Populating Next Right Pointers in Each Node II](../leetcode/No117.populating-next-right-pointers-in-each-node-II.js)
16. [No.124 Binary Tree Maximum Path Sum](./leetcode/No124.binary-tree-maximum-path-sum.js)
17. [No.129 Sum Root to Leaf Numbers](./leetcode/No129.sum-root-to-leaf-numbers.js)
18. [No.130 Surrounded Regions](./leetcode/No130.surrounded-regions.js)
19. [No.133 Clone Graph](./leetcode/No133.clone-graph.js)

### 广度优先搜索 BFS/Breadth-First-Search

广度优先搜索：**队列的形式储存待访问顶点，元素先入先出**。

从指定的第一个顶点开始遍历图，先访问所有的相邻点，即访问图的一层，然后深入到下一层进行递归。

基本搜索过程：

1. 创建队列 Queue

2. 将某节点（V）放入队列

   2.1. 按照先入先出的顺序，取出节点 V

   2.2. 将节点 V 标注为**已查看，未完全探索**

   2.3. 取出 V 的所有未访问邻节点，放入队列

   2.4. 将 V 标注为**已完全探索**

LeetCode 上 BFS 相关题目：

1. [No.101 Symmetric Tree](./leetcode/No101.symmetric-tree.js)
2. [No.102 Binary Tree Level Order Traversal](./leetcode/No102.binary-tree-level-order-traversal.js)
3. [No.103 Binary Tree Zigzag Level Order Traversal](./leetcode/No103.binary-tree-zigzag-level-order-traversal.js)
4. [No.107 Binary Tree Level Order Traversal II](./leetcode/No107.binary-tree-level-order-traversal-II.js)
5. [No.111 Minimum Depth of Binary Tree](./leetcode/No111.minimum-depth-of-binary-tree.js)
6. [No.126 Word Ladder II](./leetcode/No126.word-ladder-II.js)
7. [No.127 Word Ladder](./leetcode/No127.word-ladder.js)
8. [No.130 Surrounded Regions](./leetcode/No130.surrounded-regions.js)
9. [No.133 Clone Graph](./leetcode/No133.clone-graph.js)
10. [No.279 Perfect Squares](./leetcode/No279.perfect-squares.js)

### 算法基本概念

#### 复杂度 - 大 O 表示法

通常，我们会综合考虑 CPU 占用、内存占用、硬盘占用、网络占用等多种情况来判断一个算法的好坏。综合起来后，使用**时间复杂度**这个概念来代表算法执行速度，以此进行衡量。

但一个算法的执行时间并不是固定的。总会有最佳、平均、最坏情况出现。而时间复杂度则代表其**最坏情况下**的运行时间。理由呢？参考微积分的一条基本概念就知道了：对于一个多项式，随着 x 变量的无限增大，其极限趋近于首项的值。例如，Y(x) = x^3 + x^2 + x 的值会在 x 趋向于无穷大时近似于 x^3。

在算法中，常见的时间复杂度的表示有（C 为常量）：

- O(b): 复杂度为 Cb，其中 b 是常量
- O(n)：当 n 很大时复杂度趋向于 Cn
- O(n^2)：当 n 很大时复杂度趋向于 Cn^2
- ...依次类推

具体什么意思呢？

假设有一个函数：

```javascript
const add = (a, b) => a + b;
```

不管执行时 a, b 参数是多少，它的执行时间是恒定可预测的，即时间与参数无关。我们就可以说它的时间复杂度是 O(1)。

同样是一个求和函数，扩展一下其可接受的参数：

```javascript
const add = (...args) => args.reduce((p, c) => p + c, 0);
```

让其接受的参数不限，利用 `reduce` 遍历求和。此时，该函数的时间复杂度变为 O(n)，其中 n 代表参数个数。

再来一个更复杂一点的，假设我们会接受一个嵌套的数组，需要依次取出里面的每一个元素，通过某种方法 `format` 以后，将其扁平化到一个数组中返回：

```javascript
/*
 * 接受形如 [[1, 2, 3], [4, 5, 6]] 的嵌套数组，返回
 * [format(1), ..., format(6)]
 * 其中 format 代表对每个参数都进行了特殊处理
 */
const flatArray = (arg) => {
  const result = [];
  const format = (item) => {
    // do something special
  };
  arg.forEach((array) => {
    array.forEach(item => result.push(format(item)));
  });
  return result;
};
```

很傻的函数吧？反正只是为了学习。在这个函数里，我们有两层嵌套循环，因此，算法的时间复杂度为 O(n^2)。

同理，当函数有三层嵌套循环时，我们可以认为其时间复杂度为 O(n^3)，以此类推。

附一些可以参考的资料：

- [What is a plain English explanation of “Big O” notation?](http://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)
- [算法复杂度分析](http://www.cnblogs.com/gaochundong/p/complexity_of_algorithms.html)
- [算法时间复杂度的表示法O(n²)、O(n)、O(1)、O(nlogn)等是什么意思？](https://www.zhihu.com/question/21387264)