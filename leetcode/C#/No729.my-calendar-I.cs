/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement a MyCalendar class to store your events. A new event can be added if adding the event will not cause a double booking.
 * Your class will have the method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.
 * A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)
 * For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.
 * Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
 *
 * Example 1:
 * MyCalendar();
 * MyCalendar.book(10, 20); // returns true
 * MyCalendar.book(15, 25); // returns false
 * MyCalendar.book(20, 30); // returns true
 * Explanation: 
 * The first event can be booked.  The second can't because time 15 is already booked by another event.
 * The third event can be booked, as the first event takes every time less than 20, but not including 20.
 *
 * Note:
 * The number of calls to MyCalendar.book per test case will be at most 1000.
 * In calls to MyCalendar.book(start, end), start and end are integers in the range [0, 10^9].
*/

public class MyCalendar {

    private static List<int[]> range = new List<int[]>();

    private static int Search(int start, int end) {
        int i = 0;
        int j = range.Count - 1;

        while (i <= j) {
            int mid = (i + j) / 2;
            int[] item = range[mid];
            if (item[0] <= start) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return i;
    }

    private static bool Check(int[] data, int start, int end) {
        if (start >= data[1] || end <= data[0]) return true;
        return false;
    }

    public MyCalendar() {
        range = new List<int[]>();
    }
    
    public bool Book(int start, int end) {
        int i = Search(start, end);
        
        if (i > 0 && !Check(range[i - 1], start, end)) return false;
        if (i < range.Count && !Check(range[i], start, end)) return false;

        range.Insert(i, new int[2]{ start, end });
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar obj = new MyCalendar();
 * bool param_1 = obj.Book(start,end);
 */