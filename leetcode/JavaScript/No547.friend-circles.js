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
 */

/**
 * @param {number[][]} M
 * @return {number}
 *
 * 基本思路 - DFS:
 * 如果 M[i][j] 被标记为 1，则
 * 1. 保持 i 不变遍历所有行，每个被标记为 1 的位置都属于一个 Circle
 * 2. 保持 j 不变遍历所有列，每个被标记为 1 的位置也属于一个 Circle
 */

var findCircleNum_dfs = function(M) {
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

/**
 * @param {number[][]} M
 * @return {number}
 *
 * 基本思路 - Union Find:
 * 对于每个 i,j (M[i][j] === 1),
 * 寻找 i,i 根节点；寻找 j,i 根节点，链接在一起
 * 寻找 j,j 根节点，链接在一起
 * 期间要记录新根节点数，删除重复的旧根节点数
 */
const LinkNode = function(dict = {}) {
  const tmp = dict
  this.count = 0

  const findRoot = (i, j) => {
    let result = `${i}.${j}`

    while (result && tmp[result]) {
      if (result === tmp[result]) break
      result = tmp[result]
    }
    return result
  }

  this.link = (i, j) => {
    let r1 = findRoot(i, i)
    let r2 = findRoot(j, i)

    if (!tmp[r1]) {
      tmp[r1] = r1
      this.count += 1
    }
    if (!tmp[r2]) {
      tmp[r2] = r2
      this.count += 1
    }
    if (r1 !== r2) {
      tmp[r2] = r1
      this.count -= 1
    }

    let r3 = findRoot(j, j)
    if (!tmp[r3]) {
      tmp[r3] = r3
      this.count += 1
    }
    if (r1 !== r3) {
      tmp[r3] = r1
      this.count -= 1
    }
  }
}

/**
* @param {number[][]} M
* @return {number}
*/
var findCircleNum_uf = function(M) {
  const linkNode = new LinkNode({})

  for (let i = 0; i < M.length; i += 1) {
    const row = M[i]
    for (let j = 0; j < row.length; j += 1) {
      if (row[j] !== 1) continue
      linkNode.link(i, j)
    }
  }

  return linkNode.count
}

// Test case
// 1
console.log(
  findCircleNum(
      [[1,0,0,1],
       [0,1,1,0],
       [0,1,1,1],
       [1,0,1,1]]
  )
)
// 过程
// 0,0 -> 0,0
// 0,3
    // 0,0 -> 0,0
    // 3,3 -> 0,0
    // 3,0 -> 0,0
// 1,1 -> 1,1
// 1,2
    // 1,1 -> 1,1
    // 2,2 -> 1,1
    // 2,1 -> 1,1
// 2,1 -> 1,1
// 2,2 -> 1,1
// 2,3
    // 2,2 -> 1,1
    // 3,3 -> 0,0 -> 1,1
    // 3,2 -> 1,1
// 3,0 -> 0,0
// 3,2 -> 1,1 -> 0,0
// 3,3 -> 0,0