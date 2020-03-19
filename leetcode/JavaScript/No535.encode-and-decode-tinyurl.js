/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Note: This is a companion problem to the System Design problem: Design TinyURL.
 * TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.
 *
 * Design the encode and decode methods for the TinyURL service.
 * There is no restriction on how your encode/decode algorithm should work.
 * You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
 */

// 异或操作进行修改、还原

const key = 1024

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  const res = []
  for (const s of longUrl) {
    res.push(
      String.fromCharCode(s.charCodeAt() ^ key)
    )
  }
  return `http://${res.join('')}`
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const res = []
  for (let i = 7; i < shortUrl.length; i += 1) {
    res.push(
      String.fromCharCode(shortUrl[i].charCodeAt() ^ key)
    )
  }
  return res.join('')
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */