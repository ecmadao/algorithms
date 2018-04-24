/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of airline tickets represented by pairs of departure and arrival airports [from, to],
 * reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK.
 * Thus, the itinerary must begin with JFK.
 *
 * Note:
 * 1. If there are multiple valid itineraries,
 *  you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
 * 2. All airports are represented by three capital letters (IATA code).
 * 3. You may assume all tickets form at least one valid itinerary.
 *
 * Example:
 * tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
 * Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
 *
 * tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 * Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
 * Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
 */


/**
 * 根据题意，给出一组机票，里面每个数组代表从出发机场到到达机场。
 * 要求返回一个可以使用上全部机票的顺序。要求：
 * 1. 机票必须全部用完
 * 2. 到达机场有多种选择时，选择字典顺序靠前的那个
 */

var searchInsert = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var index = null;

  while (left <= right) {
    var midIndex = Math.floor((left + right) / 2);
    var mid = nums[midIndex];
    if (mid === target) {
      index = midIndex;
      break;
    } else if (mid > target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }

  if (index === null) {
    left -= 1;
    var num = nums[left];
    if (num > target) {
      if (left - 1 < 0 || nums[left - 1] < target) {
        index = left;
      }
    } else {
      if (left + 1 > nums.length -1 || nums[left + 1] > target) {
        index = left + 1;
      }
    }
  }

  return index;
};

const insert = (arr, val) => {
  const index = searchInsert(arr, val);
  const r = arr.slice(0, index);
  r.push(val);
  return r.concat(arr.slice(index));
};


class Digraph {
  constructor(datas) {
    this.adj = {};
    this.count = datas.length;
    this.init(datas);
  }

  init(datas) {
    for (const data of datas) {
      const [start, end] = data;
      if (!this.adj[start]) this.adj[start] = [];
      this.adj[start] = insert(this.adj[start], end);
    }
  }

  get size() {
    return this.count + 1;
  }
}

class WalkDigraph {
  constructor(digraph, start) {
    this.paths = [];
    this.walk(digraph, start);
  }

  walk(digraph, point) {
    this.paths.push(point);
    const points = digraph.adj[point];

    if (!points || !points.length) {
      const r = this.size === digraph.size;
      if (!r) this.paths.pop();
      return r;
    }

    let loop = 0;
    while (loop < digraph.adj[point].length) {
      const nextPoint = digraph.adj[point].shift();
      const result = this.walk(digraph, nextPoint);

      if (!result) {
        digraph.adj[point].push(nextPoint);
      } else {
        return true;
      }
      loop += 1;
    }

    digraph.adj[point] = points;
    this.paths.pop();
    return false;
  }

  get size() {
    return this.paths.length;
  }
}

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const digraph = new Digraph(tickets);
  const walkDigraph = new WalkDigraph(digraph, 'JFK');
  return walkDigraph.paths;
};

// Test case
// [ 'JFK', 'NRT', 'JFK', 'KUL' ]
console.log(findItinerary([['JFK','KUL'],['JFK','NRT'],['NRT','JFK']]));
// ["JFK", "AXA", "AUA", "ADL", "ANU", "AUA", "ANU", "EZE", "ADL", "EZE", "ANU", "JFK", "AXA", "EZE", "TIA", "AUA", "AXA", "TIA", "ADL", "EZE", "HBA"]
console.log(findItinerary([["EZE","TIA"],["EZE","HBA"],["AXA","TIA"],["JFK","AXA"],["ANU","JFK"],["ADL","ANU"],["TIA","AUA"],["ANU","AUA"],["ADL","EZE"],["ADL","EZE"],["EZE","ADL"],["AXA","EZE"],["AUA","AXA"],["JFK","AXA"],["AXA","AUA"],["AUA","ADL"],["ANU","EZE"],["TIA","ADL"],["EZE","ANU"],["AUA","ANU"]]));
// [ 'JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO' ]
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));


