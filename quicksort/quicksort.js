const less = (a, b) => a - b <= 0;

const quickSort = (nums, start = null, end = null) => {
  if (start === null) start = 0
  if (end === null) end = array.length - 1
  if (end <= start) return nums

  // 基准值为起始值
  const base = nums[start]

  let i = start
  let j = end

  while (i < j) {
    // 如果右侧 j 对应的值大于基准值，则继续前进
    while (base <= nums[j] && j > i) j -= 1
    // 如果左侧 i 对应的值小于基准值，则继续前进
    while (base >= nums[i] && i < j) i += 1

    if (i >= j) break
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }

  nums[start] = nums[i]
  nums[i] = base

  quickSort(nums, start, i - 1)
  quickSort(nums, i + 1, end)

  return nums
}

const array = [3, 10, 9, 8, 7, 6, 5, 4, 11, 2, 1, 12, 13, 0, 21, 20, 19, 22, 18];
console.log(
  quicksort(array)
); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 21, 22]