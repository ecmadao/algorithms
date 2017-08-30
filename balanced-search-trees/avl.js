/*
 * ATTENTION
 * 在改变节点的父节点、子节点时，是一个双向的过程
 * 已设置 A 节点的左子节点为 B 为例，
 * 既需要把 A 节点的 leftChild 设置为 B，也需要把 B 的 parent 设置为 A
*/

/*
 * 左旋，应对右右失衡
 * 1. 传入失衡的节点 a
 * 2. 获取 a 的右子节点 aChildRight
 * 3. 把 aChildRight 提升到 a 的位置
 *    1. a 的父节点成为 aChildRight 的父节点
 *    2. a 成为 aChildRight 的左子节点
 * 4. aChildRight 的原左子节点成为 a 的右子节点
 *    1. a 的右子节点为 aChildRight 的原左子节点
 *    2. aChildRight 的原左子节点的父节点改为 a
 * 5. aChildRight 的右子节点还是其右子节点
*/
const leftRotate = (node) => {
  // 获取 a 的右子节点 aChildRight
  const targetNode = node.rightChild;

  // 如果 a 还有父节点，则把 aChildRight 作为 a 父节点的右子节点
  // 同时，把 aChildRight 的父节点设置为了 a 的父节点
  if (node.parentNode) {
    // 为了能够让这个方法更通用，我们假设不知道当前节点是其父节点的左子节点还是右子节点，
    // 因此需要进行判断
    const parentChildPosition = node.isLeftChild
      ? 'leftChild'
      : 'rightChild';
    node.parentNode[parentChildPosition] = targetNode;
    targetNode.parentNode = node.parentNode;
  }
  // 之后，aChildRight 的原左子节点成为 a 的右子节点
  node.rightChild = targetNode.leftChild;
  if (targetNode.leftChild) {
    targetNode.leftChild.parentNode = node;
  }

  targetNode.leftChild = node;
  node.parentNode = targetNode;
};

/*
 * 右旋，应对左左失衡
 * 1. 传入失衡的节点 a
 * 2. 获取 a 的左子节点 aChildLeft
 * 3. 把 aChildLeft 提升到 a 的位置
 *    1. a 的父节点成为 aChildLeft 的父节点
 *    2. a 成为 aChildLeft 的右子节点
 * 4. aChildLeft 的原右子节点成为 a 的左子节点
 * 5. aChildRight 的左子节点还是其左子节点
*/
const rightRotate = (node) => {
// 获取 a 的右子节点 aChildLeft
const targetNode = node.leftChild;

  // 如果 a 还有父节点，则把 aChildLeft 作为 a 父节点的左子节点
  // 同时，把 aChildLeft 的父节点设置为了 a 的父节点
  if (node.parentNode) {
    // 为了能够让这个方法更通用，我们假设不知道当前节点是其父节点的左子节点还是右子节点，
    // 因此需要进行判断
    const parentChildPosition = node.isLeftChild
    ? 'leftChild'
    : 'rightChild';
    node.parentNode[parentChildPosition] = targetNode;
    targetNode.parentNode = node.parentNode;
  }
  // 之后，aChildRight 的原右子节点成为 a 的左子节点
  node.leftChild = targetNode.rightChild;
  if (targetNode.rightChild) {
    targetNode.rightChild.parentNode = node;
  }

  targetNode.rightChild = node;
  node.parentNode = targetNode;
};

/*
 * 先左旋再右旋，应对左右失衡
 * 输入失衡的节点
*/
const lrRotate = (node) => {
  leftRotate(node.leftChild);
  rightRotate(node);
};

/*
 * 先右旋再左旋，应对右左失衡
*/
const rlRotate = (node) => {
  rightRotate(node.rightChild);
  leftRotate(node);
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

  // 插入的方法大体上和二叉搜索树一样，唯一不同的是需要在插入之后重新检查树并让其保持平衡
  insert(val) {
    let insertPosition = null;
    if (this.node < val) {
      insertPosition = 'right';
      // 如果要插入的值大于当前节点值，则寻找其右子节点
      if (this.right === null) {
        this.rightChild = new Node(val, this);
      } else {
        insertPosition = this.rightChild.insert(val);
      }
    } else if (this.node > val) {
      insertPosition = 'left';
      // 如果要插入的值小于当前节点值，则寻找其左子节点
      if (this.left === null) {
        this.leftChild = new Node(val, this);
      } else {
        insertPosition = this.leftChild.insert(val);
      }
    }

    if (insertPosition) {
      const balance = this.balance();
      if (Math.abs(balance) > 1) {
        this.rebalance(insertPosition, balance);
      }
    }
    return insertPosition;
  }

  // 省略
  find(val) {
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

  // 获取左子树或者右子树的深度
  getDeepth(left = true) {
    const child = left ? 'leftChild' : 'rightChild';
    let deepth = 0;
    let childNode = this[child];
    while (childNode) {
      deepth += 1;
      childNode = childNode.leftChild || childNode.rightChild;
    }
    return deepth;
  }

  /*
   * 判断当前节点是否失衡
   * 返回 左子节点深度 - 右子节点深度 的值
   * 若返回值 >= 2，则左失衡
   * 若返回值 <= -2，则右失衡
  */
  balance() {
    const leftDeepth = this.getDeepth();
    const rightDeepth = this.getDeepth(false);
    return leftDeepth - rightDeepth;
  }

  rebalance(insertPosition, balance) {
    if (insertPosition === 'left') {
      if (balance > 0) {
        // 左左失衡
        rightRotate(this);
      } else {
        // 右左失衡
        rlRotate(this);
      }
    } else if (insertPosition === 'right') {
      if (balance > 0) {
        // 左右失衡
        lrRotate(this);
      } else {
        // 右右失衡
        leftRotate(this);
      }
    }
  }
}

/* ==================================================== */
console.log('创建二叉平衡搜索树并插入元素...');

// 初始化创建一个二叉搜索树，根元素为 10
const bst = new Node(10);
bst.insert(1);
bst.insert(20);
bst.insert(11);
bst.insert(0);
bst.insert(2);
bst.insert(9);

/* ==================================================== */
console.log('\n ========== 插入元素使其右右失衡并复原 ========== ');
bst.insert(9.5);
console.log('输出根节点左子节点的右子节点，可以看见，原本应该是 2，但调整平衡之后为 9');
console.log(`bst.leftChild.right: ${bst.leftChild.right}`); // 9

/* ==================================================== */
console.log('\n ========== 继续插入元素使其左右失衡并复原 ========== ');
bst.insert(12);
console.log('输出根节点右子节点，可以看见，原本应该是 20，但调整平衡之后为 12');
console.log(`bst.right: ${bst.right}`); // 12