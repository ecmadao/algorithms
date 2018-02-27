/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string s1,
 * we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.
 * Below is one possible representation of s1 = "great":
 *     great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
 *
 * To scramble the string, we may choose any non-leaf node and swap its two children.
 * For example, if we choose the node "gr" and swap its two children,
 * it produces a scrambled string "rgeat".
 *     rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
 *
 * We say that "rgeat" is a scrambled string of "great".
 * Similarly, if we continue to swap the children of nodes "eat" and "at",
 * it produces a scrambled string "rgtae".
 *     rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
 *
 * We say that "rgtae" is a scrambled string of "great".
 * Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.
 *
 * 将一个字符串以二叉树的形式表示，然后交互它的某节点的两个子节点，得到其“爬行字符串”（scrambled string）
 * 例如，great 和 rgeat，是 gr 节点下的 g 和 r 向交换得到的。
 * 现给出两个字符串，判断它们是否互为爬行字符串。
 *
 * 对于两个爬行字符串 s1, s2，在 s1 上一定存在某点，将其分为两段 s11, s12，对应的，s2 上会存在 s21 和 s22（s2 存在两种情况：从头截取和从尾截取）
 * 则 s11 和 s21 互为爬行字符串，s12 和 s22 互为爬行字符串
 */

const sortStr = s => s.split('').sort().join('');

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;
  if (sortStr(s1) !== sortStr(s2)) return false;

  for (let i = 1; i < s1.length; i += 1) {
    const s11 = s1.slice(0, i);
    const s12 = s1.slice(i);
    let s21 = s2.slice(0, i);
    let s22 = s2.slice(i);

    if (isScramble(s11, s21) && isScramble(s12, s22)) return true;
    s21 = s2.slice(s2.length - i);
    s22 = s2.slice(0, s2.length - i);
    if (isScramble(s11, s21) && isScramble(s12, s22)) return true;
  }
  return false;
};