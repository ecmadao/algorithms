/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * - push(x) -- Push element x onto stack.
 * - pop() -- Removes the element on top of the stack.
 * - top() -- Get the top element.
 * - getMin() -- Retrieve the minimum element in the stack.
 *
 * Example 1:
 * Input
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * Output
 * [null,null,null,null,-3,null,0,-2]
 * Explanation
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 *
 * Constraints:
 * Methods pop, top and getMin operations will always be called on non-empty stacks.
*/

public class MinStack {
    Stack<int[]> s;
    int min;

    /** initialize your data structure here. */
    public MinStack() {
        s = new Stack<int[]>();
        min = int.MaxValue;
    }
    
    public void Push(int x) {
        min = Math.Min(x, min);
        s.Push(new int[]{ x, min });
    }
    
    public void Pop() {
        s.Pop();
        if (s.Count == 0) {
            min = int.MaxValue;
        } else {
            min = s.Peek()[1];
        }
    }
    
    public int Top() {
        return s.Peek()[0];
    }
    
    public int GetMin() {
        // Console.WriteLine(string.Join(",", s.Peek()));
        return s.Peek()[1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(x);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */