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
 * 构建一个树的结构，每个节点保留其当前目录名称和父节点
 * 遍历输入的路径，获取到最后的结果节点，然后向上遍历，最后得到合法的最简洁的路径
 */

var Node = function(folder, father) {
  this.folder = folder;
  this.father = father;
};

/**
* @param {string} path
* @return {string}
*/
var simplifyPath = function(path) {
  var node = new Node('', null);
  var paths = path.split('/');

  for (var i = 0; i < paths.length; i += 1) {
    var p = paths[i];
    if (!p || p === '.') continue;
    if (p === '..') {
      if (!node.father) continue;
      node = node.father;
    } else {
      node = new Node(p, node);
    }
  }

  var result = '';
  while(node.father) {
    result = result ? node.folder + '/' + result : node.folder;
    node = node.father;
  }
  return '/' + result;
};
