public class ElInMountainArray {
    public static void main(String[] args) {
        int[] nums = {2,3,4,6,8,19,45,37,23,7,2,3,1};
        int target = 23;
        System.out.println(peakIndexInMountainArray(nums, target));
    }
    static  int peakIndexInMountainArray(int[] nums,int target){
        int start = 0;
        int end = nums.length -1;
        int mid = start + (end-start)/2;
        if(target >= nums[mid]){
            int st = mid + 1;
            int ed = nums.length;
            return agnosticBinarySearch(nums,st,ed,target,false);
        }else {
            int st = 0;
            int ed = mid - 1;
            return agnosticBinarySearch(nums,st,ed,target,true);
        }

    }
    static int agnosticBinarySearch(int[] arr,int st, int ed, int target, boolean ascending){
        int start = st;
        int end = ed;
        while (start <= end){
            int mid = start + (end -start)/2;
            if(ascending){
                if(target < arr[mid]){
                    end = mid - 1;
                } else if (target > arr[mid]) {
                    start = mid + 1;
                }else return mid;
            }else{
                if(target > arr[mid]){
                    end = mid - 1;
                } else if (target < arr[mid]) {
                    start = mid + 1;
                }else return mid;
            }

        }
            return -1;
    }
}
