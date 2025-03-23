import java.util.ArrayList;
import java.util.Arrays;

public class FindAllMissingNumbers {
    public static void main(String[] args) {
        int[] nums = {1,2,7,4,5,6,7};
//                    1,2,3,4,5,6,7
        System.out.println(findMissingNumber(nums).toString());
    }
    public static ArrayList<Integer> findMissingNumber(int[] arr){
        int i = 0;
        int missingNumber = 0;
        while (i < arr.length){
            int corrIndex = arr[i] - 1;
            if(arr[i] != arr[corrIndex]){
                int temp = arr[corrIndex];
                arr[corrIndex] = arr[i];
                arr[i] = temp;
            }else {
                i++;
            }
        }
        System.out.println(Arrays.toString(arr));
        ArrayList<Integer> ansList = new ArrayList<Integer>();
        for(int j = 0; j < arr.length; j++){
            if(arr[j] != j + 1){
               ansList.add(j + 1);
            }
        }


        return ansList;
    }
}
