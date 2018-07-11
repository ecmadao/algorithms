/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value.
 * If it is a null node, we record using a sentinel value such as #.
 *
 *      _9_
       /   \
      3     2
     / \   / \
    4   1 #  6
   / \ / \   / \
   # # # #   # #

 * For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.
 * Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree.
 * Find an algorithm without reconstructing the tree.
 *
 * Each comma separated value in the string must be either an integer or a character '#' representing null pointer.
 * You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".
 *
 * Example:
 * Input: "9,3,4,#,#,1,#,#,2,#,6,#,#"
 * Output: true
 *
 * Input: "1,#"
 * Output: false
 *
 * Input: "9,#,#,1"
 * Output: false
 */

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  if (!preorder) return true;
  const sections = preorder.split(',');

  const check = (index) => {
    if (index >= sections.length) return false;
    if (sections[index] === '#') return index + 1;

    let next;
    next = check(index + 1);
    if (!next || next >= sections.length) return false;
    next = check(next);
    if (!next) return false;
    return next;
  };

  const result = check(0);
  return result === false ? false : result === sections.length;
};

// Test case
console.log(isValidSerialization("9,3,4,#,1,#,#,2,#,6,#,#")); // false
console.log(isValidSerialization("9,3,4,#,1,#,#,2,#,6,#,#,#")); // true
console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")); // true
console.log(isValidSerialization("9,#,#,1")); // false
console.log(isValidSerialization("1,#")); // false
