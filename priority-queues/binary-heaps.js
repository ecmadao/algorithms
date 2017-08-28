/*
 * 前提：我们构建的二叉堆为最大堆，即父节点永远大于子节点
*/

const more = (a, b) => a - b > 0;

// 数组中的两个元素交换位置
const exchange = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

console.log(' ========================== buildFromHead ============================= ');

/*
 * 子节点和父节点进行比较
 * 因为是创建最大堆，所以如果子节点的大小大于父节点，则两者交换位置
*/
const sortWithFather = (heaps, childIndex) => {
  const fatherIndex = Math.floor(childIndex / 2);
  if (fatherIndex <= 0) return;
  if (more(heaps[childIndex - 1], heaps[fatherIndex - 1])) {
    exchange(heaps, childIndex - 1, fatherIndex - 1);
    sortWithFather(heaps, fatherIndex);
  }
};

/*
 * 向已知的二叉堆中添加新元素，然后获取其在二叉堆中的位置，之后和父节点比较以此进行排序
*/
const enqueue = (heaps, child) => {
  heaps.push(child);
  const childIndex = heaps.length;
  sortWithFather(heaps, childIndex);
};

/*
 * 从二叉树根部根部创建时，数组的元素从头开始依次 push 进代表二叉堆的数组中
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

const array = [3, 10, 9, 8, 7, 6, 5, 4, 11, 2, 1, 12, 13, 0, 21, 20, 19, 22, 18];

/* =============== build heap from head ==================*/
let heaps = buildFromHead(array);
console.log('Build heap from head:');
console.log(heaps); // [22, 21, 13, 20, 7, 11, 12, 10, 19, 2, 1, 6, 9, 0, 5, 3, 8, 4, 18]


/* ======================================================= */
console.log(' ========================== buildFromTail ============================= ');

/*
 * 父元素和子元素进行比较
 * 如果已经是最底部的元素，则没有子元素，排序终止
*/
const sortWithChild = (heaps, fatherIndex) => {
  if (fatherIndex < 0) return;
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

  // 将两个子元素作为父元素，继续和它们的子元素进行排序，直至进行到最底部
  sortWithChild(heaps, childIndexLeft);
  sortWithChild(heaps, childIndexRight);
};

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

/* =============== build heap from tail ==================*/
heaps = buildFromTail(array);
console.log('Build heap from tail:');
console.log(heaps); // [22, 20, 21, 19, 7, 12, 13, 8, 18, 2, 1, 6, 9, 0, 5, 3, 4, 10, 11]


/* ======================================================= */
console.log(' ========================== dequeue ============================= ');

/*
 * 将数据从二叉树中移除
 * 移除的一定是二叉树根部的元素
*/
const dequeue = (heaps) => {
  // 首先，根部元素和底部最后一位元素交换位置
  exchange(heaps, 0, heaps.length - 1);
  // 然后，取出并从树种删除此时的最后一位元素，即原二叉堆的根元素
  const result = heaps.pop();
  // 最后，从根部开始排序
  sortWithChild(heaps, 1);
  return result;
};

console.log('We get this heap:');
console.log(heaps); // [22, 20, 21, 19, 7, 12, 13, 8, 18, 2, 1, 6, 9, 0, 5, 3, 4, 10, 11]

const item = dequeue(heaps);
console.log(`Get max item: ${item}`); // 22
console.log('Now heap is:');
console.log(heaps); // [21, 19, 20, 18, 7, 12, 13, 8, 11, 2, 1, 6, 9, 0, 5, 3, 4, 10]


/* ========================= Get the max K ============================== */
console.log('========================= Get the min K ==============================');

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

console.log('从数组中获取第 K 小的值');
console.log('已知数组：');
console.log(array);

console.log('当 K = 1 时：');
console.log(getMinK(array, 1)); // 0

console.log('当 K = 2 时：');
console.log(getMinK(array, 2)); // 1

console.log('当 K = 3 时：');
console.log(getMinK(array, 3)); // 2