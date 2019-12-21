<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [基本排序](#%E5%9F%BA%E6%9C%AC%E6%8E%92%E5%BA%8F)
  - [选择排序](#%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F)
  - [插入排序](#%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F)
    - [插入排序的优化版本](#%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F%E7%9A%84%E4%BC%98%E5%8C%96%E7%89%88%E6%9C%AC)
  - [希尔排序](#%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F)
  - [洗牌](#%E6%B4%97%E7%89%8C)
  - [桶排序 Bucket sort](#%E6%A1%B6%E6%8E%92%E5%BA%8F-bucket-sort)
  - [二分排序](#%E4%BA%8C%E5%88%86%E6%8E%92%E5%BA%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 基本排序

- 堆栈：后进（push）先出（pop）
- 队列：先入（enqueue）先出（dequeue）

### [选择排序](./selection-sort.js)

遍历数组，每次（第 i 次）在索引大于 i 的位上寻找最小（或最大）的元素，然后和第 i 位上的元素进行替换：

```bash
# 从小到大排序
# 初始
8 3 5 1 9 2
# i = 0，从 i = 1 起寻找最小值，与 index = 0 的元素换位
1 3 5 8 9 2
# i = 1，从 i = 2 起寻找最小值，与 index = 1 的元素换位
1 2 5 8 9 3
# i = 2，从 i = 3 起寻找最小值，与 index = 2 的元素换位
1 2 3 8 9 5
```

用代码来表示：

```javascript
// less 方法用于判断是否是更小的值
const sort = (array, less) => {
  for (let i = 0; i < array.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (less(array[j], array[min])) {
        min = j;
      }
    }
    const temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
};
```

- 优点：简单易懂
- 缺点：遍历次数多，总共遍历 1 + 2 + 3 + ... + N - 1 = (N - 1) * N / 2 次，复杂度为 N^2 / 2

### [插入排序](./insertion-sort.js)

对数组进行遍历，每次遍历都会认为当前元素（i）左侧已经全部排好序，因此不做处理。而如果遍历到的元素与它前一位元素是乱序时，则将其左移，直至到达顺序的位置：

```bash
# 从小到大排序
# 初始
7 8 3 5 1 9 2

# i = 0，数组无变化
7 8 3 5 1 9 2

# i = 1，8 小于 7，数组无变化
7 8 3 5 1 9 2

# i = 2
# 3 处于乱序状态，左移一位
7 3 8 5 1 9 2
# 3 处于乱序状态，左移一位，发现已经顺序，结束处理
3 7 8 5 1 9 2

# i = 3
# 5 处于乱序状态，依旧进行左移处理....
```

用代码表示：

```javascript
// 这里用递归来依次检查 i 和 i 的前一位元素是否顺序；如果不是，则替换位置
const reverse = (array, i) => {
  if (i === 0) return;
  if (less(array[i], array[i - 1])) {
    const temp = array[i];
    array[i] = array[i - 1];
    array[i - 1] = temp;
    reverse(array, i - 1);
  }
};

const sort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) continue;
    reverse(array, i);
  }
};
```

- 优点：相比于选择排序，插入排序速度更快。

假设在最糟糕的情况下，我们每次遍历时，该位置上的元素总是乱序，并且总是相对于前一位乱序（整个数组降序排列，而我们需要将其转换为升序排列）。因此在交替位置后，它还是小于前一位数，则需要继续替换位置直到第一位。在这种情况下，遍历次数才和选择排序的遍历次数相等。
而在最好的情况下，即数组已经是排好序了，我们在遍历时，只需要判断当前元素和前一位元素的大小，所以遍历次数为 N - 1。
总体而言，插入排序的速度是选择排序的 2 倍（复杂度为 N^2 / 4）。

- 缺点：如上所说，当处理的数组是倒序时，插入排序表现的性能很差（即需要多次遍历，还需要依次替换位置）

#### 插入排序的优化版本

```javascript
// 来源：编程珠玑（第二版）
const insertSort = (array) => {
  let i = 1;
  // 以 1 为起始向后递增，假设前面的数组都已经排好序
  // 如果前一位大于后一位，则向后挪动一位，最终给 base 提供出一个位置
  while (i < array.length) {
    const base = array[i];

    let j = i;
    while (j > 0 && array[j - 1] > base) {
      array[j] = array[j - 1];
      j -= 1;
    }
    array[j] = base;
    i += 1;
  }
  return array;
};
```

### [希尔排序](./shellsort.js)

希尔排序是基于插入排序而来的改良版，其主要优势是解决了当数组序列很差（例如倒序，但我们需要将其顺序）时排序性能差的问题。在普通的插入排序中，每个元素依次向前挪动一位，而这正是性能差的根源。因此，希尔排序会先从大的位差开始前挪，再逐渐降低至 1，即：第一次排序，每次往前挪动 N（N > 1），之后每次排序时都降低 N 直至为 1。

```bash
# 从小到大排序
# 初始，数组状态比较差，为倒序排序
11 10 9 8 7 6 5 4 3 2 1

# i = 0，spacing = 8
# 寻找 index = 8 的元素（11），并将其和 index = 0 的元素（3）比较
# 因 3 < 11，故不变
3 10 9 8 7 6 5 4 11 2 1

# i = 1，spacing = 8
# 寻找 index = 9 的元素（2），并将其和 index = 1 的元素（10）比较
3 10 9 8 7 6 5 4 11 2 1
# 因 10 > 2，因此换位得到
3 2 9 8 7 6 5 4 11 10 1

# i = 2，spacing = 8
# 寻找 index = 10 的元素（1），并将其和 index = 2 的元素（9）比较
3 2 9 8 7 6 5 4 11 10 1
# 因 9 > 1，因此换位得到
3 2 1 8 7 6 5 4 11 10 9

# i = 3，spacing = 8
# index = 3 + 8 = 11 > 10，第一次排序结束

# i = 0，spacing = 5
# 寻找 index = 5 的元素，并将其和 index = 0 的元素比较
3 2 1 8 7 6 5 4 11 10 9

# i = 1，spacing = 5
# 寻找 index = 6 的元素，并将其和 index = 1 的元素比较
3 2 1 8 7 6 5 4 11 10 9

# i = 2，spacing = 5
# 寻找 index = 7 的元素，并将其和 index = 2 的元素比较
3 2 1 8 7 6 5 4 11 10 9

# i = 3，spacing = 5
# 寻找 index = 8 的元素，并将其和 index = 3 的元素比较
3 2 1 8 7 6 5 4 11 10 9

# i = 4，spacing = 5
# 寻找 index = 9 的元素，并将其和 index = 4 的元素比较
3 2 1 8 7 6 5 4 11 10 9
```

希尔排序本质上是对数组进行了预处理，通过大的间隔，快速的将数组中的一些元素进行部分排列，并以此预防了数组倒序的情况。而希尔排序不断递减的间隔也是有律可寻的，你可以使用指定的公式，比如 `3x + 1` ，并找到小于数组长度的最大 spacing，然后进行多次排序，每次逐步降低 spacing 的值。

### [洗牌](./shuffling.js)

如何用排序（顺序排列）来洗牌（随机排列）？

1. 我们可以对每个元素，即每张牌赋予一个随机数，然后再对随机数进行排列。

2. 除了使用排序的方法以外，也可以遍历数组，对于每个遍历到的位置 i 上的元素，都从 index < 1 的位置上随机取出一个元素，然后两者交换位置。这样对于长度为 N 的数组，只需要遍历 1 次，进行 N - 1 次取随机的操作，就能将其随机排列。

```bash
# 洗牌
# 初始状态
1 2 3 4 5 6 7

# i = 0，不进行操作

# i = 1，从 index < 1 的元素中随机抽取一个进行位置交换。此时只能取 index = 0
2 1 3 4 5 6 7

# i = 2，从 index < 2 的元素中随机抽取一个进行位置交换。假设取 index = 1
2 3 1 4 5 6 7

# i = 3，从 index < 3 的元素中随机抽取一个进行位置交换。假设取 index = 1
2 4 1 3 5 6 7
```

这样的洗牌方式优点就在于速度快，复杂度始终是线性的。

```javascript
const shuffing = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) continue;
    const randomIndex = random(0, i);
    const temp = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = temp;
  }
};
```

### [桶排序 Bucket sort](./bucket-sort.js)

基本思路：

1. 求出数组中的最大值 `max` 和最小值 `min`
2. 则全部数据位于 [min, max] 区间内。将全部数据均匀划分成 k 个区间，`k = (max - min) / arr.length`
3. 每个区间是一个桶。遍历数组，将数组中的元素分配到各自的桶内
4. 对每个桶内的元素进行排序。可以使用插入排序来降低时间复杂度
5. 将各个桶中的元素合并成一个大的有序数组

### 二分排序

```javascript
// 二分搜索
// 查找目标值，如果不存在，则在最后的索引两侧查找可以插入的位置
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.ceil((right + left) / 2);
    const num = nums[mid];
    if (num === target) return mid;
    if (num > target) right = mid - 1;
    if (num < target) left = mid + 1;
  }

  if (right === 0) {
    if (target < nums[right]) return 0;
    return right + 1;
  }
  if (left === nums.length - 1) {
    if (target > nums[left]) return nums.length;
    return left;
  }
  return nums[left] < target ? left + 1 : left;
};

console.log(search([1,3,7,9], 4));
console.log(search([1,3,5,7,9], 4));
console.log(search([1,3,5,7,9], 6));
console.log(search([1,3,5,7,9], 10));
console.log(search([1,3,5,7,9], 0));
console.log(search([1], 3));
console.log(search([1], 0));
console.log(search([], 0));
console.log(search([0, 9], 3));
console.log(search([0, 1, 3, 9], 5));
```
