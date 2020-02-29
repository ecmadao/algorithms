
var Node = function(val) {
  this.val = val
  this.next = null
  this.prev = null
  this.down = null
}

var Skiplist = function(maxLevel = 10) {
  this.level = maxLevel
  this.head = null
};

Skiplist.prototype.find = function(target) {
  let node = this.head
  let result = null
  while (node) {
    if (node.val === target) {
      result = node
      break
    } else if (node.val < target) {
      while (node.next && node.val < target) node = node.next
      if (node.val !== target) node = node.down
    } else {
      while (node.prev && node.val > target) node = node.prev
      if (node.val !== target) node = node.down
    }
  }

  return result
}

/**
* @param {number} target
* @return {boolean}
*/
Skiplist.prototype.search = function(target) {
  const result = this.find(target)
  return result !== null
};

/**
* @param {number} num
* @return {void}
*/
Skiplist.prototype.add = function(num) {
  let node = this.head
  const stack = []
  while (node) {
    if (node.val <= num) {
      while (node.next && node.val <= num) node = node.next
    } else {
      while (node.prev && node.val >= num) node = node.prev
    }
    stack.push(node)
    node = node.down
  }

  let down = null
  let level = 1
  while (level === 1 || (Math.random() < 0.25 && level <= this.level)) {
    const newNode = new Node(num)
    newNode.down = down
    down = newNode
    if (stack.length) {
      node = stack.pop()

      if (node.val <= num) {
        const rawNext = node.next
        node.next = newNode
        newNode.prev = node
        newNode.next = rawNext
        if (rawNext) rawNext.prev = newNode
      } else {
        const rawPrev = node.prev
        node.prev = newNode
        newNode.next = node
        newNode.prev = rawPrev
        if (rawPrev) rawPrev.next = newNode
      }
    } else {
      this.head = newNode
      break
    }
    level += 1
  }

  // debug
  console.log(' ================================ ')
  const nums = []
  let test = this.head
  let l = 1
  while (test) {
      const cache = []
      while (test.prev) test = test.prev
      while (test.next) { cache.push(test.val); test = test.next }
      cache.push(test.val)
      console.log(`level: ${l}, nums [${cache}]`)
      nums.push(cache)
      test = test.down
      l += 1
  }
  console.log(`after add: ${num}, ${JSON.stringify(nums)}`)
};

/**
* @param {number} num
* @return {boolean}
*/
Skiplist.prototype.erase = function(num) {
  let node = this.find(num)
  if (!node) return false

  const isHead = node === this.head
  if (isHead) this.head = null

  while (node) {
    const prev = node.prev
    const next = node.next
    if (prev) prev.next = next
    if (next) next.prev = prev
    if (!this.head) this.head = prev || next
    node = node.down
  }

  return true
};
