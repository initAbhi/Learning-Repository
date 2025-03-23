import java.util.Arrays;

public class findMissingNumber {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5,6,7,9,2};
//                    1,2,3,4,5,6,7
        System.out.println(findMissingNumber(nums));
        System.out.println(missingNumber(nums));
    }
    public static int findMissingNumber(int[] arr){
        int i = 0;
        while (i < arr.length){
            int corrIndex = arr[i] - 1;
            if(arr[i] < arr.length && arr[i] != arr[corrIndex]){
                int temp = arr[corrIndex];
                arr[corrIndex] = arr[i];
                arr[i] = temp;
            }else {
                i++;
            }
        }

        for(int j = 0; j < arr.length; j++)
            if(arr[j] != j + 1)
                return j + 1;
        return arr.length;
    }

    public static int missingNumber(int[] arr) {
        int i = 0;
        while(i < arr.length){
            int correct = arr[i]  - 1;
            if(arr[i] < arr.length && arr[i] != arr[correct]){
                int temp = arr[correct];
                arr[correct] = arr[i];
                arr[i] = temp;
            }else{
                i++;
            }
        }
        for(int index = 0; index < arr.length; index++){
            if(arr[index] != index + 1){
                return index + 1;
            }
        }
        return arr.length;
    }
}
