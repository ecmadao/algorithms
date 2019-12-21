<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [快速排序](#%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F)
  - [普通快排](#%E6%99%AE%E9%80%9A%E5%BF%AB%E6%8E%92)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 快速排序

### [普通快排](./quicksort.js)

1. 寻找左侧起始位置 `i`、`start`
2. 寻找右侧起始位置 `j`
3. 两者前进。对于左侧元素，其索引 `i += 1`，而右侧元素则索引 `j -= 1`
4. 如果 `array[i] > array[start]`，则 `i` 停止前进
5. 如果 `array[j] < array[start]`，则 `j` 停止前进
6. 交换 `array[i]` 和 `array[j]` 的值
7. 重复步骤 3 直至两者相遇。交换 `array[j]` 和 `array[start]` 的值
8. 从 1 开始循环

```bash
# 先从右侧的元素开始向中心靠拢
3 2 5 8 9 7 1 0

# ================= 第一次排序 =================
# 3 2 5 8 9 7 1 0

# i = 0, j = 7 时
# array[j] = 0 < array[start] = 3，j 停止前进，i 继续前进
3 2 5 8 9 7 1 0

# i = 1, j = 7 时
# array[i] = 2 < array[start] = 3，i 继续前进
3 2 5 8 9 7 1 0

# i = 2, j = 7 时
# array[i] = 5 > array[start] = 3，i 停止前进
3 2 5 8 9 7 1 0
# array[i] 和 array[j] 交换值
3 2 0 8 9 7 1 5

# i = 3, j = 6 时
# array[i] = 8 > array[start] = 3，i 停止前进
# array[j] = 1 < array[start] = 3，j 停止前进
3 2 0 8 9 7 1 5
# array[i] 和 array[j] 交换值
3 2 0 1 9 7 8 5

# i = 4, j = 5 时
# array[i] = 9 > array[start] = 3，i 停止前进
# array[j] = 7 > array[start] = 3，j 继续前进
3 2 0 1 9 7 8 5

# i = 4, j = 4 时
# array[i] = 9 > array[start] = 3，i 停止前进
# array[j] = 9 > array[start] = 3，j 继续前进
3 2 0 1 9 7 8 5

# i = 4, j = 3 时
# array[i] = 9 > array[start] = 3，i 停止前进
# array[j] = 1 < array[start] = 3，j 停止前进
3 2 0 1 9 7 8 5

# 此时 j <= i，交换 array[j] 与 array[start]，第一次排序结束
# 取得中间值 array[mid] = 3, mid = 3
# 在 index < 3 范围内，即左侧数组，array[index] < 3
# 在 index > 3 范围内，即右侧数组，array[index] > 3
1 2 0 3 9 7 8 5
# 第一次排序结束

# ================= 第二次排序 =================
# 3 作为上述排序的结果，不再改变位置
# 将数组分成两段，分别使用上述的方式进行排序
# 左侧数组：1 2 0
# 右侧数组：9 7 8 5
# 1 2 0 | 3 | 9 7 8 5

# ======== 左侧数组 [1 2 0] ========
# start = 0

# i = 0, j = 2 时
# array[j] = 0 < array[start] = 1，j 停止前进，i 继续前进
1 2 0

# i = 1, j = 2 时
# array[i] = 2 > array[start] = 1，i 停止前进
1 2 0

# array[i], array[j] 交换值
1 0 2

# j = 1, i = 1
# array[j] = 0 < array[start] = 1，j 停止前进，i 继续前进
1 0 2

# j = 1, i = 2
# array[i] = 2 > array[start] = 1，i 停止前进
# 此时 j <= i，交换 array[j] 与 array[start]，排序结束
0 1 2

# ======== 右侧数组 [9 7 8 5] ========
# start = 4（数组其实包含了之前的全部元素，只是为了简便，只写出了右侧数组的值）

# i = 4, j = 7 时
# array[j] = 5 < array[start] = 9，j 停止前进，i 继续前进
9 7 8 5

# i = 5, j = 7 时
# array[i] = 7 < array[start] = 9，i 继续前进
9 7 8 5

# i = 6, j = 7 时
# array[i] = 8 < array[start] = 9，i 继续前进
9 7 8 5

# i = 7, j = 7 时
# 此时 j <= i，交换 array[j] 与 array[start]，排序结束
5 7 8 9

# ================= 第三次排序 =================
# 经过第二次排序，左侧数组 0 1 2 已经顺序，第一次的基数 3 已经顺序，第二次的基数 9 已经顺序
# 此时应该排列 5 7 8
# 按照同样方式进行排列，最后得到顺序的数组
0 1 2 3 5 7 8 9
```

用 JavaScript 来实现：

```javascript
const quicksort = (array, start = null, end = null) => {
  if (start === null) start = 0;
  if (end === null) end = array.length - 1;
  if (start >= end) return;

  // 基准值为起始值
  const base = array[start];
  let i = start;
  let j = end;

  while (true) {
    // 如果右侧 j 对应的值大于基准值，则继续前进
    while (less(base, array[j])) {
      if (j - 1 < start) break;
      j -= 1;
    }

    // 如果左侧 i 对应的值小于基准值，则继续前进
    while (less(array[i], base)) {
      if (i + 1 > end) break;
      i += 1;
    }

    if (j <= i) {
      break;
    }

    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }

  array[start] = array[j];
  array[j] = base;
  quicksort(array, start, j - 1);
  quicksort(array, j + 1, end);
};
```

该算法存在的问题：

1. 如果数组已经是升序排列好的，则排序所需时间较长

- 打乱初始数组的顺序
- 取样基准元素时，可以随机取样三个元素，然后选择中间大小的那个(中位数)

2. 当划分的数组已经较小时，可以不必再继续使用快速排序而是直接返回。那么最终得到的数组将会是逐段被排好序的数组。最后对整个数组使用插入排序即可。

- 在数组较小时（5 ~ 15 长），使用插入排序

> [三种快速排序以及快速排序的优化](https://blog.csdn.net/insistGoGo/article/details/7785038)
> [快速排序一步一步优化](https://www.cnblogs.com/vipchenwei/p/7460293.html)
