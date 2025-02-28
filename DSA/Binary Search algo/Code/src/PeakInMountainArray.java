public class PeakInMountainArray {
    public static void main(String[] args) {
        int[] arr = {2,4,5,6,7,8,14,7,5,3,1};
        System.out.println(findPeak(arr));

    }
    static int findPeak(int[] arr){
        int start = 0;
        int end = arr.length;
        while(start<=end){
        int mid = start + (end - start)/2;
            if(arr[mid]>arr[mid-1]){
                start = mid + 1;
            }else if(arr[mid] > arr[mid+1]){
                end = mid - 1;
            }else {
                return arr[mid];
            }
        }
        return -1;
    }
//    static  int binarySearch(int[] arr)
}
