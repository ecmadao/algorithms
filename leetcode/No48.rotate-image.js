/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given an n x n 2D matrix representing an image.
 * Rotate the image by 90 degrees (clockwise).
 *
 * Note:
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 *
 * Example:
 * Given input matrix =
 * [
 *    [1,2,3],
 *    [4,5,6],
 *    [7,8,9]
 * ],
 * rotate the input matrix in-place such that it becomes:
 * [
 *    [7,4,1],
 *    [8,5,2],
 *    [9,6,3]
 * ]
 *
 * Given input matrix =
 * [
 *    [ 5, 1, 9,11],
 *    [ 2, 4, 8,10],
 *    [13, 3, 6, 7],
 *    [15,14,12,16]
 * ],
 * rotate the input matrix in-place such that it becomes:
 * [
 *    [15,13, 2, 5],
 *    [14, 3, 4, 1],
 *    [12, 6, 8, 9],
 *    [16, 7,10,11]
 * ]
 *
 * 顺时针 90° 旋转矩阵，且不能创建新的数组或矩阵，必须原地修改
 */

/**
 * 思路：
 * 找下规律，你可以发现，顺时针旋转 90° 以后，每排的元素到了对应的列上
 * 比如一个 n * n 的矩阵，row = 0 的第一行数组，旋转以后到了 n - 1 - row 列上
 * 同时，第一行数组的各个元素，即 index = 0,1,2...，转换到了对应的行上
 * 由此我们可以按照这个规律进行旋转。然后需要注意，因为不能创建新数组，而每行依次旋转的时候，必须对原数组有个缓存，
 * 因此，我们不直接在原数组上进行修改，而是正好将其向后移动 n 个索引，
 * 即，row = 0 的第一行数组，旋转以后到了 2n - 1 - row 列上，
 * 然后各行全部旋转以后，每行数组都只保留 index = n 之后的元素
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var n = matrix.length;
  // row
  for (var r = 0; r < n; r += 1) {
    var row = matrix[r];
    // row r will go to column n - 1 -r
    // but to temp raw value, we put theme to 2n - 1 - r
    var column = 2 * n - 1 - r;
    for (var c = 0; c < n; c += 1) {
      matrix[c][column] = row[c];
    }
  }

  for (var r = 0; r < n; r += 1) {
    var row = matrix[r];
    matrix[r] = row.slice(n);
  }
};