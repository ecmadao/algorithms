const less = (a, b) => a - b <= 0;

const quicksort = (array, start = null, end = null) => {
  if (start === null) start = 0;
  if (end === null) end = array.length - 1;
  if (start >= end) return;

  const base = array[start];
  let i = start;
  let j = end;

  while (true) {
    while (less(base, array[j])) {
      if (j - 1 < start) break;
      j -= 1;
    }

    while (less(array[i], base)) {
      if (i + 1 > end) break;
      i += 1;
    }

    console.log(`i: ${i}, j: ${j}`);
    if (j <= i) {
      break;
    }

    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;

    console.log(array);
  }

  array[start] = array[j];
  array[j] = base;
  quicksort(array, start, j - 1);
  quicksort(array, j + 1, end);
};

const array = [3, 10, 9, 8, 7, 6, 5, 4, 11, 2, 1, 12, 13, 0, 21, 20, 19, 22, 18];
quicksort(array);
console.log(array); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 21, 22]