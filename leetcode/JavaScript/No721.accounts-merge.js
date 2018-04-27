/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list accounts, each element accounts[i] is a list of strings,
 * where the first element accounts[i][0] is a name,
 * and the rest of the elements are emails representing emails of the account.
 *
 * Now, we would like to merge these accounts.
 * Two accounts definitely belong to the same person if there is some email that is common to both accounts.
 * Note that even if two accounts have the same name,
 * they may belong to different people as people could have the same name.
 * A person can have any number of accounts initially,
 * but all of their accounts definitely have the same name.
 *
 * After merging the accounts, return the accounts in the following format:
 *  the first element of each account is the name,
 *  and the rest of the elements are emails in sorted order.
 *  The accounts themselves can be returned in any order.
 *
 * 给一组账户，每个账户由一个数组组成。数组的首位代表用户名，其他位上的值则代表该用户所拥有的邮箱。
 * 在多组账户之间，如果有邮箱重复，且用户名一样，则这些都属于同一个账户。
 * 而如果没有任意的邮箱重叠，则即便用户名一样，也是两个账户。
 * 现要求把这些账户合并，将属于同一个用户的邮箱归属到一个用户名下面。用户名后面的邮箱按照字母递增的顺序排列
 */


var searchInsert = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var index = null;

  while (left <= right) {
    var midIndex = Math.floor((left + right) / 2);
    var mid = nums[midIndex];
    if (mid === target) {
      index = midIndex;
      break;
    } else if (mid > target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }

  if (index === null) {
    left -= 1;
    var num = nums[left];
    if (num > target) {
      if (left - 1 < 0 || nums[left - 1] < target) {
        index = left;
      }
    } else {
      if (left + 1 > nums.length -1 || nums[left + 1] > target) {
        index = left + 1;
      }
    }
  }

  return index;
};

const insert = (arr, val) => {
  const index = searchInsert(arr, val);
  const r = arr.slice(0, index);
  r.push(val);
  return r.concat(arr.slice(index));
};

class Graph {
  constructor(name) {
    this.adj = {};
    this.name = name;
  }

  link(p1, p2) {
    if (!this.adj[p1]) this.adj[p1] = [];
    if (!this.adj[p2]) this.adj[p2] = [];

    this.adj[p1].push(p2);
    this.adj[p2].push(p1);
  }

  init(p) {
    if (!this.adj[p]) this.adj[p] = [];
  }
}

class DFS {
  constructor(graph) {
    this.marked = {};
    this.results = [];

    for (const point of Object.keys(graph.adj)) {
      if (!this.marked[point]) {
        this.points = [];
        this.dfs(graph, point);
        this.points.unshift(graph.name);
        this.results.push([...this.points]);
      }
    }
  }

  dfs(graph, point) {
    this.marked[point] = true;
    this.points = insert(this.points, point);

    for (const p of graph.adj[point]) {
      if (!this.marked[p]) {
        this.dfs(graph, p);
      }
    }
  }
}

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const tmp = {};
  const results = [];

  for (account of accounts) {
    const user = account[0];
    if (!tmp[user]) tmp[user] = new Graph(user);

    for (let i = 1; i < account.length; i += 1) {
      const email = account[i];

      if (i > 1) {
        tmp[user].link(account[i - 1], email);
      } else {
        tmp[user].init(email);
      }
    }
  }

  for (const user of Object.keys(tmp)) {
    const dfs = new DFS(tmp[user]);
    results.push(...dfs.results);
  }

  return results;
};
