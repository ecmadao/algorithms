<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [排列组合](#%E6%8E%92%E5%88%97%E7%BB%84%E5%90%88)
  - [全排列](#%E5%85%A8%E6%8E%92%E5%88%97)
  - [组合](#%E7%BB%84%E5%90%88)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 排列组合

排列组合问题属于概率论，其本身并算不上是一个经典的数据结构和算法问题，但它在很多其他算法问题中都得到了应用，比如 24 点问题和八皇后问题。

- 一组数的全排列，即包含了列表内各元素的顺序，含有相同元素但顺序不同的两个数组，被认为是两种不同的排列
- 组合问题则即无视其顺序，相当于要获取一个列表的所有子列表

### 全排列

#### 插入法（递归解法）

可以**将全排列看着是把给定列表中的每一个元素，插入到由剩下的元素组成的全排列列表的头部**。以`[1,2,3]`全排列为例，可以看做将`1`插入到`[2,3]`组成的各个全排列的各头部，把`2`插入到`[1,3]`组成的全排列的头部，把`3`插入到`[1,2]`组成的全排列的头部，则得到`[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]`

除此以外，也可以**把全排列看做是将给定列表的第一个元素，插入到由剩下元素组成的各全排列的各个位置上**。

#### 字典序解法

> 以下暂不考虑重复元素，且以单纯的数字排序为例

字典序的原理：对于可排序的一组数据，例如`[5, 3, 1, 2, 4]`，求其全排列，其实就是求从`12345`到`54321`的所有组合，且每个组合必须由限定的元素组成（即`5`，`4`，`3`，`2`，`1`）。则可以：

1. 先将所有元素正序或逆序排序，确定起始值，并将起始值作为全排列的结果之一。以下例子将首先按照升序排列数据

```javascript
let nums = [5, 3, 1, 2, 4]
nums.sort((a, b) => a - b)

// 获取到第一个全排列，即升序后获得的最小值 12345
const results = [[...nums]]
// 此时排列的起始值 nums 为 [1,2,3,4,5]
```

2. 从末尾`i = nums.length - 1`开始向左遍历，当遇见`nums[i - 1] < nums[i]`的情况是，则标记`i - 1`位

```javascript
let i = nums.length - 1
while (i >= 1 && nums[i] < nums[i - 1]) {
  i -= 1
}
// 对于第一次遍历，当 i = nums.length - 1，即 4 时，nums[i - 1] = 4，小于 nums[i] = 5

// 记录此时的 i - 1 和 nums[i - 1]
const index = i - 1
const tmp = nums[index]
```

3. 再次从`j = nums.length - 1`开始向左遍历，直到遇见第一个`nums[j] > nums[index]`

```javascript
let j = nums.length - 1
while (j > index && nums[j] < tmp) {
  j -= 1
}
```

4. 此时交换`index`和`j`上元素的位置，并将`index`之后的元素排序，即可得到下一个全排列

```javascript
nums[index] = nums[j]
nums[j] = tmp
nums = [
  ...nums.slice(0, index + 1),
  nums.slice(index + 1).sort((a, b) => a - b)
]

// 获得下一个全排列。下一个全排列即，刚刚好大于上一个全排列的数值
// 即 12354
results.push([...nums])
```

5. 从 2 开始重复

#### LeetCode 相关问题

- [No31.Next permutation](../leetcode/JavaScript/No31.next-permutation.js)
- [No46.Permutations](../leetcode/JavaScript/No46.permutations.js)
- [No47.Permutations II](../leetcode/JavaScript/No47.permutations-II.js)
- [No60.Permutation sequence](../leetcode/JavaScript/No60.permutation-sequence.js)


### 组合

> Reference:
> http://wuchong.me/blog/2014/07/28/permutation-and-combination-realize/

组合，即给定序列的所有子序列。例如给出`[1, 2, 3]`，则所有组合为子序列的全排列`[1], [2], [3], [1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]`再加其全排列`[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]`

- 解法一，递归：将给定列表中的每一个元素，都放入到由剩下元素组成的各个组合的列表的头部
- 解法二，位操作：假设元素原本有：`[a, b, c]`三个，则`1`表示取该元素，`0`表示不取。故取`a`则是`001`，取`ab`则是`011`。所以一共三位，每个位上有两个选择：`0`或`1`。而`000`没有意义，所以是`2n−1`个结果

#### LeetCode 相关问题

- [No78.Subsets](../leetcode/JavaScript/No78.subsets.js)
- [No90.Subsets II](../leetcode/JavaScript/No90.subsets-II.js)
