
const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] > nums[j]) {
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
      }
    }
  }
  return nums
}

const result = bubbleSort([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(`bubbleSort result ${result}`); // bubbleSort result 1,2,3,4,5,6,7,8,9,10,11
