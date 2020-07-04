namespace Ecmadao.Algorighms.BinaryHeap
{
    using Ecmadao.Algorighms.BinaryHeap.Interfaces;

    // Minimum Heap
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

        public void Exchange(T entity, int pos)
        {
            this.heap[pos] = entity;
            this.SortWithChildren(pos + 1);
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

        private int GetValue(int index)
        {
            return this.heap[index].Value;
        }

        private void SortWithFather(int cPos)
        {
            int fPos = cPos / 2;
            T target = this.heap[cPos - 1];

            while (cPos > 1 && target.Value < this.GetValue(fPos - 1))
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
                if (cPos < this.Count && this.GetValue(cPos - 1) > this.GetValue(cPos))
                {
                    cPos += 1;
                }

                if (this.GetValue(cPos - 1) >= target.Value)
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
}
