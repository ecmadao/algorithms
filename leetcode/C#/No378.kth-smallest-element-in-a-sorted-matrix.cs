/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a n x n matrix where each of the rows and columns are sorted in ascending order,
 * find the kth smallest element in the matrix.
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 *
 * Example:
 * matrix = [
 *   [ 1,  5,  9],
 *   [10, 11, 13],
 *   [12, 13, 15]
 * ],
 * k = 8,
 * return 13.
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ n^2.
 */

public interface IBinaryHeapEntity
{
    public int Value { get; }
}

public interface IBinaryHeap<T>
{
    public int Count { get; }

    public void Push(T item);

    public T Pop();

    public T Top();

    public void Exchange(T item, int pos);
}

public class BinaryHeapEntity : IBinaryHeapEntity
{
    private int Val;

    public BinaryHeapEntity(int value)
    {
        this.Val = value;
    }

    public int Value
    {
        get
        {
            return this.Val;
        }
    }
}

// 最大堆
class BinaryHeap<T> : IBinaryHeap<T>
        where T : IBinaryHeapEntity
{
    private readonly List<T> heap;

    public BinaryHeap()
    {
        this.heap = new List<T>();
    }

    public int Count
    {
        get
        {
            return this.heap.Count;
        }
    }

    public void Push(T entity)
    {
        this.heap.Add(entity);
        this.SortWithFather(this.Count);
    }

    public T Top()
    {
        if (this.Count == 0)
        {
            return default;
        }

        return this.heap[0];
    }

    public T Pop()
    {
        if (this.Count == 0)
        {
            return default;
        }

        T lastEntity = this.heap[this.Count - 1];
        this.heap[this.Count - 1] = this.heap[0];
        this.heap[0] = lastEntity;

        T res = this.heap[this.Count - 1];
        this.heap.RemoveAt(this.Count - 1);
        if (this.Count > 0)
        {
            this.SortWithChildren(1);
        }

        return res;
    }

    public void Exchange(T entity, int pos)
    {
        this.heap[pos] = entity;
        this.SortWithChildren(pos + 1);
    }

    private int GetValue(int index)
    {
        return this.heap[index].Value;
    }

    private void SortWithFather(int cPos)
    {
        int fPos = cPos / 2;
        T target = this.heap[cPos - 1];

        while (cPos > 1 && target.Value > this.GetValue(fPos - 1))
        {
            this.heap[cPos - 1] = this.heap[fPos - 1];
            cPos = fPos;
            fPos = cPos / 2;
        }

        this.heap[cPos - 1] = target;
    }

    private void SortWithChildren(int fPos)
    {
        int cPos = fPos * 2;
        T target = this.heap[fPos - 1];

        while (cPos - 1 < this.Count)
        {
            if (cPos < this.Count && this.GetValue(cPos - 1) < this.GetValue(cPos))
            {
                cPos += 1;
            }

            if (this.GetValue(cPos - 1) <= target.Value)
            {
                break;
            }

            this.heap[fPos - 1] = this.heap[cPos - 1];
            fPos = cPos;
            cPos = fPos * 2;
        }

        this.heap[fPos - 1] = target;
    }
}

public class Solution {
    // 最大堆解法
    public int KthSmallest(int[][] matrix, int k) {
        int[] indexes = new int[matrix.Length];
        IBinaryHeap<IBinaryHeapEntity> heap = new BinaryHeap<IBinaryHeapEntity>();

        while (heap.Count < k) {
            for (int i = 0; i < indexes.Length; i += 1) {
                if (indexes[i] < matrix[i].Length) {
                    heap.Push(
                        new BinaryHeapEntity(matrix[i][indexes[i]])
                    );
                    indexes[i] += 1;
                }
                if (heap.Count == k) {
                    break;
                }
            }
        }

        while (true) {
            bool shouldCheck = false;
            for (int i = 0; i < indexes.Length; i += 1) {
                if (indexes[i] < matrix[i].Length && matrix[i][indexes[i]] <= heap.Top().Value) {
                    heap.Exchange(
                        new BinaryHeapEntity(matrix[i][indexes[i]]),
                        0
                    );
                    indexes[i] += 1;
                    shouldCheck = true;
                }
            }
            if (!shouldCheck) break;
        }
        return heap.Top().Value;
    }
}