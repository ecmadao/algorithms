/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
 * - get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * - put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 * The cache is initialized with a positive capacity.
 *
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 *
 * Example:
 * LRUCache cache = new LRUCache( 2 ); // capacity
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.put(4, 4);    // evicts key 1
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
*/

public class ListNode {
    public int val;
    public int key;
    public ListNode pre;
    public ListNode next;

    public ListNode(int k, int v) {
        key = k;
        val = v;
    }
}

public class LRUCache {
    int maximum;
    Dictionary<int, ListNode> dict;
    ListNode head;
    ListNode tail;

    public LRUCache(int capacity) {
        dict = new Dictionary<int, ListNode>();
        maximum = capacity;
        head = null;
        tail = null;
    }
    
    public int Get(int key) {
        if (!dict.ContainsKey(key)) return -1;
        ListNode node = dict[key];

        if (node.next != null) {
            node.next.pre = node.pre;
            if (node.pre != null) node.pre.next = node.next;
            if (node.pre == null) head = node.next;

            node.pre = tail;
            tail.next = node;
            node.next = null;
            tail = node;
        }

        return node.val;
    }
    
    public void Put(int key, int value) {
        if (dict.Count == maximum && !dict.ContainsKey(key)) {
            dict.Remove(head.key);
            head = head.next;
            if (head != null) head.pre = null;
            if (head == null) tail = null;
        }

        if (dict.ContainsKey(key)) {
            Get(key);
            tail.val = value;
            return;
        }

        dict[key] = new ListNode(key, value);
        if (tail == null) {
            head = dict[key];
            tail = dict[key];
        } else {
            tail.next = dict[key];
            dict[key].pre = tail;
            tail = dict[key];
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */