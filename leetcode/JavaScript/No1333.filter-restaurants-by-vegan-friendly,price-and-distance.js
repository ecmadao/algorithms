/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the array restaurants where  restaurants[i] = [idi, ratingi, veganFriendlyi, pricei, distancei]. You have to filter the restaurants using three filters.
 * The veganFriendly filter will be either true (meaning you should only include restaurants with veganFriendlyi set to true) or false (meaning you can include any restaurant).
 * In addition, you have the filters maxPrice and maxDistance which are the maximum value for price and distance of restaurants you should consider respectively.
 * Return the array of restaurant IDs after filtering, ordered by rating from highest to lowest.
 * For restaurants with the same rating, order them by id from highest to lowest.
 * For simplicity veganFriendlyi and veganFriendly take value 1 when it is true, and 0 when it is false.
 *
 * Example 1:
 * Input: restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 1, maxPrice = 50, maxDistance = 10
 * Output: [3,1,5]
 * Explanation:
 * The restaurants are:
 * Restaurant 1 [id=1, rating=4, veganFriendly=1, price=40, distance=10]
 * Restaurant 2 [id=2, rating=8, veganFriendly=0, price=50, distance=5]
 * Restaurant 3 [id=3, rating=8, veganFriendly=1, price=30, distance=4]
 * Restaurant 4 [id=4, rating=10, veganFriendly=0, price=10, distance=3]
 * Restaurant 5 [id=5, rating=1, veganFriendly=1, price=15, distance=1]
 * After filter restaurants with veganFriendly = 1, maxPrice = 50 and maxDistance = 10 we have restaurant 3, restaurant 1 and restaurant 5 (ordered by rating from highest to lowest). 
 *
 * Example 2:
 * Input: restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 0, maxPrice = 50, maxDistance = 10
 * Output: [4,3,2,1,5]
 * Explanation: The restaurants are the same as in example 1, but in this case the filter veganFriendly = 0, therefore all restaurants are considered.
 *
 * Example 3:
 * Input: restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 0, maxPrice = 30, maxDistance = 3
 * Output: [4,5]
 *
 * Constraints:
 * 1. 1 <= restaurants.length <= 10^4
 * 2. restaurants[i].length == 5
 * 3. 1 <= idi, ratingi, pricei, distancei <= 10^5
 * 4. 1 <= maxPrice, maxDistance <= 10^5
 * 5. veganFriendlyi and veganFriendly are 0 or 1.
 * 6. All idi are distinct.
 *
 * 给你一个餐馆信息数组 restaurants，其中  restaurants[i] = [idi, ratingi, veganFriendlyi, pricei, distancei]。你必须使用以下三个过滤器来过滤这些餐馆信息。
 * 其中素食者友好过滤器 veganFriendly 的值可以为 true 或者 false，如果为 true 就意味着你应该只包括 veganFriendlyi 为 true 的餐馆，为 false 则意味着可以包括任何餐馆。
 * 此外，我们还有最大价格 maxPrice 和最大距离 maxDistance 两个过滤器，它们分别考虑餐厅的价格因素和距离因素的最大值。
 * 过滤后返回餐馆的 id，按照 rating 从高到低排序。如果 rating 相同，那么按 id 从高到低排序。简单起见， veganFriendlyi 和 veganFriendly 为 true 时取值为 1，为 false 时，取值为 0
 */


const search = (list, restaurant) => {
  let i = 0
  let j = list.length - 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    const res = list[mid]
    if (res[1] < restaurant[1]) {
      j = mid - 1
    } else if (res[1] > restaurant[1]) {
      i = mid + 1
    } else {
      if (res[0] < restaurant[0]) {
        j = mid - 1
      } else {
        i = mid + 1
      }
    }
  }
  return i
}

/**
* @param {number[][]} restaurants
* @param {number} veganFriendly
* @param {number} maxPrice
* @param {number} maxDistance
* @return {number[]}
*/
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
  const result = []

  for (const restaurant of restaurants) {
    if (veganFriendly && !restaurant[2]) continue
    if (restaurant[3] > maxPrice) continue
    if (restaurant[4] > maxDistance) continue
    const index = search(result, restaurant)
    result.splice(index, 0, restaurant)
  }
  return result.map(res => res[0])
}
