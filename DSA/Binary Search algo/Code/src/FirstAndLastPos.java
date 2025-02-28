import java.util.Arrays;

public class FirstAndLastPos {
    public static void main(String[] args) {
        int[] arr = {5,7,7,8,8,10};
        int target = 6;
        System.out.println(Arrays.toString(searchRange(arr,target)));
    }

    public static int[] searchRange(int[] nums, int target) {
        int startIndex = search(nums, target, true);
        int endIndex = search(nums, target, false);

    return new int[]{startIndex, endIndex};
    }

    static int search(int[ ] nums, int target, boolean firstIndex){
        int start = 0;
        int end = nums.length - 1;
        int ans = -1;
        while(start <= end){
            int mid = start + (end - start)/2;
            if(nums[mid] > target){
                end = mid - 1;
            }else if(nums[mid] < target){
                start = mid + 1;
            }else{
                ans = mid;
                if(firstIndex){
                    end = mid - 1;
                }else{
                    start = mid + 1;
                }
            }
        }
        return ans;
    }
}
