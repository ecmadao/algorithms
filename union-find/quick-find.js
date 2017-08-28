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

/*
 * 将 val 和 target 链接
 * 需要查找所有和 val 链接的值，将其链接对象改为 target
*/
const union = (val, target) => {
  if (data[val] !== val) {
    const origin = data[val];
    union(origin, target);
  }
  data[val] = target;
};

const find = (val, target) => {
  const result = data[val] === data[target];
  console.log(`find result of ${val}:${target}: ${result}`);
  return result;
};

union(1, 7);
union(2, 5);
union(1, 5);

find(2, 7); // should return true
find(5, 7); // should return true
find(5, 9); // should return false

console.log(data);