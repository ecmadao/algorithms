/*
 * 前提：我们构建的二叉堆为最大堆，即父节点永远大于子节点
*/

const more = (a, b) => a - b > 0;

const exchange = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

console.log(' ========================== buildFromHead ============================= ');

const sortWithFather = (heaps, childIndex) => {
  const fatherIndex = Math.floor(childIndex / 2);
  if (fatherIndex <= 0) return;
  if (more(heaps[childIndex - 1], heaps[fatherIndex - 1])) {
    exchange(heaps, childIndex - 1, fatherIndex - 1);
    sortWithFather(heaps, fatherIndex);
  }
};

const enqueue = (heaps, child) => {
  heaps.push(child);
  const childIndex = heaps.length;
  sortWithFather(heaps, childIndex);
};

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

const sortWithChild = (heaps, fatherIndex) => {
  if (fatherIndex < 0) return;
  const childIndexLeft = fatherIndex * 2;
  const childIndexRight = childIndexLeft + 1;

  if (childIndexLeft > heaps.length) return;
  if (more(heaps[childIndexLeft - 1], heaps[fatherIndex - 1])) {
    exchange(heaps, childIndexLeft - 1, fatherIndex - 1);
  }

  if (childIndexRight > heaps.length) return;
  if (more(heaps[childIndexRight - 1], heaps[fatherIndex - 1])) {
    exchange(heaps, childIndexRight - 1, fatherIndex - 1);
  }

  sortWithChild(heaps, childIndexLeft);
  sortWithChild(heaps, childIndexRight);
};

const buildFromTail = (array) => {
  const binaryHeaps = [...array];
  for (let i = binaryHeaps.length - 1; i >= 0; i -= 1) {
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
const dequeue = (heaps) => {
  exchange(heaps, 0, heaps.length - 1);
  const result = heaps.pop();
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
console.log('========================= Get the max K ==============================');

const getMinK = (array, k) => {
  if (k > array.length) throw new Error('K is larger than array length');

  const kItems = array.slice(0, k);
  const heaps = buildFromTail(kItems);

  for (let i = k; i < array.length; i += 1) {
    const val = array[i];
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