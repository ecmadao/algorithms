<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Algorithms](#algorithms)
  - [预储备](#%E9%A2%84%E5%82%A8%E5%A4%87)
  - [Topic](#topic)
  - [LeetCode](#leetcode)
    - [JavaScript Solution](#javascript-solution)
    - [Swift4 Solution](#swift4-solution)
    - [Haskell Solution](#haskell-solution)
  - [Codewars](#codewars)
    - [Haskell Solution](#haskell-solution-1)
    - [JavaScript Solution](#javascript-solution-1)
  - [Run demo](#run-demo)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Algorithms

> 在设计算法时，面对的第一个任务是精准地定义问题。

Algorithms notes & code & leetcode solution by Node.js, Swift and Haskell.

### 预储备

[基本数据结构](./data-structure.md)：

- 堆/栈
- 链表
- 映射
- 散列
- 二叉树
- 图

### Topic

- [并查集](./union-find)
- [基本排序](./elementary-sorts)
- [归并排序](./mergesort)
- [快速排序](./quicksort)
- [优先队列](./priority-queues)
- [二叉搜索树](./binary-search-trees)
- 平衡二叉搜索树
  - [AVL 二叉搜索树](./balanced-search-trees)
  - [2-3 二叉搜索树](./2-3-search-trees)
  - [红黑二叉搜索树](./red-black-bsts)
  - [区间二叉搜索树](./interval-search-trees)
- [k-d 树](./k-d-trees)
- 字典树
  - [Trie树（Prefix Tree）介绍](http://blog.csdn.net/lisonglisonglisong/article/details/45584721)
  - [数据结构之Trie树](http://dongxicheng.org/structure/trietree/)
- 字符串
  - 字符串匹配的 KMP 算法
    - [KMP 算法详细解析](https://blog.sengxian.com/algorithms/kmp)
    - [克努斯-莫里斯-普拉特算法](https://zh.wikipedia.org/wiki/%E5%85%8B%E5%8A%AA%E6%96%AF-%E8%8E%AB%E9%87%8C%E6%96%AF-%E6%99%AE%E6%8B%89%E7%89%B9%E7%AE%97%E6%B3%95)
- [排列组合](./permutation-and-combination)
- [图](./graph)

### [LeetCode](https://leetcode.com/ecmadao/)

#### [JavaScript Solution](./leetcode/JavaScript)

| No  | Title | Difficulty |
| ------------- | ------------- | ------------- |
| 004 | [Median of Two Sorted Arrays](./leetcode/JavaScript/No04.median-of-two-sorted-arrays.js)  | `Hard` |
| 010 | [Regular Expression Matching](./leetcode/JavaScript/No10.regular-expression-matching.js)  | `Hard` |
| 023 | [Merge k Sorted Lists](./leetcode/JavaScript/No23.merge-k-sorted-lists.js)  | `Hard` |
| 025 | [Reverse Nodes in k-Group](./leetcode/JavaScript/No25.reverse-nodes-in-k-group.js)  | `Hard` |
| 030 | [Substring with Concatenation of All Words](./leetcode/JavaScript/No30.substring-with-concatenation-of-all-words.js)  | `Hard` |
| 032 | [Longest Valid Parentheses](./leetcode/JavaScript/No32.longest-valid-parentheses.js)  | `Hard` |
| 037 | [Sudoku Solver](./leetcode/JavaScript/No37.sudoku-solver.js)  | `Hard` |
| 041 | [First Missing Positive](./leetcode/JavaScript/No41.first-missing-positive.js) | `Hard` |
| 042 | [Trapping Rain Water](./leetcode/JavaScript/No42.trapping-rain-water.js) | `Hard` |
| 045 | [Jump Game II](./leetcode/JavaScript/No45.jump-game-II.js) | `Hard` |
| 051 | [N-Queens](./leetcode/JavaScript/No51.n-queens.js) | `Hard` |
| 052 | [N-Queens II](./leetcode/JavaScript/No52.n-queens-II.js) | `Hard` |
| 057 | [Insert Interval](./leetcode/JavaScript/No57.insert-interval.js) | `Hard` |
| 076 | [Minimum Window Substring](./leetcode/JavaScript/No76.minimum-window-substring.js) | `Hard` |
| 084 | [Largest Rectangle in Histogram](./leetcode/JavaScript/No84.largest-rectangle-in-histogram.js) | `Hard` |
| 085 | [Maximal Rectangle](./leetcode/JavaScript/No85.maximal-rectangle.js) | `Hard` |
| 087 | [Scramble String](./leetcode/JavaScript/No87.scramble-string.js) | `Hard` |
| 097 | [Interleaving String](./leetcode/JavaScript/No97.interleaving-string.js) | `Hard` |
| 099 | [Recover Binary Search Tree](./leetcode/JavaScript/No99.recover-binary-search-tree.js) | `Hard` |
| 123 | [Best Time to Buy and Sell Stock III](./leetcode/JavaScript/No123.best-time-to-buy-and-sell-stock-III.js) | `Hard` |
| 124 | [Binary Tree Maximum Path Sum](./leetcode/JavaScript/No124.binary-tree-maximum-path-sum.js) | `Hard` |
| 126 | [Word Ladder II](./leetcode/JavaScript/No126.word-ladder-II.js) | `Hard` |
| 128 | [Longest Consecutive Sequence](./leetcode/JavaScript/No128.longest-consecutive-sequence.js) | `Hard` |
| 132 | [Palindrome Partitioning II](./leetcode/JavaScript/No132.palindrome-partitioning-II.js) | `Hard` |
| 135 | [Candy](./leetcode/JavaScript/No135.candy.js) | `Hard` |
| 140 | [Word Break II](./leetcode/JavaScript/No140.word-break-II.js) | `Hard` |
| 145 | [Binary Tree Postorder Traversal](./leetcode/JavaScript/No145.binary-tree-postorder-traversal.js) | `Hard` |
| 146 | [LRU Cache](./leetcode/JavaScript/No146.lru-cache.js) | `Hard` |
| 154 | [Find Minimum in Rotated Sorted Array II](./leetcode/JavaScript/No154.find-minimum-in-rotated-sorted-array-II.js) | `Hard` |
| 164 | [Maximum Gap](./leetcode/JavaScript/No164.maximum-gap.js) | `Hard` |
| 174 | [Dungeon Game](./leetcode/JavaScript/No174.dungeon-game.js) | `Hard` |
| 188 | [Best Time to Buy and Sell Stock IV](./leetcode/JavaScript/No188.best-time-to-buy-and-sell-stock-iv.js) | `Hard` |
| 212 | [Word Search II](./leetcode/JavaScript/No212.word-search-II.js) | `Hard` |
| 214 | [Shortest Palindrome](./leetcode/JavaScript/No214.shortest-palindrome.js) | `Hard` |
| 224 | [Basic Calculator](./leetcode/JavaScript/No224.basic-calculator.js) | `Hard` |
| 233 | [Number of Digit One](./leetcode/JavaScript/No233.number-of-digit-one.js) | `Hard` |
| 239 | [Sliding Window Maximum](./leetcode/JavaScript/No239.sliding-window-maximum.js) | `Hard` |
| 282 | [Expression Add Operators](./leetcode/JavaScript/No282.expression-add-operators.js) | `Hard` |
| 295 | [Find Median from Data Stream](./leetcode/JavaScript/No295.find-median-from-data-stream.js) | `Hard` |
| 297 | [Serialize and Deserialize Binary Tree](./leetcode/JavaScript/No297.serialize-and-deserialize-binary-tree.js) | `Hard` |
| 363 | [Max Sum of Rectangle No Larger Than K](./leetcode/JavaScript/No363.max-sum-of-rectangle-no-larger-than-k.js) | `Hard` |
| 410 | [Split Array Largest Sum](./leetcode/JavaScript/No410.split-array-largest-sum.js) | `Hard` |
| 460 | [LFU Cache](./leetcode/JavaScript/No460.lfu-cache.js) | `Hard` |
| 446 | [Arithmetic Slices II - Subsequence](./leetcode/JavaScript/No446.arithmetic-slices-II-subsequence.js) | `Hard` |
| 685 | [Redundant Connection II](./leetcode/JavaScript/No685.redundant-connection-II.js) | `Hard` |
| 726 | [Number of Atoms](./leetcode/JavaScript/No726.number-of-atoms.js) | `Hard` |
|  |  |  |
| No  | Title | Difficulty |
| 002 | [Add Two Numbers](./leetcode/JavaScript/No02.add-two-numbers.js)  | `Medium` |
| 003 | [Longest Substring Without Repeating Characters](./leetcode/JavaScript/No03.longest-substring-without-repeating-characters.js)  | `Medium` |
| 005 | [Longest Palindromic Substring](./leetcode/JavaScript/No05.longest-palindromic-substring.js)  | `Medium` |
| 006 | [ZigZag Conversion](./leetcode/JavaScript/No06.zigzag-conversion.js)  | `Medium` |
| 008 | [String to Integer (atoi)](./leetcode/JavaScript/No08.string-to-integer.js)  | `Medium` |
| 011 | [Container With Most Water](./leetcode/JavaScript/No11.container-with-most-water.js)  | `Medium` |
| 012 | [Integer to Roman](./leetcode/JavaScript/No12.integer-to-roman.js)  | `Medium` |
| 015 | [3Sum](./leetcode/JavaScript/No15.3sum.js)  | `Medium` |
| 016 | [3Sum Closest](./leetcode/JavaScript/No16.3sum-closest.js)  | `Medium` |
| 017 | [Letter Combinations of a Phone Number](./leetcode/JavaScript/No17.letter-combinations-of-a-phone-number.js)  | `Medium` |
| 018 | [4Sum](./leetcode/JavaScript/No18.4sum.js)  | `Medium` |
| 019 | [Remove Nth Node From End of List](./leetcode/JavaScript/No19.remove-nth-node-from-end-of-list.js)  | `Medium` |
| 022 | [Generate Parentheses](./leetcode/JavaScript/No22.generate-parentheses.js)  | `Medium` |
| 024 | [Swap Nodes in Pairs](./leetcode/JavaScript/No24.swap-nodes-in-pairs.js)  | `Medium` |
| 029 | [Divide Two Integers](./leetcode/JavaScript/No29.divide-two-integers.js)  | `Medium` |
| 031 | [Next Permutation](./leetcode/JavaScript/No31.next-permutation.js)  | `Medium` |
| 033 | [Search in Rotated Sorted Array](./leetcode/JavaScript/No33.search-in-rotated-sorted-array.js)  | `Medium` |
| 034 | [Search for a Range](./leetcode/JavaScript/No34.search-for-a-range.js)  | `Medium` |
| 036 | [Valid Sudoku](./leetcode/JavaScript/No36.valid-sudoku.js)  | `Medium` |
| 039 | [Combination Sum](./leetcode/JavaScript/No39.combination-sum.js)  | `Medium` |
| 040 | [Combination Sum II](./leetcode/JavaScript/No40.combination-sum-II.js)  | `Medium` |
| 043 | [Multiply Strings](./leetcode/JavaScript/No43.multiply-strings.js)  | `Medium` |
| 046 | [Permutations](./leetcode/JavaScript/No46.permutations.js) | `Medium` |
| 047 | [Permutations II](./leetcode/JavaScript/No47.permutations-II.js) | `Medium` |
| 048 | [Rotate Image](./leetcode/JavaScript/No48.rotate-image.js) | `Medium` |
| 049 | [Group Anagrams](./leetcode/JavaScript/No49.group-anagrams.js) | `Medium` |
| 050 | [Pow(x, n)](./leetcode/JavaScript/No50.pow-x-n.js) | `Medium` |
| 054 | [Spiral Matrix](./leetcode/JavaScript/No54.spiral-matrix.js) | `Medium` |
| 055 | [Jump Game](./leetcode/JavaScript/No55.jump-game.js) | `Medium` |
| 056 | [Merge Intervals](./leetcode/JavaScript/No56.merge-intervals.js) | `Medium` |
| 059 | [Spiral Matrix II](./leetcode/JavaScript/No59.spiral-matrix-II.js) | `Medium` |
| 060 | [Permutation Sequence](./leetcode/JavaScript/No60.permutation-sequence.js) | `Medium` |
| 061 | [Rotate List](./leetcode/JavaScript/No61.rotate-list.js) | `Medium` |
| 062 | [Unique Paths](./leetcode/JavaScript/No62.unique-paths.js) | `Medium` |
| 063 | [Unique Paths II](./leetcode/JavaScript/No63.unique-paths-II.js) | `Medium` |
| 064 | [Minimum Path Sum](./leetcode/JavaScript/No64.minimum-path-sum.js) | `Medium` |
| 071 | [Simplify Path](./leetcode/JavaScript/No71.simplify-path.js) | `Medium` |
| 073 | [Set Matrix Zeroes](./leetcode/JavaScript/No73.set-matrix-zeroes.js) | `Medium` |
| 074 | [Search a 2D Matrix](./leetcode/JavaScript/No74.search-a-2d-matrix.js) | `Medium` |
| 075 | [Sort Colors](./leetcode/JavaScript/No75.sort-colors.js) | `Medium` |
| 077 | [Combinations](./leetcode/JavaScript/No77.combinations.js) | `Medium` |
| 078 | [Subsets](./leetcode/JavaScript/No78.subsets.js) | `Medium` |
| 079 | [Word Search](./leetcode/JavaScript/No79.word-search.js) | `Medium` |
| 080 | [Remove Duplicates from Sorted Array II](./leetcode/JavaScript/No80.remove-duplicates-from-sorted-array-II.js) | `Medium` |
| 081 | [Search in Rotated Sorted Array II](./leetcode/JavaScript/No81.search-in-rotated-sorted-array-II.js) | `Medium` |
| 082 | [Remove Duplicates from Sorted List II](./leetcode/JavaScript/No82.remove-duplicates-from-sorted-list-II.js) | `Medium` |
| 086 | [Partition List](./leetcode/JavaScript/No86.partition-list.js) | `Medium` |
| 090 | [Subsets II](./leetcode/JavaScript/No90.subsets-II.js) | `Medium` |
| 091 | [Decode Ways](./leetcode/JavaScript/No91.decode-ways.js) | `Medium` |
| 092 | [Reverse Linked List II](./leetcode/JavaScript/No92.reverse-linked-list-II.js) | `Medium` |
| 093 | [Restore IP Addresses](./leetcode/JavaScript/No93.restore-ip-addresses.js) | `Medium` |
| 094 | [Binary Tree Inorder Traversal](./leetcode/JavaScript/No94.binary-tree-inorder-traversal.js) | `Medium` |
| 095 | [Unique Binary Search Trees II](./leetcode/JavaScript/No95.unique-binary-search-trees-II.js) | `Medium` |
| 096 | [Unique Binary Search Trees](./leetcode/JavaScript/No96.unique-binary-search-trees.js) | `Medium` |
| 098 | [Validate Binary Search Tree](./leetcode/JavaScript/No98.validate-binary-search-tree.js) | `Medium` |
| 102 | [Binary Tree Level Order Traversal](./leetcode/JavaScript/No102.binary-tree-level-order-traversal.js) | `Medium` |
| 103 | [Binary Tree Zigzag Level Order Traversal](./leetcode/JavaScript/No103.binary-tree-zigzag-level-order-traversal.js) | `Medium` |
| 105 | [Construct Binary Tree from Preorder and Inorder Traversal](./leetcode/JavaScript/No105.construct-binary-tree-from-preorder-and-inorder-traversal.js) | `Medium` |
| 106 | [Construct Binary Tree from Inorder and Postorder Traversal](./leetcode/JavaScript/No106.construct-binary-tree-from-inorder-and-postorder-traversal.js) | `Medium` |
| 109 | [Convert Sorted List to Binary Search Tree](./leetcode/JavaScript/No109.convert-sorted-list-to-binary-search-tree.js) | `Medium` |
| 113 | [Path Sum II](./leetcode/JavaScript/No113.path-sum-II.js) | `Medium` |
| 114 | [Flatten Binary Tree to Linked List](./leetcode/JavaScript/No114.flatten-binary-tree-to-linked-list.js) | `Medium` |
| 116 | [Populating Next Right Pointers in Each Node](./leetcode/JavaScript/No116.populating-next-right-pointers-in-each-node.js) | `Medium` |
| 117 | [Populating Next Right Pointers in Each Node II](./leetcode/JavaScript/No117.populating-next-right-pointers-in-each-node-II.js) | `Medium` |
| 120 | [Triangle](./leetcode/JavaScript/No120.triangle.js) | `Medium` |
| 127 | [Word Ladder](./leetcode/JavaScript/No127.word-ladder.js) | `Medium` |
| 129 | [Sum Root to Leaf Numbers](./leetcode/JavaScript/No129.sum-root-to-leaf-numbers.js) | `Medium` |
| 130 | [Surrounded Regions](./leetcode/JavaScript/No130.surrounded-regions.js) | `Medium` |
| 131 | [Palindrome Partitioning](./leetcode/JavaScript/No131.palindrome-partitioning.js) | `Medium` |
| 133 | [Clone Graph](./leetcode/JavaScript/No133.clone-graph.js) | `Medium` |
| 134 | [Gas Station](./leetcode/JavaScript/No134.gas-station.js) | `Medium` |
| 137 | [Single Number II](./leetcode/JavaScript/No137.single-number-II.js) | `Medium` |
| 138 | [Copy List with Random Pointer](./leetcode/JavaScript/No138.copy-list-with-random-pointer.js) | `Medium` |
| 139 | [Word Break](./leetcode/JavaScript/No139.word-break.js) | `Medium` |
| 142 | [Linked List Cycle II](./leetcode/JavaScript/No142.linked-list-cycle-II.js) | `Medium` |
| 143 | [Reorder List](./leetcode/JavaScript/No143.reorder-list.js) | `Medium` |
| 144 | [Binary Tree Preorder Traversal](./leetcode/JavaScript/No144.binary-tree-preorder-traversal.js) | `Medium` |
| 147 | [Insertion Sort List](./leetcode/JavaScript/No147.insertion-sort-list.js) | `Medium` |
| 148 | [Sort List](./leetcode/JavaScript/No148.sort-list.js) | `Medium` |
| 150 | [Evaluate Reverse Polish Notation](./leetcode/JavaScript/No150.evaluate-reverse-polish-notation.js) | `Medium` |
| 151 | [Reverse Words in a String](./leetcode/JavaScript/No151.reverse-words-in-a-string.js) | `Medium` |
| 152 | [Maximum Product Subarray](./leetcode/JavaScript/No152.maximum-product-subarray.js) | `Medium` |
| 153 | [Find Minimum in Rotated Sorted Array](./leetcode/JavaScript/No153.find-minimum-in-rotated-sorted-array.js) | `Medium` |
| 162 | [Find Peak Element](./leetcode/JavaScript/No162.find-peak-element.js) | `Medium` |
| 165 | [Compare Version Numbers](./leetcode/JavaScript/No165.compare-version-numbers.js) | `Medium` |
| 166 | [Fraction to Recurring Decimal](./leetcode/JavaScript/No166.fraction-to-recurring-decimal.js) | `Medium` |
| 173 | [Binary Search Tree Iterator](./leetcode/JavaScript/No173.binary-search-tree-iterator.js) | `Medium` |
| 179 | [Largest Number](./leetcode/JavaScript/No179.largest-number.js) | `Medium` |
| 187 | [Repeated DNA Sequences](./leetcode/JavaScript/No187.repeated-dna-sequences.js) | `Medium` |
| 199 | [Binary Tree Right Side View](./leetcode/JavaScript/No199.binary-tree-right-side-view.js) | `Medium` |
| 200 | [Number of Islands](./leetcode/JavaScript/No200.number-of-islands.js) | `Medium` |
| 201 | [Bitwise AND of Numbers Range](./leetcode/JavaScript/No201.bitwise-AND-of-numbers-range.js) | `Medium` |
| 207 | [Course Schedule](./leetcode/JavaScript/No207.course-schedule.js) | `Medium` |
| 208 | [Implement Trie (Prefix Tree)](./leetcode/JavaScript/No208.implement-trie-prefix-tree.js) | `Medium` |
| 209 | [Minimum Size Subarray Sum](./leetcode/JavaScript/No209.minimum-size-subarray-sum.js) | `Medium` |
| 210 | [Course Schedule II](./leetcode/JavaScript/No210.course-schedule-II.js) | `Medium` |
| 211 | [Add and Search Word - Data structure design](./leetcode/JavaScript/No211.add-and-search-word-data-structure-design.js) | `Medium` |
| 213 | [House Robber II](./leetcode/JavaScript/No213.house-robber-II.js) | `Medium` |
| 215 | [Kth Largest Element in an Array](./leetcode/JavaScript/No215.kth-largest-element-in-an-array.js) | `Medium` |
| 216 | [Combination Sum III](./leetcode/JavaScript/No216.combination-sum-III.js) | `Medium` |
| 220 | [Contains Duplicate III](./leetcode/JavaScript/No220.contains-duplicate-III.js) | `Medium` |
| 221 | [Maximal Square](./leetcode/JavaScript/No221.maximal-square.js) | `Medium` |
| 222 | [Count Complete Tree Nodes](./leetcode/JavaScript/No222.count-complete-tree-nodes.js) | `Medium` |
| 223 | [Rectangle Area](./leetcode/JavaScript/No223.rectangle-area.js) | `Medium` |
| 227 | [Basic Calculator II](./leetcode/JavaScript/No227.basic-calculator-II.js) | `Medium` |
| 228 | [Summary Ranges](./leetcode/JavaScript/No228.summary-ranges.js) | `Medium` |
| 229 | [Majority Element II](./leetcode/JavaScript/No229.majority-element-II.js) | `Medium` |
| 230 | [Kth Smallest Element in a BST](./leetcode/JavaScript/No230.kth-smallest-element-in-a-bst.js) | `Medium` |
| 236 | [Lowest Common Ancestor of a Binary Tree](./leetcode/JavaScript/No236.lowest-common-ancestor-of-a-binary-tree.js) | `Medium` |
| 238 | [Product of Array Except Self](./leetcode/JavaScript/No238.product-of-array-except-self.js) | `Medium` |
| 240 | [Search a 2D Matrix II](./leetcode/JavaScript/No240.search-a-2d-matrix-II.js) | `Medium` |
| 241 | [Different Ways to Add Parentheses](./leetcode/JavaScript/No241.different-ways-to-add-parentheses.js) | `Medium` |
| 260 | [Single Number III](./leetcode/JavaScript/No260.single-number-III.js) | `Medium` |
| 264 | [Ugly Number II](./leetcode/JavaScript/No264.ugly-number-II.js) | `Medium` |
| 273 | [Integer to English Words](./leetcode/JavaScript/No273.integer-to-english-words.js) | `Medium` |
| 274 | [H-Index](./leetcode/JavaScript/No274.h-index.js) | `Medium` |
| 275 | [H-Index II](./leetcode/JavaScript/No275.h-index-II.js) | `Medium` |
| 279 | [Perfect Squares](./leetcode/JavaScript/No279.perfect-squares.js) | `Medium` |
| 287 | [Find the Duplicate Number](./leetcode/JavaScript/No287.find-the-duplicate-number.js) | `Medium` |
| 289 | [Game of Life](./leetcode/JavaScript/No289.game-of-life.js) | `Medium` |
| 299 | [Bulls and Cows](./leetcode/JavaScript/No299.bulls-and-cows.js) | `Medium` |
| 300 | [Longest Increasing Subsequence](./leetcode/JavaScript/No300.longest-increasing-subsequence.js) | `Medium` |
| 304 | [Range Sum Query 2D - Immutable](./leetcode/JavaScript/No304.norange-sum-query-2D-immutable.js) | `Medium` |
| 307 | [Range Sum Query - Mutable](./leetcode/JavaScript/No307.range-sum-query-mutable.js) | `Medium` |
| 310 | [Minimum Height Trees](./leetcode/JavaScript/No310.minimum-height-trees.js) | `Medium` |
| 332 | [Reconstruct Itinerary](./leetcode/JavaScript/No332.reconstruct-itinerary.js) | `Medium` |
| 337 | [House Robber III](./leetcode/JavaScript/No337.house-robber-III.js) | `Medium` |
| 347 | [Top K Frequent Elements](./leetcode/JavaScript/No347.top-k-frequent-elements.js) | `Medium` |
| 376 | [Wiggle Subsequence](./leetcode/JavaScript/No376.wiggle-subsequence.js) | `Medium` |
| 377 | [Combination Sum IV](./leetcode/JavaScript/No377.combination-sum-IV.js) | `Medium` |
| 380 | [Insert Delete GetRandom O(1)](./leetcode/JavaScript/No380.insert-delete-getRandom-o1.js) | `Medium` |
| 399 | [Evaluate Division](./leetcode/JavaScript/No399.evaluate-division.js) | `Medium` |
| 413 | [Arithmetic Slices](./leetcode/JavaScript/No413.arithmetic-slices.js) | `Medium` |
| 416 | [Partition Equal Subset Sum](./leetcode/JavaScript/No416.partition-equal-subset-sum.js) | `Medium` |
| 445 | [Add Two Numbers II](./leetcode/JavaScript/No445.add-two-numbers-II.js) | `Medium` |
| 451 | [Sort Characters By Frequency](./leetcode/JavaScript/No451.sort-characters-by-frequency.js) | `Medium` |
| 454 | [4Sum II](./leetcode/JavaScript/No454.4sum-II.js) | `Medium` |
| 486 | [Predict the Winner](./leetcode/JavaScript/No486.predict-the-winner.js) | `Medium` |
| 494 | [Target Sum](./leetcode/JavaScript/No494.target-sum.js) | `Medium` |
| 513 | [Find Bottom Left Tree Value](./leetcode/JavaScript/No513.find-bottom-left-tree-value.js) | `Medium` |
| 523 | [Continuous Subarray Sum](./leetcode/JavaScript/No523.continuous-subarray-sum.js) | `Medium` |
| 547 | [Friend Circles](./leetcode/JavaScript/No547.friend-circles.js) | `Medium` |
| 560 | [Subarray Sum Equals K](./leetcode/JavaScript/No560.subarray-sum-equals-k.js) | `Medium` |
| 565 | [Array Nesting](./leetcode/JavaScript/No565.array-nesting.js) | `Medium` |
| 576 | [Out of Boundary Paths](./leetcode/JavaScript/No576.out-of-boundary-paths.js) | `Medium` |
| 611 | [Valid Triangle Number](./leetcode/JavaScript/No611.valid-triangle-number.js) | `Medium` |
| 621 | [Task Scheduler](./leetcode/JavaScript/No621.task-scheduler.js) | `Medium` |
| 652 | [Find Duplicate Subtrees](./leetcode/JavaScript/No652.find-duplicate-subtrees.js) | `Medium` |
| 654 | [Maximum Binary Tree](./leetcode/JavaScript/No654.maximum-binary-tree.js) | `Medium` |
| 655 | [Print Binary Tree](./leetcode/JavaScript/No655.print-binary-tree.js) | `Medium` |
| 658 | [Find K Closest Elements](./leetcode/JavaScript/No658.find-k-closest-elements.js) | `Medium` |
| 659 | [Split Array into Consecutive Subsequences](./leetcode/JavaScript/No659.split-array-into-consecutive-subsequences.js) | `Medium` |
| 684 | [Redundant Connection](./leetcode/JavaScript/No684.redundant-connection.js) | `Medium` |
| 698 | [Partition to K Equal Sum Subsets](./leetcode/JavaScript/No698.partition-to-k-equal-sum-subsets.js) | `Medium` |
| 718 | [Maximum Length of Repeated Subarray](./leetcode/JavaScript/No718.maximum-length-of-repeated-subarray.js) | `Medium` |
| 721 | [Accounts Merge](./leetcode/JavaScript/No721.accounts-merge.js) | `Medium` |
| 740 | [Delete and Earn](./leetcode/JavaScript/No740.delete-and-earn.js) | `Medium` |
| 743 | [Network Delay Time](./leetcode/JavaScript/No743.network-delay-time.js) | `Medium` |
| 785 | [Is Graph Bipartite?](./leetcode/JavaScript/No785.is-graph-bipartite?.js) | `Medium` |
| 802 | [Find Eventual Safe States](./leetcode/JavaScript/No802.find-eventual-safe-states.js) | `Medium` |
|  |  |  |
| No  | Title | Difficulty |
| 001 | [Two Sum](./leetcode/JavaScript/No01.two-sum.js)  | `Easy` |
| 007 | [Reverse Integer](./leetcode/JavaScript/No07.reverse-integer.js)  | `Easy` |
| 009 | [Palindrome Number](./leetcode/JavaScript/No09.palindrome-number.js)  | `Easy` |
| 013 | [Roman to Integer](./leetcode/JavaScript/No13.roman-to-integer.js)  | `Easy` |
| 014 | [Longest Common Prefix](./leetcode/JavaScript/No14.longest-common-prefix.js)  | `Easy` |
| 020 | [Valid Parentheses](./leetcode/JavaScript/No20.valid-parentheses.js)  | `Easy` |
| 021 | [Merge Two Sorted Lists](./leetcode/JavaScript/No21.merge-two-sorted-lists.js)  | `Easy` |
| 026 | [Remove Duplicates from Sorted Array](./leetcode/JavaScript/No26.remove-duplicates-from-sorted-array.js)  | `Easy` |
| 027 | [Remove Element](./leetcode/JavaScript/No27.remove-element.js)  | `Easy` |
| 028 | [Implement strStr()](./leetcode/JavaScript/No28.implement-strStr.js)  | `Easy` |
| 035 | [Search Insert Position](./leetcode/JavaScript/No35.search-insert-position.js)  | `Easy` |
| 038 | [Count and Say](./leetcode/JavaScript/No38.count-and-say.js)  | `Easy` |
| 053 | [Maximum Subarray](./leetcode/JavaScript/No53.maximum-subarray.js)  | `Easy` |
| 058 | [Length of Last Word](./leetcode/JavaScript/No58.length-of-last-word.js)  | `Easy` |
| 066 | [Plus One](./leetcode/JavaScript/No66.plus-one.js)  | `Easy` |
| 067 | [Add Binary](./leetcode/JavaScript/No67.add-binary.js)  | `Easy` |
| 069 | [Sqrt(x)](./leetcode/JavaScript/No69.sqrt-x.js)  | `Easy` |
| 070 | [Climbing Stairs](./leetcode/JavaScript/No70.climbing-stairs.js)  | `Easy` |
| 083 | [Remove Duplicates from Sorted List](./leetcode/JavaScript/No83.remove-duplicates-from-sorted-list.js)  | `Easy` |
| 088 | [Merge Sorted Array](./leetcode/JavaScript/No88.merge-sorted-array.js)  | `Easy` |
| 100 | [Same Tree](./leetcode/JavaScript/No100.same-tree.js)  | `Easy` |
| 101 | [Symmetric Tree](./leetcode/JavaScript/No101.symmetric-tree.js)  | `Easy` |
| 104 | [Maximum Depth of Binary Tree](./leetcode/JavaScript/No104.maximum-depth-of-binary-tree.js)  | `Easy` |
| 107 | [Binary Tree Level Order Traversal II](./leetcode/JavaScript/No107.binary-tree-level-order-traversal-II.js)  | `Easy` |
| 108 | [Convert Sorted Array to Binary Search Tree](./leetcode/JavaScript/No108.convert-sorted-array-to-binary-search-tree.js)  | `Easy` |
| 110 | [Balanced Binary Tree](./leetcode/JavaScript/No110.balanced-binary-tree.js)  | `Easy` |
| 111 | [Minimum Depth of Binary Tree](./leetcode/JavaScript/No111.minimum-depth-of-binary-tree.js)  | `Easy` |
| 112 | [Path Sum](./leetcode/JavaScript/No112.path-sum.js)  | `Easy` |
| 118 | [Pascal's Triangle](./leetcode/JavaScript/No118.pascal's-triangle.js)  | `Easy` |
| 119 | [Pascal's Triangle II](./leetcode/JavaScript/No119.pascal's-triangle-II.js)  | `Easy` |
| 121 | [Best Time to Buy and Sell Stock](./leetcode/JavaScript/No121.best-time-to-buy-and-sell-stock.js)  | `Easy` |
| 122 | [Best Time to Buy and Sell Stock II](./leetcode/JavaScript/No122.best-time-to-buy-and-sell-stock-II.js)  | `Easy` |
| 125 | [Valid Palindrome](./leetcode/JavaScript/No125.valid-palindrome.js)  | `Easy` |
| 136 | [Single Number](./leetcode/JavaScript/No136.single-number.js)  | `Easy` |
| 141 | [Linked List Cycle](./leetcode/JavaScript/No141.linked-list-cycle.js)  | `Easy` |
| 155 | [Min Stack](./leetcode/JavaScript/No155.min-stack.js)  | `Easy` |
| 160 | [Intersection of Two Linked Lists](./leetcode/JavaScript/No160.intersection-of-two-linked-lists.js)  | `Easy` |
| 167 | [Two Sum II - Input array is sorted](./leetcode/JavaScript/No167.two-sum-II-input-array-is-sorted.js)  | `Easy` |
| 168 | [Excel Sheet Column Title](./leetcode/JavaScript/No168.excel-sheet-column-title.js)  | `Easy` |
| 169 | [Majority Element](./leetcode/JavaScript/No169.majority-element.js)  | `Easy` |
| 171 | [Excel Sheet Column Number](./leetcode/JavaScript/No171.excel-sheet-column-number.js)  | `Easy` |
| 172 | [Factorial Trailing Zeroes](./leetcode/JavaScript/No172.factorial-trailing-zeroes.js)  | `Easy` |
| 175 | [Combine Two Tables](./leetcode/JavaScript/No175.combine-two-tables.sql)  | `Easy` |
| 189 | [Rotate Array](./leetcode/JavaScript/No189.rotate-array.js)  | `Easy` |
| 198 | [House Robber](./leetcode/JavaScript/No198.house-robber.js)  | `Easy` |
| 202 | [Happy Number](./leetcode/JavaScript/No202.happy-number.js)  | `Easy` |
| 203 | [Remove Linked List Elements](./leetcode/JavaScript/No203.remove-linked-list-elements.js)  | `Easy` |
| 204 | [Count Primes](./leetcode/JavaScript/No204.count-primes.js)  | `Easy` |
| 205 | [Isomorphic Strings](./leetcode/JavaScript/No205.isomorphic-strings.js)  | `Easy` |
| 206 | [Reverse Linked List](./leetcode/JavaScript/No206.reverse-linked-list.js)  | `Easy` |
| 217 | [Contains Duplicate](./leetcode/JavaScript/No217.contains-duplicate.js)  | `Easy` |
| 219 | [Contains Duplicate II](./leetcode/JavaScript/No219.contains-duplicate-II.js)  | `Easy` |
| 225 | [Implement Stack using Queues](./leetcode/JavaScript/No225.implement-stack-using-queues.js)  | `Easy` |
| 226 | [Invert Binary Tree](./leetcode/JavaScript/No226.invert-binary-tree.js)  | `Easy` |
| 231 | [Power of Two](./leetcode/JavaScript/No231.power-of-two.js)  | `Easy` |
| 232 | [Implement Queue using Stacks](./leetcode/JavaScript/No232.implement-queue-using-stacks.js)  | `Easy` |
| 234 | [Palindrome Linked List](./leetcode/JavaScript/No234.palindrome-linked-list.js)  | `Easy` |
| 235 | [Lowest Common Ancestor of a Binary Search Tree](./leetcode/JavaScript/No235.lowest-common-ancestor-of-a-binary-search-tree.js)  | `Easy` |
| 237 | [Delete Node in a Linked List](./leetcode/JavaScript/No237.delete-node-in-a-linked-list.js)  | `Easy` |
| 242 | [Valid Anagram](./leetcode/JavaScript/No242.valid-anagram.js)  | `Easy` |
| 257 | [Binary Tree Paths](./leetcode/JavaScript/No257.binary-tree-paths.js)  | `Easy` |
| 258 | [Add Digits](./leetcode/JavaScript/No258.add-digits.js)  | `Easy` |
| 263 | [Ugly Number](./leetcode/JavaScript/No263.ugly-number.js)  | `Easy` |
| 268 | [Missing Number](./leetcode/JavaScript/No268.missing-number.js)  | `Easy` |
| 278 | [First Bad Version](./leetcode/JavaScript/No278.first-bad-version.js)  | `Easy` |
| 283 | [Move Zeroes](./leetcode/JavaScript/No283.move-zeroes.js)  | `Easy` |
| 290 | [Word Pattern](./leetcode/JavaScript/No290.word-pattern.js)  | `Easy` |
| 292 | [Nim Game](./leetcode/JavaScript/No292.nim-game.js)  | `Easy` |
| 303 | [Range Sum Query - Immutable](./leetcode/JavaScript/No303.range-sum-query-immutable.js)  | `Easy` |
| 344 | [Reverse String](./leetcode/JavaScript/No344.reverse-string.js)  | `Easy` |
| 349 | [Intersection of Two Arrays](./leetcode/JavaScript/No349.intersection-of-two-arrays.js)  | `Easy` |
| 350 | [Intersection of Two Arrays II](./leetcode/JavaScript/No350.intersection-of-two-arrays-II.js)  | `Easy` |
| 367 | [Valid Perfect Square](./leetcode/JavaScript/No367.valid-perfect-square.js)  | `Easy` |
| 387 | [First Unique Character in a String](./leetcode/JavaScript/No387.first-unique-character-in-a-string.js)  | `Easy` |
| 389 | [Find the Difference](./leetcode/JavaScript/No389.find-the-difference.js)  | `Easy` |
| 409 | [Longest Palindrome](./leetcode/JavaScript/No409.longest-palindrome.js)  | `Easy` |
| 414 | [Third Maximum Number](./leetcode/JavaScript/No414.third-maximum-number.js)  | `Easy` |
| 437 | [Path Sum III](./leetcode/JavaScript/No437.path-sum-III.js)  | `Easy` |
| 442 | [Find All Duplicates in an Array](./leetcode/JavaScript/No442.find-all-duplicates-in-an-array.js)  | `Easy` |
| 453 | [Minimum Moves to Equal Array Elements](./leetcode/JavaScript/No453.minimum-moves-to-equal-array-elements.js)  | `Easy` |
| 448 | [Find All Numbers Disappeared in an Array](./leetcode/JavaScript/No448.find-all-numbers-disappeared-in-an-array.js)  | `Easy` |
| 500 | [Keyboard Row](./leetcode/JavaScript/No500.keyboard-row.js)  | `Easy` |
| 520 | [Detect Capital](./leetcode/JavaScript/No520.detect-capital.js)  | `Easy` |
| 530 | [Minimum Absolute Difference in BST](./leetcode/JavaScript/No530.minimum-absolute-difference-in-BST.js)  | `Easy` |
| 541 | [Reverse String II](./leetcode/JavaScript/No541.reverse-string-II.js)  | `Easy` |
| 561 | [Array Partition I](./leetcode/JavaScript/No561.array-partition-I.js)  | `Easy` |
| 594 | [Longest Harmonious Subsequence](./leetcode/JavaScript/No594.longest-harmonious-subsequence.js)  | `Easy` |
| 599 | [Minimum Index Sum of Two Lists](./leetcode/JavaScript/No599.minimum-index-sum-of-two-lists.js)  | `Easy` |
| 633 | [Sum of Square Numbers](./leetcode/JavaScript/No633.sum-of-square-numbers.js)  | `Easy` |
| 653 | [Two Sum IV - Input is a BST](./leetcode/JavaScript/No653.two-sum-IV-input-is-a-BST.js)  | `Easy` |
| 665 | [Non-decreasing Array](./leetcode/JavaScript/No665.non-decreasing-array.js)  | `Easy` |
| 669 | [Trim a Binary Search Tree](./leetcode/JavaScript/No669.trim-a-binary-search-tree.js)  | `Easy` |
| 680 | [Valid Palindrome II](./leetcode/JavaScript/No680.valid-palindrome-II.js)  | `Easy` |
| 687 | [Longest Univalue Path](./leetcode/JavaScript/No687.longest-univalue-path.js)  | `Easy` |
| 697 | [Degree of an Array](./leetcode/JavaScript/No697.degree-of-an-array.js)  | `Easy` |
| 746 | [Min Cost Climbing Stairs](./leetcode/JavaScript/No746.min-cost-climbing-stairs.js)  | `Easy` |

#### [Swift4 Solution](./leetcode/Swift)

| No  | Title | Difficulty |
| ------------- | ------------- | ------------- |
| 004 | [Median of Two Sorted Arrays](./leetcode/Swift/No04.median-of-two-sorted-arrays.swift)  | `Hard` |
| 010 | [Regular Expression Matching](./leetcode/Swift/No10.regular-expression-matching.swift)  | `Hard` |
| 023 | [Merge k Sorted Lists](./leetcode/Swift/No23.merge-k-sorted-lists.swift)  | `Hard` |
| 025 | [Reverse Nodes in k-Group](./leetcode/Swift/No25.reverse-nodes-in-k-group.swift)  | `Hard` |
|  |  |  |
| 002 | [Add Two Numbers](./leetcode/Swift/No02.add-two-numbers.swift)  | `Medium` |
| 003 | [Longest Substring Without Repeating Characters](./leetcode/Swift/No03.longest-substring-without-repeating-characters.swift)  | `Medium` |
| 005 | [Longest Palindromic Substring](./leetcode/Swift/No05.longest-palindromic-substring.swift)  | `Medium` |
| 006 | [ZigZag Conversion](./leetcode/Swift/No06.zigzag-conversion.swift)  | `Medium` |
| 008 | [String to Integer (atoi)](./leetcode/Swift/No08.string-to-integer-atoi.swift) | `Medium` |
| 011 | [Container With Most Water](./leetcode/Swift/No11.container-with-most-water.swift) | `Medium` |
| 012 | [Integer to Roman](./leetcode/Swift/No12.integer-to-roman.swift) | `Medium` |
| 015 | [3Sum](./leetcode/Swift/No15.3sum.swift) | `Medium` |
| 016 | [3Sum Closest](./leetcode/Swift/No16.3sum-closest.swift) | `Medium` |
| 017 | [Letter Combinations of a Phone Number](./leetcode/Swift/No17.letter-combinations-of-a-phone-number.swift) | `Medium` |
| 018 | [4Sum](./leetcode/Swift/No18.4sum.swift) | `Medium` |
| 019 | [Remove Nth Node From End of List](./leetcode/Swift/No19.remove-nth-node-from-end-of-list.swift) | `Medium` |
| 022 | [Generate Parentheses](./leetcode/Swift/No22.generate-parentheses.swift) | `Medium` |
| 024 | [Swap Nodes in Pairs](./leetcode/Swift/No24.swap-nodes-in-pairs.swift) | `Medium` |
| 046 | [Permutations](./leetcode/Swift/No46.permutations.swift) | `Medium` |
| 047 | [Permutations II](./leetcode/Swift/No47.permutations-ii.swift) | `Medium` |
|  |  |  |
| 001 | [Two Sum](./leetcode/Swift/No01.two-sum.swift)  | `Easy` |
| 007 | [Reverse Integer](./leetcode/Swift/No07.reverse-integer.swift)  | `Easy` |
| 009 | [Palindrome Number](./leetcode/Swift/No09.palindrome-number.swift)  | `Easy` |
| 013 | [Roman to Integer](./leetcode/Swift/No13.roman-to-integer.swift) | `Easy` |
| 014 | [Longest Common Prefix](./leetcode/Swift/No14.longest-common-prefix.swift) | `Easy` |
| 020 | [Valid Parentheses](./leetcode/Swift/No20.valid-parentheses.swift) | `Easy` |
| 021 | [Merge Two Sorted Lists](./leetcode/Swift/No21.merge-two-sorted-lists.swift) | `Easy` |
| 026 | [Remove Duplicates from Sorted Array](./leetcode/Swift/No26.remove-duplicates-from-sorted-array.swift) | `Easy` |
| 027 | [Remove Element](./leetcode/Swift/No27.remove-element.swift) | `Easy` |
| 069 | [Sqrt(x)](./leetcode/Swift/No69.sqrt-x.js) | `Easy` |
| 203 | [Remove Linked List Elements](./leetcode/Swift/No203.remove-linked-list-elements.swift) | `Easy` |
| 500 | [Keyboard Row](./leetcode/Swift/No500.keyboard-row.swift) | `Easy` |
| 520 | [Detect Capital](./leetcode/Swift/No520.detect-capital.swift) | `Easy` |
| 594 | [Longest Harmonious Subsequence](./leetcode/Swift/No594.longest-harmonious-subsequence.swift) | `Easy` |


#### [Haskell Solution](./leetcode/Haskell)

| No  | Title | Difficulty |
| ------------- | ------------- | ------------- |
| 012 | [Integer to Roman](./leetcode/Haskell/No12.integer-to-roman.hs)  | `Medium` |
| 069 | [Sqrt(x)](./leetcode/Haskell/No69.sqrt-x.hs)  | `Easy` |

### [Codewars](https://www.codewars.com/users/ecmadao)

![codewars-badges](https://www.codewars.com/users/ecmadao/badges/micro)
#### [Haskell Solution](./codewars/Haskell)

| Title | Kyu |
| ------------- | ------------- |
| [Point in Polygon](./codewars/Haskell/point-in-polygon.hs)  | `3 kyu` |
| [Sudoku Solver](./codewars/Haskell/sudoku-solver.hs)  | `3 kyu` |
| [Calculator](./codewars/Haskell/calculator.hs)  | `3 kyu` |
|  |  |  |
| [Find all possible number combos that sum to a number](./codewars/Haskell/find-all-possible-number-combos-that-sum-to-a-number.hs)  | `4 kyu` |
| [Range Extraction](./codewars/Haskell/range-extraction.hs)  | `4 kyu` |
| [Roman Numerals Encoder](./codewars/Haskell/roman-numerals-encoder.hs)  | `4 kyu` |
| [Twice linear](./codewars/Haskell/twice-linear.hs)  | `4 kyu` |
| [foldMap all the things!](./codewars/Haskell/foldMap-all-the-things.hs)  | `4 kyu` |
| [Reverse polish notation calculator](./codewars/Haskell/reverse-polish-notation-calculator.hs)  | `4 kyu` |
|  |  |  |
| [Find the missing term in an Arithmetic Progression](./codewars/Haskell/find-the-missing-term-in-an-arithmetic-progression.hs)  | `5 kyu` |
| [The Hashtag Generator](./codewars/Haskell/the-hashtag-generator.hs)  | `5 kyu` |
| [Gap in Primes](./codewars/Haskell/gap-in-primes.hs)  | `5 kyu` |
| [Memoized Fibonacci](./codewars/Haskell/memoized-fibonacci.hs)  | `5 kyu` |
| [Weight for weight](./codewars/Haskell/weight-for-weight.hs)  | `5 kyu` |
| [Valid Parentheses](./codewars/Haskell/valid-parentheses.hs)  | `5 kyu` |
| [Can you get the loop ?](./codewars/Haskell/can-you-get-the-loop.hs)  | `5 kyu` |
|  |  |  |
| [Array.diff](./codewars/Haskell/array.diff.hs)  | `6 kyu` |
| [Reverse words](./codewars/Haskell/reverse-words.hs)  | `6 kyu` |
| [CamelCase Method](./codewars/Haskell/camelcase-method.hs)  | `6 kyu` |
| [Is a number prime?](./codewars/Haskell/is-a-number-prime.hs)  | `6 kyu` |
| [Decode the Morse code](./codewars/Haskell/decode-the-morse-code.hs)  | `6 kyu` |
| [Which are in?](./codewars/Haskell/which-are-in.hs)  | `6 kyu` |
| [Find the missing letter](./codewars/Haskell/find-the-missing-letter.hs)  | `6 kyu` |
|  |  |  |
| [Descending Order](./codewars/Haskell/descending-order.hs)  | `7 kyu` |
| [Complementary DNA](./codewars/Haskell/complementary-dna.hs)  | `7 kyu` |
| [The highest profit wins!](./codewars/Haskell/the-highest-profit-wins.hs)  | `7 kyu` |
| [You're a square!](./codewars/Haskell/you're-a-square.hs) | `7 kyu` |


#### [JavaScript Solution](./codewars/JavaScript)

| Title | Kyu |
| ------------- | ------------- |
| [Sudoku Solver](./codewars/JavaScript/sudoku-solver.js)  | `3 kyu` |
| [Twice linear](./codewars/JavaScript/twice-linear.js)  | `4 kyu` |
| [Find all possible number combos that sum to a number](./codewars/JavaScript/find-all-possible-number-combos-that-sum-to-a-number.js)  | `4 kyu` |

### Run demo

JavaScript：

- 环境要求：>= Node.js v7
- 如果 Node 版本较低，则可以自行选择使用 Babel 进行转换
- Leetcode 题解代码直接在浏览器中即可运行（ES5/ES6 语法）
- 直接运行各个文件夹下的 `js` 文件即可查看算法运行的结果，例如在项目根目录下 `node ./priority-queues/binary-heaps.js`

Swift：

- Swift 版本 >= 4.0

Haskell:

- Using GHCi and load `.hs` files
