public class ElInBitonicArray {
    public  static  void main(String[] args){
        int[] arr = {2,3,17,27,34,25,17,12,4,-52};
        int target = 4;
        System.out.println(findInMountainArray(arr,target));

    }
    static  int findInMountainArray(int[] arr, int target){
        int peak = findPeak(arr);
        int st = 0;
        int ed = arr.length;
        boolean isAgnostic;
        if(arr[peak] == target) {
            return peak;
        }
        int left = agnosticBinarySearch(arr,0,peak-1,target,true);
        int right = agnosticBinarySearch(arr, peak +1,arr.length-1, target, false);
        if(left >= 0){
            return left;
        }else if(right >= 0){
            return right;
        }
        return -1;

    }
    static int findPeak(int[] arr){
        int start = 0;
        int end = arr.length-1;
        while(start < end){
            int mid = start + (end - start)/2;
            if(arr[mid] > arr[mid + 1]){
                end = mid;
            }else{
                start = mid+1;
            }
        }
        return start;
    }

    static  int agnosticBinarySearch(int[] arr,int st,int ed,int target, boolean isAgnostic){
        int start = st;
        int end = ed;
        while(start <= end){
            int mid = start + (end - start)/2;
            if(isAgnostic){
                if(arr[mid] > target){
                    end = mid - 1;
                }else if(arr[mid] < target){
                    start = mid + 1;
                }else{
                    return mid;
                }
            }else{
                if(arr[mid] < target){
                    end = mid - 1;
                }else if(arr[mid] > target){

                    start = mid + 1;
                }else{
                    return mid;
                }
            }

        }
        return  -1;
    }
}
