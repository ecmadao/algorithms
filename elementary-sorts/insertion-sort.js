const less = (a, b) => a - b < 0;

const reverse = (array, i, loopCount = 1) => {
  if (i <= 0) return loopCount;
  if (less(array[i], array[i - 1])) {
    const temp = array[i];
    array[i] = array[i - 1];
    array[i - 1] = temp;
    return reverse(array, i - 1, loopCount + 1);
  }
  return loopCount;
};

const sort = (array) => {
  let loopCount = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (i <= 0) continue;
    const count = reverse(array, i);
    loopCount += count;
  }
  return loopCount;
};

const array = [7, 8, 3, 5, 1, 9, 2];
sort(array);
console.log(array); // [1, 2, 3, 5, 7, 8, 9]

const loopCount = sort([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(`Loop count is ${loopCount}`); // 65

const insertSort = (array) => {
  let i = 1;
  while (i < array.length) {
    const base = array[i];

    let j = i;
    while (j > 0 && array[j - 1] > base) {
      array[j] = array[j - 1];
      j -= 1;
    }
    array[j] = base;
    i += 1;
  }
  return array;
};

const result = insertSort([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(`insertSort result ${result}`); // 65