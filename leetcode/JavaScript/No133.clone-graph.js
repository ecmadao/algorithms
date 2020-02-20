/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Clone an undirected graph.
 * Each node in the graph contains a label and a list of its neighbors.
 *
 * OJ's undirected graph serialization:
 * Nodes are labeled uniquely.
 * We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
 *
 * As an example, consider the serialized graph {0,1,2#1,2#2,2}.
 * The graph has a total of three nodes, and therefore contains three parts as separated by #.
 * First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
 * Second node is labeled as 1. Connect node 1 to node 2.
 * Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
 * Visually, the graph looks like the following:
       1
      / \
     /   \
    0 --- 2
         / \
         \_/

 * 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
 * 图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）
 */

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph_1 = function(graph) {
  const tmp = {};
  if (!graph) return null;
  const clone = (node) => {
    if (tmp[node.label]) return tmp[node.label];
    const c = new UndirectedGraphNode(node.label);
    const { neighbors } = node;
    for (let i = 0; i < neighbors.length; i += 1) {
      const neighbor = neighbors[i];
      if (neighbor.label === node.label) {
        c.neighbors.push(c);
      } else {
        c.neighbors.push(clone(neighbor));
      }
    }
    tmp[node.label] = c;
    return c;
  };
  return clone(graph);
};

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph_2 = function(node) {
  if (!node) return null

  const dfs = (n, cache) => {
    if (cache.has(n.val)) return cache.get(n.val)
    const newNode = new Node(n.val)

    cache.set(n.val, newNode)
    newNode.neighbors = n.neighbors.map(neighbor => dfs(neighbor, cache))
    return newNode
  }

  return dfs(node, new Map())
}
