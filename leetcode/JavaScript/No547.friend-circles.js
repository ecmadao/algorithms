/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are N students in a class.
 * Some of them are friends, while some are not.
 * Their friendship is transitive in nature.
 * For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C.
 * And we defined a friend circle is a group of students who are direct or indirect friends.
 *
 * Given a N*N matrix M representing the friend relationship between students in the class.
 * If M[i][j] = 1, then the ith and jth students are direct friends with each other,
 * otherwise not. And you have to output the total number of friend circles among all the students.
 *
 * Example:
 * Input:
 * [[1,1,0],
 * [1,1,0],
 * [0,0,1]]
 * Output: 2
 * Explanation:The 0th and 1st students are direct friends, so they are in a friend circle.
 * The 2nd student himself is in a friend circle. So return 2.
 *
 * Input:
 * [[1,1,0],
 * [1,1,1],
 * [0,1,1]]
 * Output: 1
 * Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends,
 * so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
 *
 * Note:
 * 1. N is in range [1,200].
 * 2. M[i][i] = 1 for all students.
 * 3. If M[i][j] = 1, then M[j][i] = 1.
 *
 * 基本思路：
 * 如果 M[i][j] 被标记为 1，则
 * 1. 保持 i 不变遍历所有行，每个被标记为 1 的位置都属于一个 Circle
 * 2. 保持 j 不变遍历所有列，每个被标记为 1 的位置也属于一个 Circle
 */

/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
  let count = 0;
  if (!M.length || !M[0].length) return count;
  const rowLength = M[0].length;

  const dfs = (i, j) => {
    if (M[i][j] === 0) return;
    M[i][j] = 0;

    let jS = 0;
    while (jS < rowLength) {
      dfs(i, jS);
      jS += 1;
    }

    let iS = 0;
    while (iS < M.length) {
      dfs(iS, j);
      iS += 1;
    }
  };

  for (let i = 0; i < M.length; i += 1) {
    const N = M[i];
    for (let j = 0; j < rowLength; j += 1) {
      if (N[j] === 1) {
        count += 1;
        dfs(i, j);
      }
    }
  }
  return count;
};

// Test case
// 2
console.log(
  findCircleNum(
    [
      [1,1,0],
      [1,1,0],
      [0,0,1]
    ]
  )
);

// 1
console.log(
  findCircleNum(
    [
      [1,1,0],
      [1,1,1],
      [0,1,1]
    ]
  )
);

// 1
console.log(
  findCircleNum(
    [
      [1,0,0,1],
      [0,1,1,0],
      [0,1,1,1],
      [1,0,1,1]
    ]
  )
);

