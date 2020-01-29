/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given two integer arrays arr1 and arr2, return the minimum number of operations (possibly zero) needed to make arr1 strictly increasing.
 * In one operation, you can choose two indices 0 <= i < arr1.length and 0 <= j < arr2.length and do the assignment arr1[i] = arr2[j].
 * If there is no way to make arr1 strictly increasing, return -1
 *
 * Example1:
 * Input: arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]
 * Output: 1
 * Explanation: Replace 5 with 2, then arr1 = [1, 2, 3, 6, 7].
 *
 * Example 2:
 * Input: arr1 = [1,5,3,6,7], arr2 = [4,3,1]
 * Output: 2
 * Explanation: Replace 5 with 3 and then replace 3 with 4. arr1 = [1, 3, 4, 6, 7].
 *
 * Example 3:
 * Input: arr1 = [1,5,3,6,7], arr2 = [1,6,3,3]
 * Output: -1
 * Explanation: You can't make arr1 strictly increasing.
 *
 * Constraints:
 * 1. 1 <= arr1.length, arr2.length <= 2000
 * 2. 0 <= arr1[i], arr2[i] <= 10^9
 */


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 * 超时
 */
var makeArrayIncreasing_failed = function(arr1, arr2) {
  arr2 = [...new Set(arr2)].sort((a, b) => a - b)
  const tmp = {}

  const dfs = (i, arr2Index, step) => {
    const key = `${i}-${arr2Index}`
    if (tmp[key] !== -1 && tmp[key] !== undefined && tmp[key] <= step) return tmp[key]
    if (i === arr1.length) {
      tmp[key] = step
      return step
    }

    let tmpStep = -1
    if (
      i > 0 ? arr1[i] > arr1[i - 1] : true
    ) {
      tmpStep = dfs(i + 1, arr2Index, step)

      if (tmpStep === step) {
        tmp[key] = tmpStep
        return tmp[key]
      }
    }

    let j = arr2Index
    while (j < arr2.length) {
      const num = arr2[j]

      if (num === arr1[i]) {
        j += 1
        continue
      }

      if (
        (i > 0 ? num > arr1[i - 1] : true)
      ) {
        const result = dfs(i + 1, j + 1, step + 1)
        if (result !== -1) {
          tmpStep = tmpStep === -1 ? result : Math.min(tmpStep, result)
          if (tmpStep - result === 1) break
        }

        if (result === -1) break
      }
      j += 1
    }

    tmp[key] = tmpStep
    return tmp[key]
  }

  return dfs(0, 0, 0)
}

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
  const arr3 = [...new Set(arr2)].sort((a, b) => a - b)
  const tmp = {}

  const dfs = (i, j, pre) => {
    const key = `${i}-${j}`
    if (tmp[key] !== undefined) return tmp[key]
    if (i === arr1.length) return 0

    let tmpStep = Infinity
    if (
      arr1[i] > pre
    ) {
      tmpStep = Math.min(
        tmpStep,
        dfs(i + 1, 0, arr1[i])
      )
    }

    for (let index = j; index < arr3.length; index += 1) {
      if (arr3[index] > pre) {
        tmpStep = Math.min(
          tmpStep,
          dfs(i + 1, index + 1, arr3[index]) + 1
        )
        break
      }
    }

    tmp[key] = tmpStep
    return tmp[key]
  }

  const result = dfs(0, 0, -Infinity, 0)
  return result === Infinity ? -1 : result
}

// 14
console.log(
  makeArrayIncreasing(
    [9,18,3,8,21,6,7,2,7,28,23,16,33,2,25,14,15],
    [13,2,15,30,31,30,9,10,7,30,31,4,33,10,25,28,19,6,15,6,19,30,25,14,7,28,23,20,1,2,25,16]
  )
)
// 19
console.log(
  makeArrayIncreasing(
    [31,18,1,12,23,14,25,4,17,18,29,28,35,34,19,8,25,6,35]
    [13,10,25,18,3,8,37,20,23,12,9,36,17,22,29,6,1,12,37,6,3,14,37,2]
  )
)
