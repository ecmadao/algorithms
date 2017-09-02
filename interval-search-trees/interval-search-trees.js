class Node {
  constructor(min, max, parentNode = null) {
    this.min = min;
    this.max = max;
    this.parentNode = parentNode;
    this.leftNode = null;
    this.rightNode = null;
  }

  get maxVal() {
    let max = this.max;
    const leftNode = this.leftNode;
    const rightNode = this.rightNode;
    if (leftNode && leftNode.maxVal > max) {
      max = leftNode.maxVal;
    }
    if (rightNode && rightNode.maxVal > max) {
      max = rightNode.maxVal;
    }
    return max;
  }

  get value() {
    return `${this.min} ~ ${this.max}`;
  }

  find(min, max) {
    if (!(min > this.max || max < this.min)) {
      return this;
    }
    if (this.leftNode) {
      if (this.leftNode.maxVal > min) {
        return this.leftNode.find(min, max);
      }
    }
    if (this.rightNode) {
      return this.rightNode.find(min, max);
    }
    return null;
  }

  insert(min, max) {
    if (this.min > min) {
      // go left
      if (!this.leftNode) {
        this.leftNode = new Node(min, max, this);
      } else {
        this.leftNode.insert(min, max);
      }
    } else if (this.min < min) {
      // go right
      if (!this.rightNode) {
        this.rightNode = new Node(min, max, this);
      } else {
        this.rightNode.insert(min, max);
      }
    }
  }
}

const ist = new Node(17, 19);
ist.insert(5, 8);
ist.insert(21, 24);

console.log(`ist.leftNode.value: ${ist.leftNode.value}`);
console.log(`ist.rightNode.value: ${ist.rightNode.value}`);

ist.insert(4, 8);
ist.insert(15, 18);
ist.insert(7, 10);
console.log(`ist.leftNode.leftNode.value: ${ist.leftNode.leftNode.value}`);
console.log(`ist.leftNode.rightNode.value: ${ist.leftNode.rightNode.value}`);
console.log(`ist.leftNode.rightNode.leftNode.value: ${ist.leftNode.rightNode.leftNode.value}`);