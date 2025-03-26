import java.util.Arrays;

public class FitstMissingPositive {
    //Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
    //
    //You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
    public static void main(String[] args) {
        int[] arr = {1};
        System.out.println(cyclicSearch(arr));
//        System.out.println(Arrays.toString(cyclicSearch(arr)) );

    }
    public static int cyclicSearch(int[] arr){
        int i = 0;
        while (i < arr.length){
            if(arr[i] < arr.length){

            int corrIndex = arr[i] -1;
            if(arr[i] >0 && arr[i] != arr[corrIndex]){
                int temp = arr[corrIndex];
                arr[corrIndex] = arr[i];
                arr[i] = temp;
            }else{
                i++;
            }
            }else {
                i++;
            }
        }
        for(int j = 0; j < arr.length; j++){
            if(arr[j] != j+1) return j+1;
        }
        return arr.length;
    }
}
