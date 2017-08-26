const less = (a, b) => a - b < 0;

const sort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (less(array[j], array[min])) {
        min = j;
      }
    }
    const temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
};

const array = [8, 3, 5, 1, 9, 2];
sort(array);
console.log(array); // [1, 2, 3, 5, 8, 9]