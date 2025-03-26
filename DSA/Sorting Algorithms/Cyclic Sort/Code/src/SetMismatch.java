import java.util.Arrays;

public class SetMismatch {
    //You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
    public static void main(String[] args) {
        int[] nums = {1,2,2,4};
        System.out.println(Arrays.toString(cyclicSearch(nums)));
//        System.out.println(cyclicSearch(nums));
    }
    public static int[] cyclicSearch(int[] arr) {
        int i = 0;
        while (i < arr.length){
            int corrIndex = arr[i] - 1;
            if(arr[i] != arr[corrIndex]){
                int temp = arr[corrIndex];
                arr[corrIndex] = arr[i];
                arr[i] = temp;
            }else{
//                if(arr[i] != i + 1) return new int[] {arr[i], i+1};
                i++;
            }
        }
        for(int j = 0; j < arr.length; j++)
            if(arr[j] != j+1)
                return new int[] {arr[j], j+1};
        return arr;
    }
}
