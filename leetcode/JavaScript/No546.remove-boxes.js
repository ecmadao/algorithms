/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given several boxes with different colors represented by different positive numbers.
 * You may experience several rounds to remove boxes until there is no box left.
 * Each time you can choose some continuous boxes with the same color (composed of k boxes, k >= 1), remove them and get k*k points.
 * Find the maximum points you can get.
 *
 * Example:
 * Input:
 * [1, 3, 2, 2, 2, 3, 4, 3, 1]
 *
 * Output:
 * 23
 *
 * Explanation:
 * [1, 3, 2, 2, 2, 3, 4, 3, 1]
 * ----> [1, 3, 3, 4, 3, 1] (3*3=9 points)
 * ----> [1, 3, 3, 3, 1] (1*1=1 points)
 * ----> [1, 1] (3*3=9 points)
 * ----> [] (2*2=4 points)
 *
 * Note: The number of boxes n would not exceed 100.
 */

/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
  const tmp = {};
  const dfs = (start, end, len) => {
    if (start > end) return 0;
    const key = `${start}-${end}-${len}`;
    if (tmp[key]) return tmp[key];

    while (start < end && boxes[start] === boxes[start + 1]) {
      start += 1;
      len += 1;
    }

    let max = Math.pow(len + 1, 2) + dfs(start + 1, end, 0);
    for (let i = start + 1; i <= end; i += 1) {
      if (boxes[i] === boxes[start]) {
        max = Math.max(
          max,
          dfs(start + 1, i - 1, 0) + dfs(i, end, len + 1)
        );
      }
    }
    tmp[key] = max;
    return max;
  };

  return dfs(0, boxes.length - 1, 0);
};

// Test case
console.log(removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1])); // 23