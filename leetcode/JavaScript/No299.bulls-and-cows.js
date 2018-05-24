/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.
 * Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 
 * Please note that both secret number and friend's guess may contain duplicate digits.
 *
 * Example:
 * Input: secret = "1807", guess = "7810"
 * Output: "1A3B"
 * Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
 *
 * Input: secret = "1123", guess = "0111"
 * Output: "1A1B"
 * Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
 *
 * Note:
 * You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const tmp = {};
  const tmpG = {};
  let a = 0;
  let b = 0;

  for (let i = 0; i < secret.length; i += 1) {
    const G = guess[i];
    const S = secret[i];
    if (G === S) {
      a += 1;
    } else {
      tmp[S] = (tmp[S] || 0) + 1;

      if (tmp[G] && tmp[G] > 0) {
        b += 1;
        tmp[G] -= 1;
      } else {
        tmpG[G] = (tmpG[G] || 0) + 1;
      }
    }
  }

  for (const str in tmpG) {
    if (tmp[str]) {
      b += Math.min(tmp[str], tmpG[str])
    }
  }
  return `${a}A${b}B`;
};

// Test case
console.log(getHint('1123', '0111')) // 1A1B
console.log(getHint('1807', '7810')) // 1A2B
console.log(getHint('1122', '1222')) // 3A0B
console.log(getHint('6244988279', '3819888600')) // 2A2B
