/*
 * Math.random() --> [0,1)
 * Math.random() * (end - start) --> [0, end - start)
 * Math.random() * (end - start) + start --> [start, end)
 * Math.floor(Math.random() * (end - start) + start) --> [start, end), 且为整数
 */
const random = (start, end) =>
  Math.floor(Math.random() * (end - start) + start);

const shuffing = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) continue;
    const randomIndex = random(0, i);
    const temp = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = temp;
  }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
shuffing(array);
console.log(array);