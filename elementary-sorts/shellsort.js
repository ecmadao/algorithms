const less = (a, b) => a - b < 0;

const reverse = (array, i, spaceing = 1, loopCount = 1) => {
  if (i <= 0) return loopCount;
  const index = i - spaceing;
  if (less(array[i], array[index])) {
    const temp = array[i];
    array[i] = array[index];
    array[index] = temp;
    return reverse(array, index, spaceing, loopCount + 1);
  }
  return loopCount;
};

const sort = (array) => {
  const N = array.length;
  let h = 1;
  while (h < N / 3) {
    h = 3 * h + 1;
  }
  let loopCount = 0;
  while (h >= 1) {
    // loopCount += 1;
    for (let i = h; i < N; i += 1) {
      // loopCount += 1;
      for (let j = i; j >= h; j -= h) {
        const count = reverse(array, j, h);
        loopCount += count;
      }
    }
    h = (((h - 1) / 3) -  1) * 3 + 1;
  }
  return loopCount;
};

const array = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const loopCount = sort(array);
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]