/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are asked to design a file system which provides two functions:
 * 1. createPath(path, value): Creates a new path and associates a value to it if possible and returns True. Returns False if the path already exists or its parent path doesn't exist.
 * 2. get(path): Returns the value associated with a path or returns -1 if the path doesn't exist.
 * The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters.
 * For example, /leetcode and /leetcode/problems are valid paths while an empty string and / are not.
 * Implement the two functions.
 * Please refer to the examples for clarifications.
 *
 * Example 1:
 * Input:
 * ["FileSystem","createPath","get"]
 * [[],["/a",1],["/a"]]
 * Output:
 * [null,true,1]
 * Explanation:
 * FileSystem fileSystem = new FileSystem();
 * fileSystem.createPath("/a", 1); // return true
 * fileSystem.get("/a"); // return 1
 *
 * Example 2:
 * Input:
 * ["FileSystem","createPath","createPath","get","createPath","get"]
 * [[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]]
 * Output:
 * [null,true,true,2,false,-1]
 * Explanation:
 * FileSystem fileSystem = new FileSystem();
 * fileSystem.createPath("/leet", 1); // return true
 * fileSystem.createPath("/leet/code", 2); // return true
 * fileSystem.get("/leet/code"); // return 2
 * fileSystem.createPath("/c/d", 1); // return false because the parent path "/c" doesn't exist.
 * fileSystem.get("/c"); // return -1 because this path doesn't exist.
 *
 * Constraints:
 * 1. The number of calls to the two functions is less than or equal to 10^4 in total.
 * 2. 2 <= path.length <= 100
 * 3. 1 <= value <= 10^9
 *
 * NOTE:
 * create method has been changed on August 29, 2019 to createPath. Please reset to default code definition to get new method signature
 *
 * 你需要设计一个能提供下面两个函数的文件系统：
 * 1. create(path, value): 创建一个新的路径，并尽可能将值 value 与路径 path 关联，然后返回 True。如果路径已经存在或者路径的父路径不存在，则返回 False。
 * 2. get(path): 返回与路径关联的值。如果路径不存在，则返回 -1。
 * “路径” 是由一个或多个符合下述格式的字符串连接起来形成的：在 / 后跟着一个或多个小写英文字母。
 * 例如 /leetcode 和 /leetcode/problems 都是有效的路径，但空字符串和 / 不是有效的路径
 */

var FileSystem = function() {
  this.tree = {
    val: null,
    next: {}
  }
  this.map = new Map()
};

/**
* @param {string} path
* @param {number} value
* @return {boolean}
*/
FileSystem.prototype.createPath = function(path, value) {
  if (this.map.has(path)) return false
  const pathes = path.split('/')
  pathes.shift()
  if (!pathes.length) return false

  let node = this.tree
  while (pathes.length) {
    const folder = pathes.shift()
    if (!node.next[folder]) {
      if (pathes.length) return false
      node.next[folder] = {
        val: folder,
        next: {}
      }
    }
    node = node.next[folder]
  }
  this.map.set(path, value)
  return true
};

/**
* @param {string} path
* @return {number}
*/
FileSystem.prototype.get = function(path) {
  if (!this.map.has(path)) return -1
  return this.map.get(path)
};

/**
* Your FileSystem object will be instantiated and called as such:
* var obj = new FileSystem()
* var param_1 = obj.createPath(path,value)
* var param_2 = obj.get(path)
*/