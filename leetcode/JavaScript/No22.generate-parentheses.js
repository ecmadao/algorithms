/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * Example:
 * given n = 3, a solution set is:
 * [
 *    "((()))",
 *    "(()())",
 *    "(())()",
 *    "()(())",
 *    "()()()"
 * ]
 *
 * 给一个数字，生成相应对数的括号组合，并且要求组合合法
 * 例如，n = 2 时，合法的括号组合为
 * ()(), (())
 */

/*
 * 思路：
 * 如果要求组合合法，则面对没有闭合的 m 个 (，其右侧一定有 m 个 )
 * 我们可以换一种思路，将题目转换为在 n 个 ( 中插入任意个 ) 的组合
 * 比如，n = 3 时，就是在 (*(*(* 的星号位置上插入数个 )，且各个位置上 ) 的数目受到限制：
 * 1. 假设每个 * 依次为第一层，第二层。。。
 * 2. 每层 ) 的数目不能大于其层数
 * 3. 最后一层不能为空
 * 4. 当前面总共插入 x 个 ) 后，在最后一层（第 n 层）一定是插入 n - x 个 )
 *
 * 然后就是用什么数据结构来实现的问题了。
 */

/**
 * ============== 方法一 ==============
 * 为了保证算法的销量和可读性，我们可以构建一个树，树的第 n 层上的所有节点，代表上述第 n 个 * 所在位置的所有可能取值
 * 各个节点有 childs 属性，代表以当前节点的取值为基础，之后下一个 * 节点的所有可能取值
 */
function Node(val) {
  this.val = val;
  this.childs = [];
}

var buildTree = function(currentLayer, layerCount, used) {
  var nodeChilds = [];
  var max = currentLayer - used;
  if (max <= 0) return nodeChilds;
  if (currentLayer === layerCount) return [new Node(max)];

  for (var i = 0; i <= max; i += 1) {
    var node = new Node(i);
    var childs = buildTree(currentLayer + 1, layerCount, used + i);
    node.childs = childs;
    nodeChilds.push(node);
  }
  return nodeChilds;
};

var getString = function(count) {
  return new Array(count).fill(')').join('');
};

var readTree = function(node) {
  var val = node.val;
  var childs = node.childs;

  if (!childs || !childs.length) return ['(' + getString(val)];

  var values = [];
  for (var i = 0; i < childs.length; i += 1) {
    values.push(...readTree(childs[i]));
  }
  return values.map(item => '(' + getString(val) + item);
};

/**
* @param {number} n
* @return {string[]}
*/
var generateParenthesis_solution_1 = function(n) {
  var nodes = buildTree(1, n, 0);
  var results = [];

  for (var i = 0; i < nodes.length; i += 1) {
    results.push(...readTree(nodes[i]));
  }
  return results;
};

/**
 * ============== 方法二 ==============
 * 运用递归
 */
var generateParenthesis_solution_2 = function(n) {
  const result = [];
  const buildParenthesis = (prefix, maxLeft, maxRight, usedRight) => {
    if (maxLeft === n) {
      result.push(prefix + "(" + ")".repeat(maxRight));
    } else {
      for (let i = 0; i <= maxRight; i += 1) {
        buildParenthesis(
          prefix + "(" + ")".repeat(i),
          maxLeft + 1,
          maxLeft + 1 - i - usedRight,
          usedRight + i
        );
      }
    }
  }
  buildParenthesis("", 1, 1, 0);
  return result;
};
