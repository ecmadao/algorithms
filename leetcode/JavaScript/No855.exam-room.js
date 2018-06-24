/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In an exam room, there are N seats in a single row, numbered 0, 1, 2, ..., N-1.
 * When a student enters the room, they must sit in the seat that maximizes the distance to the closest person.  If there are multiple such seats, they sit in the seat with the lowest number.
 * (Also, if no one is in the room, then the student sits at seat number 0.)
 * Return a class ExamRoom(int N) that exposes two functions:
 * ExamRoom.seat() returning an int representing what seat the student sat in, and ExamRoom.leave(int p) representing that the student in seat number p now leaves the room.
 * It is guaranteed that any calls to ExamRoom.leave(p) have a student sitting in seat p.
 *
 * Example:
 * Input: ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]
 * Output: [null,0,9,4,2,null,5]
 * Explanation:
 * ExamRoom(10) -> null
 * seat() -> 0, no one is in the room, then the student sits at seat number 0.
 * seat() -> 9, the student sits at the last seat number 9.
 * seat() -> 4, the student sits at the last seat number 4.
 * seat() -> 2, the student sits at the last seat number 2.
 * leave(4) -> null
 * seat() -> 5, the student​ sits at the last seat number 5.
 *
 * Note:
 * - 1 <= N <= 10^9
 * - ExamRoom.seat() and ExamRoom.leave() will be called at most 10^4 times across all test cases.
 * - Calls to ExamRoom.leave(p) are guaranteed to have a student currently sitting in seat number p.
 */

/**
 * @param {number} N
 */
var ExamRoom = function(N) {
  this.maxIndex = N - 1;
  this.seats = [];
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
  if (!this.seats.length) {
    this.seats[0] = 0;
    return 0;
  }

  let maxDis = 0;
  let from = 0;
  let seatIndex = 0;
  let preIndex = this.seats[0];

  for (let i = 0; i < this.seats.length; i += 1) {
    const nowIndex = this.seats[i];
    const dis = Math.floor((nowIndex - preIndex) / 2);
    if (dis > maxDis) {
      maxDis = dis;
      from = i - 1;
      seatIndex = preIndex + dis;
    }
    preIndex = nowIndex;
  }

  if (this.seats[0] !== 0) {
    const preDis = this.seats[0];
    if (preDis >= maxDis) {
      from = -1;
      maxDis = preDis;
      seatIndex = 0;
    }
  }

  const last = this.seats[this.seats.length - 1];
  if (this.maxIndex - last > maxDis) {
    from = this.seats.length - 1;
    seatIndex = this.maxIndex;
  }

  this.seats.splice(from + 1, 0, seatIndex);
  return seatIndex;
};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
  let index = 0;
  for (let i = 0; i < this.seats.length; i += 1) {
    if (this.seats[i] === p) {
      index = i;
      break;
    }
  }
  this.seats.splice(index, 1);
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = Object.create(ExamRoom).createNew(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
let examRoom;

examRoom = new ExamRoom(10);
console.log(examRoom.seat()); // 0
console.log(examRoom.seat()); // 9
console.log(examRoom.seat()); // 4
console.log(examRoom.seat()); // 2
console.log(examRoom.leave(4));
console.log(examRoom.seat()); // 5

examRoom = new ExamRoom(10);
console.log(examRoom.seat()); // 0
console.log(examRoom.seat()); // 9
console.log(examRoom.seat()); // 4
console.log(examRoom.seat()); // 2
console.log(examRoom.leave(2));
console.log(examRoom.leave(0));
console.log(...examRoom.seats)
console.log(examRoom.seat()); // 0

examRoom = new ExamRoom(4);
console.log(examRoom.seat()); // 0
console.log(examRoom.seat()); // 3
console.log(examRoom.seat()); // 1
console.log(examRoom.seat()); // 2
console.log(examRoom.leave(1));
console.log(examRoom.leave(3));
console.log(...examRoom.seats)
console.log(examRoom.seat());
