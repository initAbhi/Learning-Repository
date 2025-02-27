public class AgnosticBinarySearch {
    public static void main(String[] args){
        int[] arr = {78,67,56,45,34,12,3,1};
        int[] arr2 = {2,4,45,56,78,89,99};
        System.out.println(agnoBinarySearch(arr, 3));
    }

    static  int agnoBinarySearch(int[] arr, int target){
        boolean isAgnos = arr[0] > arr[arr.length - 1];
        int start = 0;
        int end = arr.length - 1;

        int mid = start + (end-start)/2;
        while (start <= end){
            if(arr[mid] == target) return mid;
            if(isAgnos){
                if(arr[mid]>target) start = mid + 1;
                if(arr[mid]<target) end = mid - 1;
            }else{
                if(arr[mid]<target) start = mid + 1;
                if(arr[mid]>target) end = mid - 1;
            }
            mid =  start + (end-start)/2;
        }
        return -1;
    }
}
