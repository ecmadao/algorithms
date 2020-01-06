
/*
 * ======================================================================================
 * Solution1: 递归解全排列
 */

/*
 * 1. 将列表中的每一个元素插入到由剩下元素组成的各个全排列列表的头部
 * 2. 给定列表的第一个元素，插入到剩下元素组成的全排列列表的各个位置
 */

// 注意，该方法没有处理列表中含有相同元素时的情况，即 [1,1] 会被全排列为 [1,1]
const permute = (nums) => {
  if (nums.length === 1) return [[nums[0]]]

  const result = []
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i]
    const remains = [...nums.slice(0, i), ...nums.slice(i + 1)]
    const arrays = permute(remains)
    for (const array of arrays) {
      result.push(
        [num, ...array]
      )
    }
  }
  return result
}


// 利用 set 处理了重复元素的情况
const permute_premium = (nums) => {
  const permute = (nums) => {
    if (nums.length === 1) return [[nums[0]]]
    const cache = new Set()

    const result = []
    for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i]
      if (cache.has(num)) continue
      cache.add(num)
      const remains = [...nums.slice(0, i), ...nums.slice(i + 1)]
      const arrays = permute(remains)
      for (const array of arrays) {
        result.push(
          [num, ...array]
        )
      }
    }
    return result
  }

  return permute(nums)
}

/*
 * ======================================================================================
 * Solution1: 字典序解全排列
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 字典序法:
 * https://zh.wikipedia.org/wiki/%E5%85%A8%E6%8E%92%E5%88%97%E7%94%9F%E6%88%90%E7%AE%97%E6%B3%95#%E5%AD%97%E5%85%B8%E5%BA%8F%E6%B3%95
 * https://blog.csdn.net/u013309870/article/details/68941284
 * https://blog.csdn.net/lemon_tree12138/article/details/50986990
 *
 * 注：没有处理重复元素的情况
 */
var permute = function(nums) {
  nums.sort((a, b) => a - b)
  const results = [[...nums]]

  while (true) {
    let i = nums.length - 1
    while (i >= 1 && nums[i] < nums[i - 1]) {
      i -= 1
    }
    if (i === 0) break

    const index = i - 1
    const tmp = nums[index]
    let j = nums.length - 1

    while (j > index && nums[j] < tmp) {
      j -= 1
    }

    nums[index] = nums[j]
    nums[j] = tmp
    nums = [
      ...nums.slice(0, index + 1),
      ...nums.slice(index + 1).sort((a, b) => a - b)
    ]

    results.push([...nums])
  }

  return results
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 额外处理重复元素
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
  const results = [[...nums]]

  while (true) {
    let i = nums.length - 1
    // 此处和上面的方法处理不一致，为了解决重复元素的问题
    while (i >= 1 && nums[i] <= nums[i - 1]) {
      i -= 1
    }
    if (i === 0) break

    const index = i - 1
    const tmp = nums[index]

    // 此处和上面的方法处理不一致，为了解决重复元素的问题
    let k = i
    let min = Infinity
    for (let j = i; j < nums.length; j += 1) {
      if (nums[j] > tmp && nums[j] <= min) {
        k = j
        min = nums[j]
      }
    }

    nums[index] = nums[k]
    nums[k] = tmp
    nums = [
      ...nums.slice(0, index + 1),
      ...nums.slice(index + 1).sort((a, b) => a - b)
    ]

    results.push([...nums])
  }

  return results
}
