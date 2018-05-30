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

class Heap {
  constructor(options = {}) {
    const {
      array = [],
      buildFromHead = true
    } = options;
    this.heaps = [];

    if (buildFromHead) {
      this.buildFromHead(array);
    } else {
      this.buildFromTail(array);
    }
  }

  /* =============================== buildFromHead =============================== */
  /*
  * 从二叉树根部根部创建时，数组的元素从头开始依次 push 进代表二叉堆的数组中
  * 然后对新添加的元素进行排序
  * 这其实相当于向一个已存在的二叉堆中添加新元素的过程
  */
  buildFromHead(array) {
    console.log(' ========================== buildFromHead ============================= ');
    for (let i = 0; i < array.length; i += 1) {
      const val = array[i];
      this.enqueue(val);
    }
  }

  /*
  * 向已知的二叉堆中添加新元素，然后获取其在二叉堆中的位置，之后和父节点比较以此进行排序
  */
  enqueue(child) {
    this.heaps.push(child);
    const childIndex = this.heaps.length;
    this.sortWithFather(childIndex);
  }

  /*
  * 子节点和父节点进行比较
  * 因为是创建最大堆，所以如果子节点的大小大于父节点，则两者交换位置
  */
  sortWithFather(childIndex) {
    const fatherIndex = Math.floor(childIndex / 2);
    if (fatherIndex <= 0) return;
    if (more(this.heaps[childIndex - 1], this.heaps[fatherIndex - 1])) {
      exchange(this.heaps, childIndex - 1, fatherIndex - 1);
      this.sortWithFather(fatherIndex);
    }
  }

  /* =============================== buildFromTail =============================== */
  /*
  * 从二叉树底部开始创建
  * 如果不需要保留原数组，我们就可以省略克隆数组这一步，减少更多开销
  */
  buildFromTail(array) {
    console.log(' ========================== buildFromTail ============================= ');
    this.heaps = [...array];
    for (let i = this.heaps.length - 1; i >= 0; i -= 1) {
      // 每一个元素作为父元素，和其子元素进行比较
      this.sortWithChild(i + 1);
    }
  }

  /*
  * 父元素和子元素进行比较
  * 如果已经是最底部的元素，则没有子元素，排序终止
  */
  sortWithChild(fatherIndex) {
    if (fatherIndex < 0) return;
    const childIndexLeft = fatherIndex * 2;
    const childIndexRight = childIndexLeft + 1;

    if (childIndexLeft > this.heaps.length) return;
    // 如果子元素的大小大于父元素，则交换位置
    if (more(this.heaps[childIndexLeft - 1], this.heaps[fatherIndex - 1])) {
      exchange(this.heaps, childIndexLeft - 1, fatherIndex - 1);
    }

    if (childIndexRight > this.heaps.length) return;
    if (more(this.heaps[childIndexRight - 1], this.heaps[fatherIndex - 1])) {
      exchange(this.heaps, childIndexRight - 1, fatherIndex - 1);
    }

    // 将两个子元素作为父元素，继续和它们的子元素进行排序，直至进行到最底部
    this.sortWithChild(childIndexLeft);
    this.sortWithChild(childIndexRight);
  }

  get values() {
    return this.heaps;
  }

  /*
  * 将数据从二叉树中移除
  * 移除的一定是二叉树根部的元素
  */
  dequeue() {
    // 首先，根部元素和底部最后一位元素交换位置
    exchange(this.heaps, 0, this.heaps.length - 1);
    // 然后，取出并从树中删除此时的最后一位元素，即原二叉堆的根元素
    const result = this.heaps.pop();
    // 最后，从根部开始排序
    this.sortWithChild(1);
    return result;
  }

  setHead(val) {
    this.heaps[0] = val;
  }
}


const array = [3, 10, 9, 8, 7, 6, 5, 4, 11, 2, 1, 12, 13, 0, 21, 20, 19, 22, 18];

/* =============== build heap from head ==================*/
let heap = new Heap({
  array,
  buildFromHead: true
});
console.log('Build heap from head:');
console.log(heap.values); // [22, 21, 13, 20, 7, 11, 12, 10, 19, 2, 1, 6, 9, 0, 5, 3, 8, 4, 18]



/* =============== build heap from tail ==================*/
heap = new Heap({
  array,
  buildFromHead: false
});
console.log('Build heap from tail:');
console.log(heap.values); // [22, 20, 21, 19, 7, 12, 13, 8, 18, 2, 1, 6, 9, 0, 5, 3, 4, 10, 11]


/* ======================================================= */
console.log(' ========================== dequeue ============================= ');

console.log('We get this heap:');
console.log(heap.values); // [22, 20, 21, 19, 7, 12, 13, 8, 18, 2, 1, 6, 9, 0, 5, 3, 4, 10, 11]

const item = heap.dequeue();
console.log(`Get max item: ${item}`); // 22
console.log('Now heap is:');
console.log(heap.values); // [21, 19, 20, 18, 7, 12, 13, 8, 11, 2, 1, 6, 9, 0, 5, 3, 4, 10]


/* ========================= Get the max K ============================== */
console.log('========================= Get the min K ==============================');

// 寻找数组中第 K 小的数
const getMinK = (array, k) => {
  if (k > array.length) throw new Error('K is larger than array length');

  // 取前 K 个元素构成最大堆
  const kItems = array.slice(0, k);
  const heap = new Heap({
    array: kItems,
    buildFromHead: false
  });

  for (let i = k; i < array.length; i += 1) {
    const val = array[i];
    // 如果元素小于堆顶，则交换值，并重新排列堆
    if (val < heap.values[0]) {
      heap.setHead(val);
      heap.sortWithChild(1);
    }
  }
  return heap.values[0];
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