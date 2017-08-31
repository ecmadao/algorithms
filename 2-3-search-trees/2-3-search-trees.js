class Node {
  constructor(val = null, parentNode = null) {
    this.parentNode = parentNode;
    this.values = val ? [val] : [];
    this.childs = [];
  }

  get leftVal() {
    return this.values[0];
  }

  get rightVal() {
    return this.values.slice(-1)[0];
  }

  get leftChild() {
    return this.childs[0];
  }

  get midChild() {
    return this.childs[(this.childs.length - 1) / 2];
  }

  get rightChild() {
    return this.childs.slice(-1)[0];
  }

  push(val) {
    this.values.push(val);
    this.values.sort((pre, next) => pre - next);
  }

  // 弹出当前节点的中间值
  popMid() {
    const mid = this.values[1];
    this.values = [
      this.leftVal,
      this.rightVal
    ];
    return mid;
  }

  // 根据值的大小比较来确定去哪个子节点寻找
  getTargetChild(val) {
    if (val < this.leftVal) {
      return this.leftChild;
    }
    if (val > this.rightVal) {
      return this.rightChild;
    }
    return this.midChild;
  }

  // 寻找当前节点里是否有匹配的值
  checkMatched(val) {
    return this.values.find(value => value === val);
  }

  find(val) {
    // 在当前节点就查询到了目标值
    if (this.checkMatched(val)) return this;
    // 已经处于最底层节点且没有查询到结果，则返回 null
    if (!this.childs.length) return null;

    const targetChild = this.getTargetChild(val);
    return targetChild.find(val);
  }

  // 循环获取根节点
  get root() {
    let parentNode = this.parentNode;
    if (!parentNode) return this;
    while (parentNode.parentNode) {
      parentNode = parentNode.parentNode;
    }
    return parentNode;
  }

  // 总是返回树的根节点
  insert(val) {
    let result = this.root;
    // 如果在当前节点就匹配，则直接返回
    if (this.checkMatched(val)) return result;
    if (this.childs.length) {
      // 如果还有子节点，则继续深入
      const targetChild = this.getTargetChild(val);
      targetChild.insert(val);
    } else {
      // 当已经到达最底层节点的时候，就把值插入到最底层节点内
      this.push(val);
    }
    if (this.values.length === 3) {
      // 节点内的值为 3 时，已经过饱和，处于中间临时状态。
      // 此时应该去除其中间的那个值，插入到父节点内；同时，当前节点剩下的两个值分别分裂成为两个新的节点，
      // 然后这两个节点也链接到他们原本的父节点上
      const mid = this.popMid();
      const parentNode = this.parentNode
        ? this.parentNode
        : new Node();
      parentNode.push(mid);
      parentNode.removeChilds(this.values);
      parentNode.pushChilds(
        ...this.mitosis()
      );
      result = parentNode.root;
    }
    return result;
  }

  // 给入一个 Array，判断当前节点的值中是否有 array 内的元素
  contain(values) {
    let contain = false;
    for (let i = 0; i < values.length; i += 1) {
      if (this.values.find(val => val === values[i])) {
        contain = true;
        break;
      }
    }
    return contain;
  }

  // 根据值来剔除掉自己直接链接的子节点
  removeChilds(values) {
    this.childs = this.childs
      .filter(child => !child.contain(values));
  }

  // 把其他节点链接成为自己的直接子节点
  pushChilds(...childs) {
    this.childs.push(...childs);
    this.childs.sort(
      (pre, next) => pre.leftVal - next.leftVal
    );
    childs.forEach(child => child.parentNode = this);
  }

  // 把当前节点中的值分裂成各个单独的节点
  // 当前节点中的子节点被均摊到新生成的各个节点中去
  mitosis() {
    const eachNodeChildsCount = this.childs.length / this.values.length;
    return this.values
      .map((value, index) => {
        const node = new Node(value);
        node.pushChilds(
          ...this.childs.slice(index * eachNodeChildsCount, (index + 1) * eachNodeChildsCount)
        );
        return node;
      });
  }
}

let node = new Node(10);

console.log(' ===== insert 5 ===== ');
node = node.insert(5);
console.log(`node.values: ${node.values}`);

console.log(' ===== insert 15 ===== ');
node = node.insert(15);
console.log(`node.values: ${node.values}`);
console.log(`node.leftChild.values: ${node.leftChild.values}`);
console.log(`node.rightChild.values: ${node.rightChild.values}`);

console.log(' ===== insert 17 ===== ');
node = node.insert(17);
console.log(`node.values: ${node.values}`);
console.log(`node.leftChild.values: ${node.leftChild.values}`);
console.log(`node.rightChild.values: ${node.rightChild.values}`);

console.log(' ===== insert 12 ===== ');
node = node.insert(12);
console.log(`node.values: ${node.values}`);
console.log(`node.leftChild.values: ${node.leftChild.values}`);
console.log(`node.midChild.values: ${node.midChild.values}`);
console.log(`node.rightChild.values: ${node.rightChild.values}`);

console.log(' ===== insert 16, 20 ===== ');
node = node.insert(16);
node = node.insert(20);
console.log(`node.values: ${node.values}`);
console.log(`node.leftChild.values: ${node.leftChild.values}`);
console.log(`node.rightChild.values: ${node.rightChild.values}`);