const size = []; // 记录各个元素所在位置的深度。index 为元素值，对应位置的 value 为深度

const init = (count = 7) => {
  const data = [];
  for (let i = 0; i < count + 1; i += 1) {
    data[i] = i;
    size[i] = 1; // 初始化时各个元素深度都是 1
  }
  return data;
};

const data = init();

const root = (val) => {
  let r = val;
  while(data[r] !== r) {
    r = data[r];
  }
  return r;
};

const union = (val, target) => {
  const valRoot = root(val);
  const targetRoot = root(target);

  if (size[valRoot] <= size[targetRoot]) {
    // 此时 val 树比 target 树浅，应将 val 的 root 挂载在 target 的 root 上
    data[valRoot] = targetRoot;
    size[targetRoot] += size[valRoot];
  } else {
    // 反之将 target 的 root 挂载在 val 的 root 上
    data[targetRoot] = valRoot;
    size[valRoot] += size[targetRoot];
  }
};

const find = (val, target) => {
  const result = root(val) === root(target);
  console.log(`find result of ${val}:${target}: ${result}`);
  return result;
};

union(3, 4);
union(8, 4);

console.log(`Root of 5 is: ${root(5)}`); // root should be 4

union(8, 1); // 1 应该被挂载在 4 上
console.log(`Depth of 4 should be ${size[4]}`); // should be 2

find(3, 1); // should be true, cause they all unioned to 4
