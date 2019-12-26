
var Tree = function(val) {
  this.val = val
  this.texts = new Set()
  this.next = {}
}

var buildTree = function(text, key, root) {
  let i = 0

  while (i < text.length) {
    let cur = root
    for (let j = i; j < text.length; j += 1) {
      const str = text[j]
      if (!cur.next[str]) {
        cur.next[str] = new Tree(str)
      }
      cur = cur.next[str]
      cur.texts.add(key)
    }

    i += 1
  }
}

const getValidatePathLength = (tree, filter) => {
  return 1 + Math.max(
    ...filter(tree).map(
      next => getValidatePathLength(next, filter)
    ),
    0
  )
}

/**
* @param {string[]} texts
* @return {number}
*/
var longestCommonSubString = function(...texts) {
  const tree = new Tree()

  for (let i = 0; i < texts.length; i += 1) {
    buildTree(texts[i], i, tree)
  }

  const filter = node => Object.values(node.next).filter(n => n.texts.size === texts.length)

  return Math.max(
    ...filter(tree).map(
      node => getValidatePathLength(node, filter)
    ),
    0
  )
}

// 2
console.log(
  longestCommonSubString('ABAB', 'BABA', 'ABBA')
)
// 0
console.log(
  longestCommonSubString('abc', 'def')
)
// 3
console.log(
  longestCommonSubString('abc', 'abc')
)
