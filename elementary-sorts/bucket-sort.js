const insertionSort = (arr, num) => {
  let index = null;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
      if (arr[i] >= num) {
          if (i === 0 || arr[i - 1] <= num) {
              index = 0;
              break;
          }
      } else {
          index = i + 1;
          break;
      }
  }
  return [
      ...arr.slice(0, index),
      num,
      ...arr.slice(index)
  ];
};


const bucketSort = function(nums) {
  if (nums.length < 2) return nums;

  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const interval = (max - min) / nums.length;
  const tmp = {};

  for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];
      const section = Math.floor((num - min) / interval);
      if (tmp[section] === undefined) {
          tmp[section] = [num];
      } else {
          tmp[section] = insertionSort(tmp[section], num);
      }
  }

  let result = [];
  const sections = Object.keys(tmp);
  for (let i = 0; i < sections.length; i += 1) {
      const section = sections[i];
      const arr = tmp[section];
      result = result.concat(arr);
  }
  return result;
};


const arr = [29, 25, 3, 49, 9, 37, 21, 43];
console.log(`bucket sort for ${[29, 25, 3, 49, 9, 37, 21, 43]}`);
const result = bucketSort([29, 25, 3, 49, 9, 37, 21, 43]);
console.log(`result is ${result}`);
