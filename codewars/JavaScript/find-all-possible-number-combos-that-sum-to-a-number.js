/**
 * 4 kyu
 *
 * Desc:
 * Create a function combos, that accepts a single positive integer num (30 > num > 0)
 * and returns an array of arrays of positive integers that sum to num.
 *
 * Notes:
 * 1. Sub-arrays may or may not have their elements sorted.
 * 2. The order of sub-arrays inside the main array does not matter.
 * 3. For an optimal solution, the following operation should complete within 6000ms.
 *
 * 给定一个数字，返回所有元素之和等于该数字的列表，无视数字排列顺序（不同顺序的列表被视为一样）
 */

/*
 * Test case
 * sumsOfNum(1) should be [[1]]
 * sumsOfNum(2) should be [[1,1], [2]]
 * sumsOfNum(3) should be [[1,1,1],[1,2],[3]]
 * sumsOfNum(4) should be [[1,1,1,1],[1,1,2],[1,3],[2,2],[4]]
 * sumsOfNum(5) should be [[1,1,1,1,1],[1,1,1,2],[1,1,3],[1,2,2],[1,4],[2,3],[5]]
 */

const sumsOfNum = (n, base) => {
  if (base === n) return [[base]];
  const results = [];

  for (let next = base; next <= n - base; next += 1) {
    const combinations = sumsOfNum(n - base, next);
    combinations.forEach((arr) => {
      arr.push(base);
      results.push(arr);
    });
  }
  return results;
};

function combos(n){
  let results = [];

  for (let i = n; i > 0; i -= 1) {
    results = results.concat(sumsOfNum(n, i));
  }
  return results;
}
