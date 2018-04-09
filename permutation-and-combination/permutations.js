
/*
 * 1. 将列表中的每一个元素插入到由剩下元素组成的各个全排列列表的头部
 * 2. 给定列表的第一个元素，插入到剩下元素组成的全排列列表的各个位置
 */

// 注意，该方法没有处理列表中含有相同元素时的情况，即 [1,1] 会被全排列为 [1,1]
const permute = (nums) => {
  if (nums.length === 1) return [[nums[0]]];

  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const remains = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const arrays = permute(remains);
    for (const array of arrays) {
      result.push(
        [num, ...array]
      );
    }
  }
  return result;
};


// 利用 set 处理了重复元素的情况
const permute_premium = (nums) => {
  const permute = (nums) => {
    if (nums.length === 1) return [[nums[0]]];
    const cache = new Set();

    const result = [];
    for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];
      if (cache.has(num)) continue;
      cache.add(num);
      const remains = [...nums.slice(0, i), ...nums.slice(i + 1)];
      const arrays = permute(remains);
      for (const array of arrays) {
        result.push(
          [num, ...array]
        );
      }
    }
    return result;
  };

  return permute(nums);
};