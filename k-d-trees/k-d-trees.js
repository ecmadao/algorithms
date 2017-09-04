const more = (a, b) => a - b > 0;

// 数组中的两个元素交换位置
const exchange = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

class Heap {
  constructor(array = []) {
    this.heaps = [...array];
    if (array.length) {
      this.initial();
    }
  }

  get count() {
    return this.heaps.length;
  }

  get min() {
    return Math.min(...this.heaps.map(item => item.value));
  }

  get max() {
    return this.heaps[0].value;
  }

  initial() {
    for (let i = this.heaps.length - 1; i >= 0; i -= 1) {
      // 每一个元素作为父元素，和其子元素进行比较
      this.sortWithChild(i + 1);
    }
  }

  sortWithChild(fatherIndex) {
    if (fatherIndex < 0) return;
    const childIndexLeft = fatherIndex * 2;
    const childIndexRight = childIndexLeft + 1;

    if (childIndexLeft > this.heaps.length) return;
    // 如果子元素的大小大于父元素，则交换位置
    if (more(this.heaps[childIndexLeft - 1].value, this.heaps[fatherIndex - 1].value)) {
      exchange(this.heaps, childIndexLeft - 1, fatherIndex - 1);
    }

    if (childIndexRight > this.heaps.length) return;
    if (more(this.heaps[childIndexRight - 1].value, this.heaps[fatherIndex - 1].value)) {
      exchange(this.heaps, childIndexRight - 1, fatherIndex - 1);
    }

    // 将两个子元素作为父元素，继续和它们的子元素进行排序，直至进行到最底部
    this.sortWithChild(childIndexLeft);
    this.sortWithChild(childIndexRight);
  }

  enqueue(item) {
    this.heaps.push(item);
    this.sortWithChild(this.heaps.length);
  }

  pop() {
    this.heaps.pop();
  }

  dequeue() {
    // 首先，根部元素和底部最后一位元素交换位置
    exchange(this.heaps, 0, this.heaps.length - 1);
    // 然后，取出并从树种删除此时的最后一位元素，即原二叉堆的根元素
    const result = this.heaps.pop();
    // 最后，从根部开始排序
    this.sortWithChild(this.heaps, 1);
    return result;
  }
}

class Node {
  constructor(options) {
    const {
      point, // 将点转换为数组的格式 (1, 2) => [1, 2]
      dimensional, // 因此可以利用索引来代表不同维度
      parentNode = null,
    } = options;
    this.point = point;
    this.parentNode = parentNode;
    this.dimensional = dimensional;
    this.leftNode = null;
    this.rightNode = null;
    this.visited = false;
  }

  bottom(point) {
    if (!this.leftNode && !this.rightNode) return this;

    const splitValue = this.point[this.dimensional];
    const target = point[this.dimensional];

    if (target === splitValue) return this;
    if (target < splitValue) {
      if (!this.leftNode) return this;
      return this.leftNode.bottom(point);
    }
    if (!this.rightNode) return this;
    return this.rightNode.bottom(point);
  }

  verticalDistance(point) {
    return Math.abs(this.point[this.dimensional] - point[this.dimensional]);
  }
}

// 计算方差
const getVariance = (array) => {
  const avg = array.reduce((pre, next) => pre + next, 0) / array.length;
  return array.reduce((pre, next) => Math.pow(next - avg, 2) + pre, 0) / array.length;
};

// 获取中位数所在的索引
// TODO: 使用算法来优化这一过程
const getCentralIndex = (dataset, dimensional) => {
  if (dataset.length <= 1) return 0;
  dataset.sort((pre, current) => pre[dimensional] - current[dimensional]);
  return Math.floor(dataset.length / 2);
};

