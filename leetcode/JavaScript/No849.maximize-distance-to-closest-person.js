/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * In a row of seats, 1 represents a person sitting in that seat, and 0 represents that the seat is empty.
 * There is at least one empty seat, and at least one person sitting.
 * Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
 * Return that maximum distance to closest person.
 *
 * Example:
 * Input: [1,0,0,0,1,0,1]
 * Output: 2
 * Explanation:
 * If Alex sits in the second open seat (seats[2]), then the closest person has distance 2.
 * If Alex sits in any other open seat, the closest person has distance 1.
 * Thus, the maximum distance to the closest person is 2.
 *
 * Input: [1,0,0,0]
 * Output: 3
 * Explanation:
 * If Alex sits in the last seat, the closest person is 3 seats away.
 * This is the maximum distance possible, so the answer is 3.
 *
 * Note:
 * 1 <= seats.length <= 20000
 * seats contains only 0s or 1s, at least one 0, and at least one 1.
 */

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let max = 1;

  let index = 0;
  let prePerson = null;
  while (index < seats.length) {
    if (seats[index] === 0) {
      while (seats[index] !== 1 && index < seats.length) index += 1;
      let dis;
      if (index === seats.length) {
        dis = index - (prePerson + 1);
      } else {
        dis = prePerson !== null ? Math.floor((index - prePerson) / 2) : index;
      }
      if (dis > max) max = dis;
      prePerson = index;
    } else {
      prePerson = index;
    }
    index += 1;
  }

  return max;
};
