/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an absolute path for a file (Unix-style), simplify it.
 *
 * Example:
 * path = "/home/", => "/home"
 * path = "/a/./b/../../c/", => "/c"
 *
 * Note:
 * 1. Did you consider the case where path = "/../"?
 *    In this case, you should return "/".
 * 2. Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
 *    In this case, you should ignore redundant slashes and return "/home/foo".
 *
 * 简化类似 Unix 下的路径。注意处理类似 '/../' 或者 '/home//ecmadao' 的情况
 */

/**
 * 思路：
 * 逐步深入的 folder 栈
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const folders = []
  const pathes = path.split('/')

  for (const p of pathes) {
    if (p === '.' || p === '') continue
    if (p === '..') {
      folders.length && folders.pop()
    } else {
      folders.push(p)
    }
  }

  return '/' + folders.join('/')
}
