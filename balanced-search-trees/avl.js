/*
 * ATTENTION
 * 在改变节点的父节点、子节点时，是一个双向的过程
 * 已设置 A 节点的左子节点为 B 为例，
 * 既需要把 A 节点的 leftChild 设置为 B，也需要把 B 的 parent 设置为 A
*/

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
  resetParent(node, targetNode);
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
  resetParent(node, targetNode);
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
      this.checkBalance(insertPosition);
    }
    return insertPosition;
  }

  checkBalance(insertPosition) {
    const balance = this.balance;
    if (Math.abs(balance) > 1) {
      this.rebalance(insertPosition, balance);
    }
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
    this.parentNode = null;
    this.leftChild = null;
    this.rightChild = null;
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
  get balance() {
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

  remove(val) {
    let findedNode = this.find(val);
    this.removeNode(findedNode);
  }

  removeNode(findedNode) {
    if (!findedNode) return;

    const childNodeCount = findedNode.childNodeCount;
    const parentNode = findedNode.parentNode;

    if (childNodeCount === 2) {
      // 如果有两个子节点，则找到最接近需要删除的节点的那个子节点
      const substitute = findClosestNode(findedNode);
      findedNode.node = substitute.node;
      substitute.remove(substitute.node);
    } else {
      // 如果要移除的目标节点没有左右子节点，则直接删除
      let childNode = null;
      if (childNodeCount) {
        // 如果只有一个子节点，则把仅有的那个子节点提升
        childNode = findedNode.leftChild || findedNode.rightChild;
        childNode.parentNode = parentNode;
      }
      const childKey = findedNode.isLeftChild
        ? 'leftChild'
        : 'rightChild';
      parentNode[childKey] = childNode;
      findedNode.destory();
      findedNode = null;
    }

    const recheckNode = findedNode || parentNode;
    if (recheckNode) {
      const balance = recheckNode.balance;
      if (Math.abs(balance) > 1) {
        recheckNode.rebalanceAfterDel(balance);
      }
    }
  }

  rebalanceAfterDel(balance) {
    if (balance > 0) {
      // left
      if (this.leftChild.leftChild) {
        // 左左
        rightRotate(this);
      } else {
        // 左右
        lrRotate(this);
      }
    } else if (balance < 0) {
      // right
      if (this.rightChild.rightChild) {
        // 右右
        leftRotate(this);
      } else {
        // 右左
        rlRotate(this);
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
console.log('\n ========== 插入元素使 1 所在节点右右失衡，并自动复原 ========== ');
bst.insert(9.5);
console.log('输出根节点左子节点的右子节点，可以看见，原本应该是 2，但调整平衡之后为 9');
console.log(`bst.leftChild.right: ${bst.leftChild.right}`); // 9

/* ==================================================== */
console.log('\n ========== 继续插入元素使其左右失衡并复原 ========== ');
bst.insert(12);
console.log('输出根节点右子节点，可以看见，原本应该是 20，但调整平衡之后为 12');
console.log(`bst.right: ${bst.right}`); // 12


/* ==================================================== */
console.log('\n ========== 在二叉平衡搜索树中删除元素 ========== ');
console.log('先插入一个 19');
bst.insert(19);
console.log('检查一个此时根节点的右子节点树');
console.log(`bst.right: ${bst.right}`); // 12
console.log(`bst.rightChild.left: ${bst.rightChild.left}`); // 11
console.log(`bst.rightChild.right: ${bst.rightChild.right}`); // 20
console.log(`bst.rightChild.rightChild.left: ${bst.rightChild.rightChild.left}`); // 19

console.log('检查一个此时根节点的左子节点树');
console.log(`bst.left: ${bst.left}`); // 1
console.log(`bst.leftChild.left: ${bst.leftChild.left}`); // 0
console.log(`bst.leftChild.right: ${bst.leftChild.right}`); // 9
console.log(`bst.leftChild.rightChild.left: ${bst.leftChild.rightChild.left}`); // 2

console.log('1 所在节点具有左右两个子节点，我们删除它');
bst.remove(1);
console.log('由于 1 的左子节点中的 0 比其右子节点中的 2 更接近于 1，所以用 0 代替了 1');
console.log(`bst.left: ${bst.left}`); // 9
console.log(`bst.leftChild.left: ${bst.leftChild.left}`); // 0
console.log(`bst.leftChild.right: ${bst.leftChild.right}`); // 9.5
console.log(`bst.leftChild.leftChild.left: ${bst.leftChild.leftChild.left}`); // null
console.log(`bst.leftChild.leftChild.right: ${bst.leftChild.leftChild.right}`); // 2

console.log('\n\n\n');
console.log('删除 11，让根节点的右子树失衡');
bst.remove(11);
console.log(`bst.right: ${bst.right}`); // 19
console.log(`bst.rightChild.left: ${bst.rightChild.left}`); // 12
console.log(`bst.rightChild.right: ${bst.rightChild.right}`); // 20