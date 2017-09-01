/*
 * 把 nodeA 的父节点设置为 nodeB 的父节点
 * 1. 确定 nodeA 是其父节点的左子节点还是右子节点
 * 2. 把 nodeA 父节点对应位置的子节点设置为 nodeB
*/
const resetParent = (nodeA, nodeB) => {
  if (nodeA.parentNode) {
    // 我们不知道当前节点是其父节点的左子节点还是右子节点，
    // 因此需要进行判断
    const parentChildPosition = nodeA.isLeftChild
      ? 'leftChild'
      : 'rightChild';
      nodeA.parentNode[parentChildPosition] = nodeB;
      nodeB.parentNode = nodeA.parentNode;
  }
};

// 两个节点相互交换颜色
const resetColor = (nodeA, nodeB) => {
  const targetColor = nodeA.color;
  nodeA.color = nodeB.color;
  nodeB.color = targetColor;
};

const rotateLeft = (node) => {
  // 获取 a 的右子节点 aChildRight
  const targetNode = node.rightChild;

  // 如果 a 还有父节点，则把 aChildRight 作为 a 父节点的右子节点
  // 同时，把 aChildRight 的父节点设置为了 a 的父节点
  resetParent(node, targetNode);
  // 之后，aChildRight 的原左子节点成为 a 的右子节点
  node.rightChild = targetNode.leftChild;
  if (targetNode.leftChild) {
    targetNode.leftChild.parentNode = node;
  }

  targetNode.leftChild = node;
  node.parentNode = targetNode;

  resetColor(targetNode, node);
  return targetNode;
};

const rotateRight = (node) => {
  // 获取 a 的右子节点 aChildLeft
  const targetNode = node.leftChild;

  // 如果 a 还有父节点，则把 aChildLeft 作为 a 父节点的左子节点
  // 同时，把 aChildLeft 的父节点设置为了 a 的父节点
  resetParent(node, targetNode);
  // 之后，aChildRight 的原右子节点成为 a 的左子节点
  node.leftChild = targetNode.rightChild;
  if (targetNode.rightChild) {
    targetNode.rightChild.parentNode = node;
  }

  targetNode.rightChild = node;
  node.parentNode = targetNode;

  resetColor(targetNode, node);
  return targetNode;
};

/*
 * 当一个节点的左右两个子节点都是红节点时，
 * 则将这两个红子节点转换为黑色，同时把它们的父节点转换为红色
*/
const flipColor = (node) => {
  const leftChild = node.leftChild;
  const rightChild = node.rightChild;

  leftChild.color = 'black';
  rightChild.color = 'black';

  if (node.parentNode) {
    node.color = 'red';
  }
};

class Node {
  constructor(options) {
    const {
      val,
      color = 'red',
      parentNode = null,
    } = options;
    this.val = val;
    this.color = color;
    this.leftNode = null;
    this.rightNode = null;
    this.parentNode = parentNode;
  }

  get node() {
    return this.val;
  }

  set node(val) {
    this.val = val;
  }

  // get left child node value
  get left() {
    return this.leftNode ? this.leftNode.node : null;
  }

  // get left child node
  get leftChild() {
    return this.leftNode;
  }

  // set left child node
  set leftChild(leftNode) {
    if (leftNode !== null && this.node < leftNode.node) {
      throw new Error('Left node value should be smaller than root node value!');
    }
    this.leftNode = leftNode;
  }

  // get right child node value
  get right() {
    return this.rightNode ? this.rightNode.node : null;
  }

  // get right child node
  get rightChild() {
    return this.rightNode;
  }

  // set right child node
  set rightChild(rightNode) {
    if (rightNode !== null && this.node > rightNode.node) {
      throw new Error('Right node value should be bigger than root node value!');
    }
    this.rightNode = rightNode;
  }

  // 判断当前节点属于父节点的左子节点还是右子节点
  get isLeftChild() {
    return this.parentNode.leftChild === this;
  }

  get isRightChild() {
    return this.parentNode.rightChild === this;
  }

  get hasRedLeftChild() {
    return this.leftChild && this.leftChild.color === 'red';
  }

  get hasRedRightChild() {
    return this.rightChild && this.rightChild.color === 'red';
  }

  // 和普通二叉搜索树的 find 方法一样
  find(val) {
    // 若 target === 根节点的值，则直接查找成功
    if (this.node === val) return this;

    if (val < this.node) {
      // 若 target < 根节点的值，则搜索左子节点
      if (this.left === null) return null;
      return this.leftChild.find(val);
    } else if (val > this.node) {
      // 若 target > 根节点的值，则搜索右子节点
      if (this.right === null) return null;
      return this.rightChild.find(val);
    }
    return null;
  }

  insert(val) {
    if (this.node < val) {
      if (this.rightChild === null) {
        this.rightChild = new Node({
          val,
          color: 'red',
          parentNode: this,
        });
      } else {
        this.rightChild.insert(val);
      }
    } else if (this.node > val) {
      if (this.leftChild === null) {
        this.leftChild = new Node({
          val,
          color: 'red',
          parentNode: this,
        });
      } else {
        this.leftChild.insert(val);
      }
    }

    // 插入完成之后从底部开始检查平衡
    this.checkBalance();
  }

  checkBalance() {
    let targetNode = this;
    targetNode.flipColor();
    // 检查是否需要左旋
    if (targetNode.hasRedRightChild) {
      targetNode = rotateLeft(targetNode);
    }
    // 因为左旋之后可能会出现左左的情况，检查是否需要右旋
    if (targetNode.hasRedLeftChild && targetNode.color === 'red') {
      targetNode = rotateRight(targetNode.parentNode);
    }
    targetNode.flipColor();
  }

  flipColor() {
    if (this.hasRedLeftChild && this.hasRedRightChild) {
      flipColor(this);
    }
  }
}

const bst = new Node({
  val: 10,
  color: 'black'
});

console.log('\nInsert 5 15');
bst.insert(5);
bst.insert(15);
console.log(`bst.left: ${bst.left}, bst.leftColor: ${bst.leftChild.color}`);
console.log(`bst.right: ${bst.right}, bst.rightColor: ${bst.rightChild.color}`);

console.log('\nInsert 7');
bst.insert(7);
console.log(`bst.left: ${bst.left}, bst.leftColor: ${bst.leftChild.color}`);
console.log(`bst.leftChild.left: ${bst.leftChild.left}, bst.left.leftChildColor: ${bst.leftChild.leftChild.color}`);

console.log('\nInsert 6');
bst.insert(6);
console.log(`bst.left: ${bst.left}, bst.leftColor: ${bst.leftChild.color}`);
console.log(`bst.leftChild.left: ${bst.leftChild.left}, bst.left.leftChildColor: ${bst.leftChild.leftChild.color}`);