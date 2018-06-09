/**
 * Difficulty:
 * Easy
 * 
 * Desc:
 * A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).
 * Each LED represents a zero or one, with the least significant bit on the right.
 * 
 * Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.
 * 
 * Example:
 * Input: n = 1
 * Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
 * 
 * Note:
 * - The order of output does not matter.
 * - The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
 * - The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
 *
 * 大意就是，有一个奇奇怪怪的手表，表盘上有两排 LED 灯。上排的 4 个灯分别代表 8, 4, 2, 1 小时，下排的 6 个灯则代表 32, 16, 8, 4, 2, 1 分钟
 * 如果上排点亮 2 和 1，下排点亮 16, 8, 1，则代表 "3:25"
 * 且上排取值范围为 0~11，下排为 0~59
 * 给出一个代表全部亮灯的个数的数字，返回所有可能的时间
 */

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const HOURS = [1, 2, 4, 8];
  const MINUTES = [1, 2, 4, 8, 16, 32];

  const allPossibleNumbers = (base, start, count, limit) => {
    if (!count) return [0];
    if (count === base.length) return [];

    const results = [];
    for (let i = start; i <= base.length - count; i += 1) {
      const tmp = base[i];
      const nums = allPossibleNumbers(base, i + 1, count - 1, limit);
      for (const num of nums) {
        if (num + tmp <= limit) {
          results.push(num + tmp);
        } else {
          break;
        }
      }
    }
    return results;
  };

  const result = new Set();
  for (let i = 0; i <= num; i += 1) {
    const hNum = i;
    const mNum = num - hNum;

    const hours = allPossibleNumbers(HOURS, 0, hNum, 11);
    const minutes = allPossibleNumbers(MINUTES, 0, mNum, 59);

    for (hour of hours) {
      for (minute of minutes) {
        const m = minute < 10 ? `0${minute}` : minute;
        const time = `${hour}:${m}`;
        result.add(time);
      }
    }
  }

  return [...result];
};

