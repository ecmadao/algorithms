/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string containing only digits, restore it by returning all possible valid IP address combinations.
 *
 * Example:
 * Given "25525511135",
 * return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
 *
 * 给一个字符串，返回所有可能的合法的 IP 地址。和 N-Queens 类似的题目。注意判断 IP 合法性
 */

var checkIpSection = (str) => {
  if (!str.length || (str[0] === '0' && str.length > 1) || Number(str) > 255) return false;
  return true;
};

/**
* @param {string} s
* @return {string[]}
*/
const restoreIpAddresses = (s) => {
  const len = s.length;
  const getSection = (i, layer) => {
    if (layer === 4) {
      if (len - i > 3) return false;
      const section = s.slice(i);
      if (!checkIpSection(section)) return false;
      return [section];
    } else {
      const results = [];
      for (let l = 1; l <= 3; l += 1) {
        const num = s.slice(i, i + l);
        if (!checkIpSection(num)) continue;
        const result = getSection(i + l, layer + 1);
        if (result) {
          results.push(
            ...result.map(str => `${num}.${str}`)
          );
        }
      }
      return results;
    }
  };
  return getSection(0, 1);
};
