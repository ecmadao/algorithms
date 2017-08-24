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
