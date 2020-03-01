

class Heap {
  constructor() {
    this.queue = []
  }

  push(val) {
    this.queue.push(val)
    this.sortWithFather(this.queue.length)
  }

  size() {
    return this.queue.length
  }

  shift() {
    if (!this.queue.length) return null
    if (this.queue.length === 1) return this.queue.pop()

    const last = this.queue[this.queue.length - 1]
    this.queue[this.queue.length - 1] = this.queue[0]
    this.queue[0] = last
    const result = this.queue.pop()
    this.sortWithChildren(1)

    return result
  }

  sortWithFather(cPos) {
    let fPos = Math.floor(cPos / 2)
    const target = this.queue[cPos - 1]

    while (cPos > 1 && target < this.queue[fPos - 1]) {
      this.queue[cPos - 1] = this.queue[fPos - 1]
      cPos = fPos
      fPos = Math.floor(cPos / 2)
    }

    this.queue[cPos - 1] = target
  }

  sortWithChildren(fPos) {
    // 左子节点
    let cPos = fPos * 2
    const target = this.queue[fPos - 1]

    while (cPos - 1 < this.queue.length) {
      // 如果存在右子节点，且右子节点小于左子节点
      if (cPos < this.queue.length && this.queue[cPos - 1] > this.queue[cPos]) {
        cPos += 1
      }

      if (this.queue[cPos - 1] >= target) break
      this.queue[fPos - 1] = this.queue[cPos - 1]

      fPos = cPos
      cPos = fPos * 2
      
    }

    this.queue[fPos - 1] = target
  }
}

const heap = new Heap()

for (const num of [99, 1, 17, 0]) {
  heap.push(num)
}
for (let i = 0; i < 4; i += 1) {
  heap.push(
    Math.floor(Math.random() * 100)
  )
}

console.log(`[${heap.queue}]`)

while (heap.size()) {
  console.log(heap.shift())
}
