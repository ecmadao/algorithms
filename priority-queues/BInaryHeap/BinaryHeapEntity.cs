namespace Ecmadao.Algorighms.BinaryHeap
{
    using Ecmadao.Algorighms.BinaryHeap.Interfaces;

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
}
