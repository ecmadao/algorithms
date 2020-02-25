/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A transaction is possibly invalid if:
 * the amount exceeds $1000, or;
 * if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
 * Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.
 * Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.
 *
 * Example 1:
 * Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
 * Output: ["alice,20,800,mtv","alice,50,100,beijing"]
 * Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
 *
 * Example 2:
 * Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
 * Output: ["alice,50,1200,mtv"]
 *
 * Example 3:
 * Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
 * Output: ["bob,50,1200,mtv"]
 *
 * Constraints:
 * 1. transactions.length <= 1000
 * 2. Each transactions[i] takes the form "{name},{time},{amount},{city}"
 * 3. Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
 * 4. Each {time} consist of digits, and represent an integer between 0 and 1000.
 * 5. Each {amount} consist of digits, and represent an integer between 0 and 2000.
 *
 * 如果出现下述两种情况，交易 可能无效：
 * 1. 交易金额超过 ¥1000
 * 2. 或者，它和另一个城市中同名的另一笔交易相隔不超过 60 分钟（包含 60 分钟整）
 *
 * 每个交易字符串 transactions[i] 由一些用逗号分隔的值组成，这些值分别表示交易的名称，时间（以分钟计），金额以及城市。
 * 给你一份交易清单 transactions，返回可能无效的交易列表。你可以按任何顺序返回答案。
 */

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
  const map = {}
  const result = new Set()
  transactions.sort((t1, t2) => Number(t1.split(',')[1]) - Number(t2.split(',')[1]))

  for (const transaction of transactions) {
    const [name, time, amount, city] = transaction.split(',')

    let unvalidate = amount > 1000
    if (map[name] && map[name].length) {
      let i = map[name].length - 1
      while (i >= 0 && time - map[name][i][1] <= 60) {
        if (map[name][i][3] !== city) {
          result.add(map[name][i].join(','))
          unvalidate = true
        }
        i -= 1
      }
    }
    if (unvalidate) result.add(transaction)
    if (!map[name]) map[name] = []
    map[name].push(transaction.split(','))
  }
  return [...result]
}
