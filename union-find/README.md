<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Union-find](#union-find)
  - [快速查找](#%E5%BF%AB%E9%80%9F%E6%9F%A5%E6%89%BE)
  - [快速并集](#%E5%BF%AB%E9%80%9F%E5%B9%B6%E9%9B%86)
  - [增强型快速并集](#%E5%A2%9E%E5%BC%BA%E5%9E%8B%E5%BF%AB%E9%80%9F%E5%B9%B6%E9%9B%86)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Union-find

Union-find，并查集，用于解决动态连通性问题。

简单概括而言如下：

有一组对象，用从 0 到 N 来表示。其中任意两个可以相互链接。例如，`1` 链接到 `2`，且 `2` 链接到 `4`，则我们可以认为 `1` 和 `4` 也是相互链接的。因此，并查集用于快速查询两个对象之间是否联通，并且要能够很快的在对象之间建立链接：

```bash
union(1, 4) # 链接 1 4
union(2, 7) # 链接 2 7
union(2, 4) # 链接 2 4
check(1, 7) # 检查 1 7 是否联通
```

### [快速查找](./quick-find.js)

我们可以通过数组的映射来实现快速查找，即给出两个数字后，快速判断其是否联通。

还是一组对象，假设有 8 个，用从 0 到 7 来表示。我们将它们作为数组的下标储存起来，而每个下标位置上对应的数组的值，则代表其联通的那个数：

```javascript
/*
 * 一组数为 0，1，2，3，4，5，6，7
 * 作为下标储存在数组中
 * 输出化时，每个位置上的值都是它本身，代表仅联通自己
*/
const init = (count = 7) => {
  const data = [];
  for (let i = 0; i < count + 1; i += 1) {
    data[i] = i;
  }
  return data;
};

init();
```

这样一来我们就得到如下的数据结构：

```bash
0 1 2 3 4 5 6 7
| | | | | | | |
0 1 2 3 4 5 6 7
```

当需要联通时，则将数组对应位置上的值替换为链接的数字：

```bash
# 链接 2 和 4
0 1 2 3 4 5 6 7
| | | | | | | |
0 1 4 3 4 5 6 7

# 然后再链接 2 和 7，则与 2 链接的数字都要与 7 链接
0 1 2 3 4 5 6 7
| | | | | | | |
0 1 7 3 7 5 6 7
```

用代码表示如下：

```javascript
/*
 * 将 val 和 target 链接
 * 需要查找所有和 val 链接的值，将其链接对象改为 target
*/
const union = (val, target) => {
  if (data[val] !== val) {
    const origin = data[val];
    union(origin, target);
  }
  data[val] = target;
};
```

在查找的时候，只要简单的比较两个位置上对应的值是否相等即可：

```javascript
const find = (val, target) => data[val] === data[target];
```

**这种算法的优势在于查询速度非常快，但缺点也很明显：在 union 操作的时候需要循环或者递归多次，在最糟糕的情况下，每次 union 时我们都会对 N - 1 个元素进行遍历。**

### [快速并集](./quick-union.js)

还是利用数组的映射，但是本质上，我们使用树状结构来代替原有的并集结构：

```bash
# 先将 5 链接到 7，再将 7 已经链接到 4，所以 5 本质上也链接到了 4
0 1 3  __4__  6
| | |  |   |  |
0 1 3  2   7  6
           |
           5

# 而在数组里，当前情况则为
# 即各个位上的值为其父元素的值，而没有链接的话则为本身
index: 0 1 2 3 4 5 6 7
value: 0 1 4 3 4 7 6 4
```

在这种算法里，当我们要链接两个值 `p` 和 `q` 时，将会把 `p` 的根节点链接到 `q` 的根节点上

用代码表示其链接规则：

```javascript
// 查找给定 val 的根节点
const findRoot = (val) => {
  let root = val;
  while(data[root] !== root) {
    root = data[root];
  }
  return root;
};

// 将两个指定值的 root 节点链接起来
const union = (val, target) => {
  const valRoot = findRoot(val);
  const targetRoot = findRoot(target);
  data[valRoot] = targetRoot;
};
```

相对于的，在查找时，只要比较两个值的根节点是否相同即可：

```javascript
const find = (val, target) => findRoot(val) === findRoot(target);
```

这种算法的优势就在于并集操作比较简单。因为是树状结构，我们往往不需要遍历太多次；而它的缺点则在于，如果树状结构是瘦长的，即我们先将 `1` 链接到 `2`， 再将 `2` 链接 `3` 这样依次下去，则每个节点只有一个子节点，最终成为一个线状结构。在这种情况下，进行链接或判断时，在糟糕的情况下我们还是需要遍历 N - 1 次以便找到根节点。

### [增强型快速并集](./quick-union-enhance.js)

前面已经说过，快速并集的缺点在于“瘦长树”，其原因是：我们先将 `1` 链接到 `2`， 再将 `2` 链接 `3`，再将 `3` 链接到 `4`... 这样下去将会形成 `1 - 2 - 3 - 4 ... N` 的结构。为了避免这样的结构，在形成树时，应该避免树的层级过深，而进行横向扩张，即我们应该将层级浅的树链接到层级深的树上。

```bash
# 当 1 - 2 - 3 要链接到 4 时...
# 与其把 3 链接到 4 上
4
|
3
|
2
|
1

# 不如把 4 链接到 3 上
__3___
|    |
2    4
|
1
```

要达到这样的效果，就需要我们在链接时比较判断树的层级大小；除此以外，应该提供一个数组来记录各个节点的深度。

```javascript
const size = []; // 记录各个元素所在位置的深度。index 为元素值，对应位置的 value 为深度

const init = (count = 7) => {
  const data = [];
  for (let i = 0; i < count + 1; i += 1) {
    data[i] = i;
    size[i] = 1; // 初始化时各个元素深度都是 1
  }
  return data;
};

const union = (val, target) => {
  const valRoot = root(val);
  const targetRoot = root(target);

  if (size[valRoot] <= size[targetRoot]) {
    // 此时 val 树比 target 树浅，应将 val 的 root 挂载在 target 的 root 上
    data[valRoot] = targetRoot;
    size[targetRoot] += size[valRoot];
  } else {
    // 反之将 target 的 root 挂载在 val 的 root 上
    data[targetRoot] = valRoot;
    size[valRoot] += size[targetRoot];
  }
};
```