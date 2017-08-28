## 优先队列

对于普通的队列而言，数据先进先出：元素在队列尾追加，而从队列头删除。而在优先队列中，元素被赋予了一种优先级，在出队列时，优先级最高的元素会最先被推出并删除。

### [二叉堆](./binary-heaps.js)

二叉堆属于优先队列（父节点优先级大于子节点）

- 二叉树：每个节点最多只有两个分支（左子树，右子树）的树状结构。

- 满二叉树：除了最后一层没有子节点，其他各层都有两个子节点

- 完全二叉树：若设二叉树的深度为h，除第 h 层外，其它各层 (1～h-1) 的结点数都达到最大个数，第 h 层所有的结点都连续集中在最左边

- 二叉堆：特殊的完全二叉树。其父节点始终比子节点大（或小）
  - 最小堆：所有的父节点都比其子节点小
  - 最大堆：所有的父节点都比其子节点大

假设一个优先队列里，数字越大则优先级越高。那么可以使用一个最大二叉堆，即父节点始终大于其子节点，从根节点往下越来越小。那么在推出元素的时候，一定会推出根节点上的数据；反之，在插入元素的时候，则在子节点上进行插入操作，然后依次向父节点比较大小，直至找到合适的位置。

#### 二叉堆的创建

我们可以直接使用数组来储存二叉堆。每个元素的索引加 1，即 `i + 1`，代表它是二叉堆中的第 `index` 个节点，而 `index * 2` 和 `index * 2 + 1` 则是它的两个子节点；同理，已知一个节点在二叉堆中第 `index` 个节点，则其父节点是第 `Math.floor(index / 2)` 个节点。

```bash
# 数组
22 21 13 20 7 11 12
# 22 是根节点
# 21，13 是 22 的子节点
# 20，7 是 21 的子节点
# 11，12 是 13 的子节点
```

给定一个数组，可以从根部或者最底部创建二叉堆。**假设我们要创建一个最大堆：**

- 从根部开始创建最大二叉堆

```javascript
/*
 * 从二叉树根部创建时，数组的元素从头开始依次 push 进代表二叉堆的数组中
 * 然后对新添加的元素进行排序
 * 这其实相当于向一个已存在的二叉堆中添加新元素的过程
*/
const buildFromHead = (array) => {
  const binaryHeaps = [];

  for (let i = 0; i < array.length; i += 1) {
    const val = array[i];
    enqueue(binaryHeaps, val);
  }
  return binaryHeaps;
};

// 向已知的二叉堆中添加新元素，然后获取其在二叉堆中的位置，之后和父节点比较以此进行排序
const enqueue = (heaps, child) => {
  heaps.push(child);
  const childIndex = heaps.length;
  sortWithFather(heaps, childIndex);
};

/*
 * 子节点和父节点进行比较
 * 因为是创建最大堆，所以如果子节点的大小大于父节点，则两者交换位置
*/
const sortWithFather = (heaps, childIndex) => {
  const fatherIndex = Math.floor(childIndex / 2);
  if (fatherIndex <= 0) return;
  if (more(heaps[childIndex - 1], heaps[fatherIndex - 1])) {
    // 交换两者的值
    exchange(heaps, childIndex - 1, fatherIndex - 1);
    // 递归，不断和父节点比较，直到达到根节点
    sortWithFather(heaps, fatherIndex);
  }
};
```

- 从底部开始创建最大二叉堆

```javascript
/*
 * 从二叉树底部开始创建
 * 如果不需要保留原数组，我们就可以省略克隆数组这一步，减少更多开销
*/
const buildFromTail = (array) => {
  const binaryHeaps = [...array];
  for (let i = binaryHeaps.length - 1; i >= 0; i -= 1) {
    // 每一个元素作为父元素，和其子元素进行比较
    sortWithChild(binaryHeaps, i + 1);
  }
  return binaryHeaps;
};

/*
 * 父元素和子元素进行比较
 * 如果已经是最底部的元素，则没有子元素，排序终止
*/
const sortWithChild = (heaps, fatherIndex) => {
  const childIndexLeft = fatherIndex * 2;
  const childIndexRight = childIndexLeft + 1;

  if (childIndexLeft > heaps.length) return;
  // 如果子元素的大小大于父元素，则交换位置
  if (more(heaps[childIndexLeft - 1], heaps[fatherIndex - 1])) {
    exchange(heaps, childIndexLeft - 1, fatherIndex - 1);
  }

  if (childIndexRight > heaps.length) return;
  if (more(heaps[childIndexRight - 1], heaps[fatherIndex - 1])) {
    exchange(heaps, childIndexRight - 1, fatherIndex - 1);
  }

  // 将两个子元素作为父元素，继续和它们的子元素进行排序
  sortWithChild(heaps, childIndexLeft);
  sortWithChild(heaps, childIndexRight);
};
```

#### 二叉堆的移除

即从二叉堆中取出并删除根部元素。我们可以将二叉堆的根部元素和底部最后一位元素交换位置，然后取出并删除最后一位元素。此时原二叉堆的根元素已经取出，然后再对新的二叉堆从根部到底部进行排序：

```javascript
const dequeue = (heaps) => {
  // 根部元素和底部最后一位元素交换位置
  exchange(heaps, 0, heaps.length - 1);
  // 取出并删除此时的最后一位元素，即原二叉堆的根元素
  const result = heaps.pop();
  // 从根部开始排序
  sortWithChild(heaps, 1);
  return result;
};
```

### 堆排序

利用堆来快速进行排序，其复杂度和快排相同。

如果要从小到大排序，则可以创建一个最小堆，然后每次从堆顶部取出并删除元素，将取出的元素放到排序结果的数组中；反之，要从大到小排序的话，则创建最大堆。

如果要求一个数组中第 K 大（或小）的数，则也可以通过创建最小堆（最大堆）来解决：

1. 已知一个乱序数组，求其中第 K 大的数
2. 取前 K 个元素（或者随机取 K 个元素）
3. 将这 K 个元素创建为最小堆 A
4. 遍历数组中剩下的元素，如果它比 A 的堆顶小，则忽略；如果比堆顶大，则替换成为新的堆顶，然后检查最小堆 A，重新对堆进行排列
5. 最后遍历完成之后，堆顶的元素就是第 K 大的元素

同理，如果要求一个数组中第 K 小的数，则可以创建一个大小为 K 的最大堆，并按照同样的方式对剩下的元素进行遍历，最后堆顶部的元素就是原数组中第 K 小的数。

```javascript
// 寻找数组中第 K 小的数
const getMinK = (array, k) => {
  if (k > array.length) throw new Error('K is larger than array length');

  // 取前 K 个元素构成最大堆
  const kItems = array.slice(0, k);
  const heaps = buildFromTail(kItems);

  for (let i = k; i < array.length; i += 1) {
    const val = array[i];
    // 如果元素小于堆顶，则交换值，并重新排列堆
    if (val < heaps[0]) {
      heaps[0] = val;
      sortWithChild(heaps, 1);
    }
  }
  return heaps[0];
};
```