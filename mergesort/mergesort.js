const less = (a, b) => a - b < 0;

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

const array = [3, 10, 9, 8, 7, 6, 5, 4, 11, 2, 1, 12, 13, 0, 21, 20, 19, 22, 18];
mergesort(array);
console.log(array); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 21, 22]