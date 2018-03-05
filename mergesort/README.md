## 归并排序

### [基本归并排序](./mergesort.js)

将数组递归的一分为二，然后对分得的小数组进行排序，最后合并数组。在合并数组的时候，同时遍历两个数组（索引分别是 i，j），依次比较当前索引位置上的元素，取较小（或大）值放入代表排序结果的数组中，然后递增那个索引：

```bash
# 对两个排好序的数组进行合并
# left  |  right
1 3 5 7 | 2 4 6 8
result = []

# 同时遍历
# i = 0, j = 0
1 3 5 7 | 2 4 6 8
# arrayLeft[i] < arrayRight[j]，则将 arrayLeft[i] 放入结果中，然后 i 递增 1

# i = 1, j = 0
1 3 5 7 | 2 4 6 8
result = [1]
# arrayLeft[i] > arrayRight[j]，则将 arrayRight[j] 放入结果中，然后 j 递增 1

# i = 1, j = 1
1 3 5 7 | 2 4 6 8
result = [1, 2]
```

这样的分治算法有较快的速度，但缺点也比较明显，即需要生产新的数组来储存排好序的结果。

```javascript
// 为了不在递归的过程中不断创建新数组，我们将其作为外部参数 copiedArray 传入
const merge = (copiedArray, array, start, mid, end) => {
  for (let i = start; i <= end; i += 1) {
    copiedArray[i] = array[i];
  }
  let leftIndex = start;
  let rightIndex = mid + 1;
  for (let i = start; i <= end; i += 1) {
    const leftVal = copiedArray[leftIndex];
    const rightVal = copiedArray[rightIndex];
    if (leftIndex > mid || less(rightVal, leftVal)) {
      array[i] = rightVal;
      rightIndex += 1;
    } else {
      array[i] = leftVal;
      leftIndex += 1;
    }
  }
};

const mergesort = (array, start = null, end = null, copiedArray = []) => {
  if (start === null) start = 0;
  if (end === null) end = array.length - 1;
  if (start >= end) return;
  const mid = Math.floor((end - start) / 2) + start;
  mergesort(array, start, mid, copiedArray);
  mergesort(array, mid + 1, end, copiedArray);
  merge(copiedArray, array, start, mid, end);
};
```

归并排序的优化：

- 像上面代码中所示，始终使用一个 `copiedArray`，而不是每次都创建新的
- 切分到小数组时，没必要再使用归并法，而可以利用插入排序或者选择排序，它们在处理小数组时的开销更低
- 原地排序，不再使用 `copiedArray`
- 两个已经顺序了的数组，在调用 `merge` 方法之前，可以先比较 `arrayLeft` 的最大值和 `arrayRight` 的最小值。如果最大值小于最小值，则直接将两个数组合并即可

### [从下到上的归并排序](./bottom-up-mergesort.js)

不同于普通归并排序，它在排序时把未排序的每一个元素视为已经排序的序列，该序列长度为一。之后遍历合并长度为 1 的子序列，成为长度为 2 的序列；然后再将长度为 2 的序列合并成长度为 4 的序列，以此类推。

```bash
1 7 5 3 2 4 8 6

# 第一次合并，合并的时候进行了排序
1 7 - 3 5 - 2 4 - 6 8

# 第二次合并
1 3 5 7 - 2 4 6 8

# 第三次合并
1 2 3 4 5 6 7 8
```