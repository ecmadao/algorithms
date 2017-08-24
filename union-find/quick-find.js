const init = (count = 7) => {
  const data = [];
  for (let i = 0; i < count + 1; i += 1) {
    data[i] = i;
  }
  return data;
};

const data = init();

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