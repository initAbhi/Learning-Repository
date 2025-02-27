public class CeilingProblem {
    public static void main(String[] args){
    //Finding the number is lowest greater than the target elements
    int[] arr = {2,4,5,6,12,15,17,19,30,36,45,78,89,99};
    int target = 32;
        System.out.println(CeilingNum(arr, target));
    }

    static int CeilingNum(int[] arr, int target){
        int start = 0;
        int end = arr.length - 1;
        int mid = start + (end - start) /2;
        while(start <= end){
            if(arr[mid] == target) return arr[mid];
            if(arr[mid] > target) end = mid - 1;
            if(arr[mid] < target) start = mid + 1;
            mid = start + (end - start) /2;
        }
        return arr[mid];
    }

}
