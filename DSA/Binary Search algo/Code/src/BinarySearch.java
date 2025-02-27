public class BinarySearch {
    public static void main(String[] args) {
        //Binary Search Algorithm
        int[] arr = {2,3,6,8,10,19,34,55,56,67,99};
        int target = 56;


        System.out.println(binarySearch(arr, target));
    }
    static int binarySearch(int[] arr, int target){
        int start = 0;
        int end = arr.length - 1;
        while(start <= end){
            int mid = start + (end - start) /2;
            if(arr[mid] == target) return mid;
            if(arr[mid] > target) end = mid - 1;
            if(arr[mid] < target) start = mid + 1;
        }
        return -1;
         }
    }

