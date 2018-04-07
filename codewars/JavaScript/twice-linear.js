/**
 * 4 kyu
 *
 * Desc:
 * Consider a sequence u where u is defined as follows:
 * 1. The number u(0) = 1 is the first one in u.
 * 2. For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
 * 3. There are no other numbers in u.
 *
 * Example:
 * u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
 * 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
 *
 * Task:
 * Given parameter n the function dbl_linear (or dblLinear...)
 * returns the element u(n) of the ordered (with <) sequence u.
 *
 * dbl_linear(10) should return 22
 *
 * Note:
 * Focus attention on efficiency
 */

function dblLinear(n) {
  const arr = [1];
  let i1 = 0;
  let i2 = 0;

  while (arr.length <= n) {
    const n1 = arr[i1] * 2 + 1;
    const n2 = arr[i2] * 3 + 1;

    if (n1 < n2) {
      arr.push(n1);
      i1 += 1;
    } else if (n1 === n2) {
      arr.push(n1);
      i1 += 1;
      i2 += 1;
    } else {
      arr.push(n2);
      i2 += 1;
    }
  }

  return arr.pop();
}