const less = (a, b) => a - b < 0;

// 合并数组的方法和普通归并排序一样
const merge = (array, start, mid, end) => {
  const copiedArray = [];
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

const sort = (array) => {
  const N = array.length;
  for (let i = 1; i < N; i *= 2) {
    for (let start = 0; start < N - i; start += i * 2) {
      const mid = start + i - 1;
      const end = Math.min((start + 2 * i) - 1, N - 1);
      console.log(`start: ${start}, end: ${end}`);
      console.log(array);
      merge(array, start, mid, end);
    }
  }
};

const array = [3, 10, 9, 8, 7, 6, 5, 4, 11, 2, 1, 12, 13, 0, 21, 20, 19, 22, 18];
sort(array);
console.log(array); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 21, 22]