/*
 * 一组数为 0，1，2，3，4，5，6，7
 * 作为下标储存在数组中
 * 输出化时，每个位置上的值都是它本身，代表仅联通自己
*/
const init = (count = 7) => {
  const data = [];
  for (let i = 0; i < count + 1; i += 1) {
    data[i] = i;
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

/*
 * 将 val 和 target 链接
 * 需要查找所有和 val 链接的值，将其链接对象改为 target
*/
const union = (val, target) => {
  const valRoot = root(val);
  const targetRoot = root(target);
  data[valRoot] = targetRoot;
};

const find = (val, target) => {
  const result = root(val) === root(target);
  console.log(`find result of ${val}:${target}: ${result}`);
  return result;
};

union(5, 7);
union(7, 4);

console.log(`Root of 5 is: ${root(5)}`); // root should be 4

union(7, 1);
find(5, 4); // should be true, cause they all unioned to 1
