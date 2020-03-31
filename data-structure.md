<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [JavaScript 数据结构](#javascript-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
  - [堆，栈，队列](#%E5%A0%86%E6%A0%88%E9%98%9F%E5%88%97)
    - [堆，heap](#%E5%A0%86heap)
    - [栈，stack](#%E6%A0%88stack)
    - [队列，queue](#%E9%98%9F%E5%88%97queue)
  - [链表](#%E9%93%BE%E8%A1%A8)
  - [集合与字典（映射）](#%E9%9B%86%E5%90%88%E4%B8%8E%E5%AD%97%E5%85%B8%E6%98%A0%E5%B0%84)
    - [集合](#%E9%9B%86%E5%90%88)
    - [字典（映射）](#%E5%AD%97%E5%85%B8%E6%98%A0%E5%B0%84)
  - [散列](#%E6%95%A3%E5%88%97)
  - [二叉树](#%E4%BA%8C%E5%8F%89%E6%A0%91)
    - [二叉搜索树（BST）](#%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91bst)
    - [前驱和后继](#%E5%89%8D%E9%A9%B1%E5%92%8C%E5%90%8E%E7%BB%A7)
    - [BST 的遍历](#bst-%E7%9A%84%E9%81%8D%E5%8E%86)
      - [前序遍历（preorder）](#%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86preorder)
      - [中序遍历（inorder）](#%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86inorder)
      - [后序遍历（postorder）](#%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86postorder)
      - [层序遍历（level-order）](#%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86level-order)
  - [图](#%E5%9B%BE)
    - [图的遍历](#%E5%9B%BE%E7%9A%84%E9%81%8D%E5%8E%86)
  - [并查集 Union Find](#%E5%B9%B6%E6%9F%A5%E9%9B%86-union-find)
  - [深度优先搜索 DFS/Depth-First-Search](#%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2-dfsdepth-first-search)
  - [广度优先搜索 BFS/Breadth-First-Search](#%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2-bfsbreadth-first-search)
  - [算法基本概念](#%E7%AE%97%E6%B3%95%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)
    - [复杂度 - 大 O 表示法](#%E5%A4%8D%E6%9D%82%E5%BA%A6---%E5%A4%A7-o-%E8%A1%A8%E7%A4%BA%E6%B3%95)
    - [动态规划](#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92)
    - [字符串问题](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%97%AE%E9%A2%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## JavaScript 数据结构

### 堆，栈，队列

> 堆和栈：https://blog.csdn.net/K346K346/article/details/80849966

#### 堆，heap

堆是满足一定限制的树型结构。关于二叉堆的更多实现细节，查看[优先队列](./priority-queues)

LeetCode 上相关题目：

1. [No.23 Merge k Sorted Lists](./leetcode/JavaScript/No23.merge-k-sorted-lists.js)
2. [No.179 Largest Number](./leetcode/JavaScript/No179.largest-number.js)
3. [No.215 Kth Largest Element in an Array](./leetcode/JavaScript/No215.kth-largest-element-in-an-array.js)
4. [No.264 Ugly Number II](./leetcode/JavaScript/No264.ugly-number-II.js)
5. [No.347 Top K Frequent Elements](./leetcode/JavaScript/No347.top-k-frequent-elements.js)
6. [No.451 Sort Characters By Frequency](./leetcode/JavaScript/No451.sort-characters-by-frequency.js)

#### 栈，stack

栈又称堆栈，是一种**先进后出**（FILO - First in Lirst out，也可以是后进先出 LIFO - Last in First out）的有序集合

LeetCode 上相关题目：

1. [No.20 Valid Parentheses](./leetcode/JavaScript/No20.valid-parentheses.js)
2. [No.42 Trapping Rain Water](./leetcode/JavaScript/No42.trapping-rain-water.js)
3. [No.71 Simplify Path](./leetcode/JavaScript/No71.simplify-path.js)
4. [No.84 Largest Rectangle in Histogram](./leetcode/JavaScript/No84.largest-rectangle-in-histogram.js)
5. [No.85 Maximal Rectangle](./leetcode/JavaScript/No85.maximal-rectangle.js)
6. [No.94 Binary Tree Inorder Traversal](./leetcode/JavaScript/No94.binary-tree-inorder-traversal.js)
7. [No.103 Binary Tree Zigzag Level Order Traversal](./leetcode/JavaScript/No103.binary-tree-zigzag-level-order-traversal.js)
8. [No.144 Binary Tree Preorder Traversal](./leetcode/JavaScript/No144.binary-tree-preorder-traversal.js)
9. [No.145 Binary Tree Postorder Traversal](./leetcode/JavaScript/No145.binary-tree-postorder-traversal.js)
10. [No.150 Evaluate Reverse Polish Notation](./leetcode/JavaScript/No150.evaluate-reverse-polish-notation.js)
11. [No.155 Min Stack](./leetcode/JavaScript/No155.min-stack.js)
12. [No.173 Binary Search Tree Iterator](./leetcode/JavaScript/No173.binary-search-tree-iterator.js)
13. [No.225 Implement Stack using Queues](./leetcode/JavaScript/No225.implement-stack-using-queues.js)
14. [No.232 Implement Queue using Stacks](./leetcode/JavaScript/No232.implement-queue-using-stacks.js)

#### 队列，queue

队列是一种**先进先出**（FIFO, First in first out）的有序集合

LeetCode 上相关题目：

1. [No.621 Task Scheduler](./leetcode/JavaScript/No621.task-scheduler.js)
2. [No.622 Design Circular Queue](./leetcode/JavaScript/No622.design-circular-queue.js)
3. [No.641 Design Circular Deque](./leetcode/JavaScript/No641.design-circular-deque.js)
4. [面试题 09. 用两个栈实现队列](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

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

1. [No.2 Add Two Numbers](./leetcode/JavaScript/No02.add-two-numbers.js)
2. [No.19 Remove Nth Node From End of List](./leetcode/JavaScript/No19.remove-nth-node-from-end-of-list.js) - Two pointers
3. [No.21 Merge Two Sorted Lists](./leetcode/JavaScript/No21.merge-two-sorted-lists.js)
4. [No.23 Merge k Sorted Lists](./leetcode/JavaScript/No23.merge-k-sorted-lists.js)
5. [No.24 Swap Nodes in Pairs](./leetcode/JavaScript/No24.swap-nodes-in-pairs.js)
6. [No.25 Reverse Nodes in k-Group](./leetcode/JavaScript/No25.reverse-nodes-in-k-group.js)
7. [No.61 Rotate List](./leetcode/JavaScript/No61.rotate-list.js)
8. [No.82 Remove Duplicates from Sorted List II](./leetcode/JavaScript/No82.remove-duplicates-from-sorted-list-II.js)
9. [No.83 Remove Duplicates from Sorted List](./leetcode/JavaScript/No83.remove-duplicates-from-sorted-list.js)
10. [No.86 Partition List](./leetcode/JavaScript/No86.partition-list.js)
11. [No.92 Reverse Linked List II](./leetcode/JavaScript/No92.reverse-linked-list-II.js)
12. [No.109 Convert Sorted List to Binary Search Tree](./leetcode/JavaScript/No109.convert-sorted-list-to-binary-search-tree.js)
13. [No.138 Copy List with Random Pointer](./leetcode/JavaScript/No138.copy-list-with-random-pointer.js)
14. [No.141 Linked List Cycle](./leetcode/JavaScript/No141.linked-list-cycle.js)
15. [No.142 Linked List Cycle II](./leetcode/JavaScript/No142.linked-list-cycle-II.js)
16. [No.143 Reorder List](./leetcode/JavaScript/No143.reorder-list.js)
17. [No.147 Insertion Sort List](./leetcode/JavaScript/No147.insertion-sort-list.js)
18. [No.148 Sort List](./leetcode/JavaScript/No148.sort-list.js)
19. [No.160 Intersection of Two Linked Lists](./leetcode/JavaScript/No160.intersection-of-two-linked-lists.js)
20. [No.206 Reverse Linked List](./leetcode/JavaScript/No206.reverse-linked-list.js)
21. [No.445 Add Two Numbers II](./leetcode/JavaScript/No445.add-two-numbers-II.js)

### 集合与字典（映射）

LeetCode 上相关题目：

1. [No.560 Subarray Sum Equals K](./leetcode/JavaScript/No560.subarray-sum-equals-k.js)

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

LeetCode 上相关题目：

1. [No.1 Two Sum](./leetcode/JavaScript/No01.two-sum.js)
2. [No.3 Longest Substring Without Repeating Characters](./leetcode/JavaScript/No03.longest-substring-without-repeating-characters.js)
3. [No.18 4Sum](./leetcode/JavaScript/No18.4sum.js)
4. [No.30 Substring with Concatenation of All Words](./leetcode/JavaScript/No30.substring-with-concatenation-of-all-words.js)
5. [No.36 Valid Sudoku](./leetcode/JavaScript/No36.valid-sudoku.js)
6. [No.37 Sudoku Solver](./leetcode/JavaScript/No37.sudoku-solver.js)
7. [No.49 Group Anagrams](./leetcode/JavaScript/No49.group-anagrams.js)
8. [No.76 Minimum Window Substring](./leetcode/JavaScript/No76.minimum-window-substring.js)
9. [No.85 Maximal Rectangle](./leetcode/JavaScript/No85.maximal-rectangle.js)
10. [No.94 Binary Tree Inorder Traversal](./leetcode/JavaScript/No94.binary-tree-inorder-traversal.js)
11. [No.136 Single Number](./leetcode/JavaScript/No136.single-number.js)
12. [No.138 Copy List with Random Pointer](./leetcode/JavaScript/No138.copy-list-with-random-pointer.js)
13. [No.166 Fraction to Recurring Decimal](./leetcode/JavaScript/No166.fraction-to-recurring-decimal.js)
14. [No.204 Count Primes](./leetcode/JavaScript/No204.count-primes.js)
15. [No.217 Contains Duplicate](./leetcode/JavaScript/No217.contains-duplicate.js)
16. [No.219 Contains Duplicate II](./leetcode/JavaScript/No219.contains-duplicate-II.js)
17. [No.389 Find the Difference](./leetcode/JavaScript/No389.find-the-difference.js)
18. [No.599 Minimum Index Sum of Two Lists](./leetcode/JavaScript/No599.minimum-index-sum-of-two-lists.js)

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

#### 前驱和后继

- 某节点 A 的前驱节点：节点值小于当前节点值 A，且值最大的节点。即左子树的最右节点
- 某节点 B 的后继节点：节点值大于当前节点值 B，且值最小的节点。即右子树的最左节点

前驱和后继要结合遍历顺序来谈，某个节点在特定遍历顺序下，序列中的前后两个节点就是它的前驱和后继。如二叉树：

```
      1
  2       3
4  5    6   7
```

以结点 2 为例，

- 前序遍历下，遍历序列为 1 2 4 5 3 6 7，故前驱和后继为 1、4
- 中序遍历下，遍历序列为 4 2 5 1 6 3 7，故前驱和后继为 4、5
- 后序遍历下，遍历序列为 4 5 2 6 7 3 1，故前驱和后继为 5、6

#### BST 的遍历

##### 前序遍历（preorder）

先访问父节点，再访问其所有子节点。即中左右顺序。LeetCode 中相关题目：

1. [**No.144 Binary Tree Preorder Traversal**](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
2. [No.105 Construct Binary Tree from Preorder and Inorder Traversal](./leetcode/JavaScript/No105.construct-binary-tree-from-preorder-and-inorder-traversal.js)

##### 中序遍历（inorder）

按照**从最小到最大的顺序访问二叉树中的各节点**。即对于每个节点，先遍历左子节点，然后根节点，最后右子节点。LeetCode 中相关题目：

1. [**No.94 Binary Tree Inorder Traversal**](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
2. [No.99 Recover Binary Search Tree](./leetcode/JavaScript/No99.recover-binary-search-tree.js)
3. [No.173 Binary Search Tree Iterator](./leetcode/JavaScript/No173.binary-search-tree-iterator.js)
4. [No.105 Construct Binary Tree from Preorder and Inorder Traversal](./leetcode/JavaScript/No105.construct-binary-tree-from-preorder-and-inorder-traversal.js)
5. [No.106 Construct Binary Tree from Inorder and Postorder Traversal.js](./leetcode/JavaScript/No106.construct-binary-tree-from-inorder-and-postorder-traversal.js)
6. [No285. Inorder Successor in BST.js](./leetcode/JavaScript/No285.inorder-successor-in-bst.js)

##### 后序遍历（postorder）

先访问所有子节点，再访问父节点。即左右中。LeetCode 中相关题目：

1. [**No.145 Binary Tree Postorder Traversal**](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)
2. [No.106 Construct Binary Tree from Inorder and Postorder Traversal.js](./leetcode/JavaScript/No106.construct-binary-tree-from-inorder-and-postorder-traversal.js)

**对于前/中/后序三种遍历，都可以通过三种形式实现：**

1. 递归：实现方式最简单，O(n) 空间复杂度
2. 循环：实现方式较递归稍复杂，利用堆/队列，O(n) 空间复杂度
3. Morris 算法：最优，O(1) 空间复杂度：[Morris Traversal方法遍历二叉树（非递归，不用栈，O(1)空间）](https://www.cnblogs.com/AnnieKim/archive/2013/06/15/MorrisTraversal.html)

查看

- [前序遍历的递归/循环/Morris Traversal 实现](./leetcode/JavaScript/No144.binary-tree-preorder-traversal.js)
- [中序遍历的递归/循环/Morris Traversal 实现](./leetcode/JavaScript/No94.binary-tree-inorder-traversal.js)
- [后序遍历的递归/循环/Morris Traversal 实现](./leetcode/JavaScript/No145.binary-tree-postorder-traversal.js)

二叉树复原：

- [No105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
- [No106. 从中序与后序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
- [No889. 根据前序和后序遍历构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)
- [No1008. 先序遍历构造二叉树](https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/)
- [No1028. 从先序遍历还原二叉树](https://leetcode-cn.com/problems/recover-a-tree-from-preorder-traversal/)

##### 层序遍历（level-order）

每次遍历二叉树的一层，遍历完当前层后再进行下一层的遍历 -> 广度优先算法

1. [No.102 Binary Tree Level-Order Traversal](./leetcode/JavaScript/No102.binary-tree-level-order-traversal.js)
2. [No.107 Binary Tree Level-Order Traversal II.js](./leetcode/JavaScript/No107.binary-tree-level-order-traversal-II.js)
3. [No.103 Binary Tree Zigzag Level-Order Traversal.js](./leetcode/JavaScript/No103.binary-tree-zigzag-level-order-traversal.js)

LeetCode 上相关题目：

1. [No208 Implement Trie Prefix Tree](./leetcode/JavaScript/No208.implement-trie-prefix-tree.js)
2. [No212 Word Search II](./leetcode/JavaScript/No212.word-search-II.js)
3. [No676 Implement Magic Dictionary](./leetcode/JavaScript/No676.implement-magic-dictionary.js)

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

1. [No.133 Clone Graph](./leetcode/JavaScript/No133.clone-graph.js)

### 并查集 Union Find

### 深度优先搜索 DFS/Depth-First-Search

深度优先搜索：**栈的形式储存待访问顶点，元素后入先出**。

从指定的第一个顶点开始遍历图，沿着某路径直到最后一个顶点；然后原路退回后搜索下一个路径。即先深入访问，再增加广度。

基本搜索过程：

1. 从某顶点（V）开始搜索，并标注为**已查看，未完全探索**

2. 获取其所有未访问邻节点，放入栈中

   2.1. 依次访问邻节点，后入的邻节点先被取出

   2.2. 对每个邻节点重复 1 的操作（递归）

3. 邻节点访问完毕之后，标注 V 为**已完全探索**

```javascript
// 常见遍历式 DFS
const data = {} // something..
const queue = [data]

while (queue.length) {
  const item = queue.pop()

  // 针对某节点遍历到最底部
  for (const something of item.next()) {
    queue.push(something)
  }
}
```

LeetCode 上 DFS 相关题目：

1. [No.98 Validate Binary Search Tree](./leetcode/JavaScript/No98.validate-binary-search-tree.js)
2. [No.100 Same Tree](./leetcode/JavaScript/No100.same-tree.js)
3. [No.101 Symmetric Tree](./leetcode/JavaScript/No101.symmetric-tree.js)
4. [No.104 Maximum Depth of Binary Tree](./leetcode/JavaScript/No104.maximum-depth-of-binary-tree.js)
5. [No.105 Construct Binary Tree from Preorder and Inorder Traversal](./leetcode/JavaScript/No105.construct-binary-tree-from-preorder-and-inorder-traversal.js)
6. [No.106 Construct Binary Tree from Inorder and Postorder Traversal](./leetcode/JavaScript/No106.construct-binary-tree-from-inorder-and-postorder-traversal.js)
7. [No.108 Convert Sorted Array to Binary Search Tree](./leetcode/JavaScript/No108.convert-sorted-array-to-binary-search-tree.js)
8. [No.109 Convert Sorted List to Binary Search Tree](./leetcode/JavaScript/No109.convert-sorted-list-to-binary-search-tree.js)
9. [No.110 Balanced Binary Tree](./leetcode/JavaScript/No110.balanced-binary-tree.js)
10. [No.111 Minimum Depth of Binary Tree](./leetcode/JavaScript/No111.minimum-depth-of-binary-tree.js)
11. [No.112 Path Sum](./leetcode/JavaScript/No112.path-sum.js)
12. [No.113 Path Sum II](./leetcode/JavaScript/No113.path-sum-II.js)
13. [No.114 Flatten Binary Tree to Linked List](./leetcode/JavaScript/No114.flatten-binary-tree-to-linked-list.js)
14. [No.116 Populating Next Right Pointers in Each Node](./leetcode/JavaScript/No116.populating-next-right-pointers-in-each-node.js)
15. [No.117 Populating Next Right Pointers in Each Node II](../leetcode/JavaScript/No117.populating-next-right-pointers-in-each-node-II.js)
16. [No.124 Binary Tree Maximum Path Sum](./leetcode/JavaScript/No124.binary-tree-maximum-path-sum.js)
17. [No.129 Sum Root to Leaf Numbers](./leetcode/JavaScript/No129.sum-root-to-leaf-numbers.js)
18. [No.130 Surrounded Regions](./leetcode/JavaScript/No130.surrounded-regions.js)
19. [No.133 Clone Graph](./leetcode/JavaScript/No133.clone-graph.js)

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

```javascript
// 常见遍历式 BFS
const data = {} // something..
const queue = [data]

while (queue.length) {
  let len = queue.length
  // 每次处理一层
  while (len) {
    const item = queue.shift()

    for (const something of item.next()) {
      queue.push(something)
    }

    len -= 1
  }
}
```

LeetCode 上 BFS 相关题目：

1. [No.101 Symmetric Tree](./leetcode/JavaScript/No101.symmetric-tree.js)
2. [No.102 Binary Tree Level Order Traversal](./leetcode/JavaScript/No102.binary-tree-level-order-traversal.js)
3. [No.103 Binary Tree Zigzag Level Order Traversal](./leetcode/JavaScript/No103.binary-tree-zigzag-level-order-traversal.js)
4. [No.107 Binary Tree Level Order Traversal II](./leetcode/JavaScript/No107.binary-tree-level-order-traversal-II.js)
5. [No.111 Minimum Depth of Binary Tree](./leetcode/JavaScript/No111.minimum-depth-of-binary-tree.js)
6. [No.126 Word Ladder II](./leetcode/JavaScript/No126.word-ladder-II.js)
7. [No.127 Word Ladder](./leetcode/JavaScript/No127.word-ladder.js)
8. [No.130 Surrounded Regions](./leetcode/JavaScript/No130.surrounded-regions.js)
9. [No.133 Clone Graph](./leetcode/JavaScript/No133.clone-graph.js)
10. [No.279 Perfect Squares](./leetcode/JavaScript/No279.perfect-squares.js)

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

在这个函数里，我们有两层嵌套循环，因此，算法的时间复杂度为 O(n^2)。

同理，当函数有三层嵌套循环时，我们可以认为其时间复杂度为 O(n^3)，以此类推。

附一些可以参考的资料：

- [What is a plain English explanation of “Big O” notation?](http://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)
- [算法复杂度分析](http://www.cnblogs.com/gaochundong/p/complexity_of_algorithms.html)
- [算法时间复杂度的表示法O(n²)、O(n)、O(1)、O(nlogn)等是什么意思？](https://www.zhihu.com/question/21387264)

#### [动态规划](./dynamic-programming)

#### [字符串问题](./string)