// 通过最大方差来获取分隔的维度
// TODO: 使用算法来优化这一过程
const getDimensional = (dataset) => {
  const point = dataset[0];
  let dimensional = null;
  let maxVariance = null;

  // i means current dimensional
  for (let i = 0; i < point.length; i += 1) {
    const datas = dataset.map(point => point[i]);
    const variance = getVariance(datas);
    if (!maxVariance || variance > maxVariance) {
      maxVariance = variance;
      dimensional = i;
    }
  }
  return dimensional;
};

// 获取两点距离
// 为方便起见，没有开方
const getDistance = (pointA, pointB) =>
  pointA.reduce((pre, next, index) => {
    return pre + Math.pow((next - pointB[index]), 2);
  }, 0);

const build = (dataset, parentNode = null) => {
  if (!dataset.length) return null;
  const dimensional = getDimensional(dataset);
  const centralIndex = getCentralIndex(dataset, dimensional);
  const left = dataset.slice(0, centralIndex);
  const right = dataset.slice(centralIndex + 1);

  const node = new Node({
    point: dataset[centralIndex],
    dimensional,
    parentNode
  });

  const leftNode = build(left, node);
  const rightNode = build(right, node);

  node.leftNode = leftNode;
  node.rightNode = rightNode;
  return node;
};

// const datas = [
//   [2, 3],
//   [5, 4],
//   [9, 6],
//   [4, 7],
//   [8, 1],
//   [7, 2],
// ];

// const datas = [
//   [2, 4],
//   [2, 3],
//   [5, 4],
//   [1, 5],
//   [9, 6],
//   [6, 10],
//   [8, 1],
//   [7, 2],
//   [2, 2],
//   [4, 7]
// ];

// const datas = [
//   [6,27, 5.5],
//   [1.24, -2.86],
//   [-6.88, -5.4],
//   [-2.96, -0.5],
//   [-4.6, -10.55],
//   [-4.96, 12.61],
//   [1.75, 12.26],
//   [17.05, -12.79],
//   [7.75, -22.68],
//   [10.8, -5.03],
//   [15.31, -13.16],
//   [7.83, 15.7],
//   [14.63, -0.35]
// ];

const datas = [
  [1, 5],
  [2, 4],
  [2, 2],
  [2, 3],
  [5, 4],
  [4, 7],
  [8, 1],
  [7, 2],
  [9, 6]
];

const node = build(datas);

console.log(`node.point: ${node.point}`);
console.log(`node.leftNode.point: ${node.leftNode.point}`);
console.log(`node.rightNode.point: ${node.rightNode.point}`);

const NEARBY_POINTS_COUNT = 3;
// const target = [2.1, 3.1];
const target = [5.5, 5];
const nearbyPoints = new Heap();

const bottomPoint = node.bottom(target);
console.log(`bottomPoint.point: ${bottomPoint.point}`);

const backpropagation = (node) => {
  node.visited = true;
  const distance = getDistance(target, node.point);
  // 如果还没填充满，则继续填充
  if (nearbyPoints.count < NEARBY_POINTS_COUNT) {
    nearbyPoints.enqueue({
      value: distance,
      point: node.point
    });
  } else {
    // 如果当前节点和目标点的距离小于已存距离的最大值，则将最大值出堆
    // 然后把新的点填充进去
    if (nearbyPoints.max > distance) {
      nearbyPoints.pop();
      nearbyPoints.enqueue({
        value: distance,
        point: node.point
      });
    }
  }

  // 如果目标点到当前节点分割线的距离小于最大值，
  // 则当前节点的另一个区域还有可能存在距离更小的值，值得遍历。
  if (node.verticalDistance(target) < nearbyPoints.max) {
    if (node.leftNode && !node.leftNode.visited) {
      backpropagation(node.leftNode.bottom(target));
    }
    if (node.rightNode && !node.rightNode.visited) {
      backpropagation(node.rightNode.bottom(target));
    }
  }
  if (!node.parentNode) return;
  backpropagation(node.parentNode);
};

backpropagation(bottomPoint);
// console.log(nearbyPoints);
nearbyPoints.heaps.map(item => console.log(item));