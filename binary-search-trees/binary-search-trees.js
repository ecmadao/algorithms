// 已知传入的节点 A 具有左节点和右节点，返回节点值 A 最接近的 A 的子节点
const findClosestNode = (node) => {
  const val = node.node;
  const leftNode = node.leftChild.rightChild
    ? node.leftChild.rightChild
    : node.leftChild;
  const rightNode = node.rightChild.leftChild
    ? node.rightChild.leftChild
    : node.rightChild;

  return (rightNode.node - val) > (leftNode.node - val)
    ? leftNode
    : rightNode;
};

class Node {
  constructor(val, parent = null) {
    this.val = val;
    this.parent = parent;
    this.leftNode = null;
    this.rightNode = null;
  }

  get node() {
    return this.val;
  }

  set node(val) {
    this.val = val;
  }

  get parentNode() {
    return this.parent;
  }

  set parentNode(parent) {
    this.parent = parent;
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
    leftNode.parentNode = this;
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
    rightNode.parentNode = this;
  }

  insert(val) {
    if (this.node < val) {
      // 如果要插入的值大于当前节点值，则寻找其右子节点
      if (this.right === null) {
        this.rightChild = new Node(val, this);
      } else {
        this.rightChild.insert(val);
      }
    } else if (this.node > val) {
      // 如果要插入的值小于当前节点值，则寻找其左子节点
      if (this.left === null) {
        this.leftChild = new Node(val, this);
      } else {
        this.leftChild.insert(val);
      }
    }
  }

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
  }

  // 返回该节点的子节点数目
  get childNodeCount() {
    return (this.left === null ? 0 : 1) + (this.right === null ? 0 : 1);
  }

  // 判断当前节点属于父节点的左子节点还是右子节点
  get isLeftChild() {
    return this.parentNode.leftChild === this;
  }

  get isRightChild() {
    return this.parentNode.rightChild === this;
  }

  destory() {
    this.node = null;
  }

  remove(val) {
    let findedNode = this.find(val);
    if (!findedNode) return;
    const childNodeCount = findedNode.childNodeCount;
    const parentNode = findedNode.parentNode;

    console.log(`findedNode.value: ${findedNode.node}`);

    if (!childNodeCount) {
      // 如果要移除的目标节点没有左右子节点，则直接删除
      findedNode.destory();
      findedNode = null;
    } else if (childNodeCount === 1) {
      // 否则如果只有一个子节点，则把仅有的那个子节点提升
      const childNode = findedNode.left !== null
        ? findedNode.leftChild
        : findedNode.rightChild;
      if (findedNode.isLeftChild) {
        parentNode.leftChild = childNode;
      } else {
        parentNode.rightChild = childNode;
      }
    } else {
      // 如果有两个子节点，则找到最节点需要删除的节点的那个子节点
      const substitute = findClosestNode(findedNode);
      findedNode.node = substitute.node;
      this.remove(substitute);
    }
  }
}

/* ==================================================== */
console.log(' ========== 创建二叉搜索树并插入元素 ========== ');

// 初始化创建一个二叉搜索树，根元素为 10
const bst = new Node(10);
bst.insert(1);
bst.insert(20);
bst.insert(0.1);
bst.insert(2);
bst.insert(11);
bst.insert(9);
bst.insert(17);
bst.insert(5);
bst.insert(1.5);
bst.insert(9.5);
bst.insert(1.7);

console.log(`bst.left: ${bst.left}`); // 1
console.log(`bst.right: ${bst.right}`); // 20

console.log(`bst.leftChild.left: ${bst.leftChild.left}`); // 0.1
console.log(`bst.leftChild.right: ${bst.leftChild.right}`); // 2

console.log(`bst.rightChild.left: ${bst.rightChild.left}`); // 11
console.log(`bst.rightChild.right: ${bst.rightChild.right}`); // null

/* ==================================================== */
console.log('\n ========== 从二叉搜索树中查找元素 ========== ');
console.log('Find node which value is 9:');
let findedNode = bst.find(9);
console.log(`findedNode value: ${findedNode.node}`); // 9
console.log(`findedNode.left: ${findedNode.left}`); // 5
console.log(`findedNode.right: ${findedNode.right}`); // 9.5

console.log('\nFind node which value is 2:');
findedNode = bst.find(2);
console.log(`findedNode value: ${findedNode.node}`); // 2
console.log(`findedNode.left: ${findedNode.left}`); // 1.5
console.log(`findedNode.right: ${findedNode.right}`); // 9

/* ==================================================== */
console.log('\n ========== 从二叉搜索树中删除元素 ========== ');
console.log('删除只有一个子节点的元素：20');
bst.remove(20);
console.log(`bst.left: ${bst.left}`); // 1
console.log(`bst.right: ${bst.right}`); // 11

console.log('删除有两个子节点的元素：2');
bst.remove(2);
console.log(`bst.left: ${bst.left}`); // 1
console.log(`bst.right: ${bst.right}`); // 11
console.log(`bst.leftChild.left: ${bst.leftChild.left}`); // 0.1
console.log(`bst.leftChild.right: ${bst.leftChild.right}`); // 1.7