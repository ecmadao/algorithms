/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
 * Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
 * Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
 *
 * Example 1:
 * Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * Output: [2,2,2,1,4,3,3,9,6,7,19]
 *
 * Constraints:
 * 1. arr1.length, arr2.length <= 1000
 * 2. 0 <= arr1[i], arr2[i] <= 1000
 * 3. Each arr2[i] is distinct.
 * 4. Each arr2[i] is in arr1
 *
 * 给你两个数组，arr1 和 arr2，
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const indexes = arr1.reduce((map, num, index) => {
    if (!map[num]) map[num] = []
    map[num].push(index)
    return map
  }, {})

  const result = []
  for (const num of arr2) {
    for (const index of indexes[num]) {
      result.push(num)
    }
    delete indexes[num]
  }

  result.push(
    ...Object.values(indexes).reduce((list, indexs) => {
      list.push(...indexs.map(i => arr1[i]))
      return list
    }, []).sort((n1, n2) => n1 - n2)
  )
  return result
}
