import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FindDuplicateNumber {
    public static void main(String[] args) {
        int[] nums = {4,3,2,7,8,2,3,1,8};
        int[] nums2 = {3, 1, 3, 4, 2};
        int[] nums3 = {5, 3, 4, 1, 3, 6};
        int[] nums4 = {2, 2,4,4};
        System.out.println(findAllDuplicateNumber(nums).toString());

//        System.out.println(findDuplicate(nums));
//        System.out.println(findDuplicate(nums2));
//        System.out.println(findDuplicate(nums3));
//        System.out.println(findDuplicate(nums4));
    }

    public static List<Integer> findAllDuplicateNumber(int[] arr) {
        int i = 0;
            List<Integer> ansList = new ArrayList<>();
        while (i < arr.length) {

            int corrIndex = arr[i] - 1;

            if (arr[i] != arr[corrIndex]) {
                int temp = arr[corrIndex];
                arr[corrIndex] = arr[i];
                arr[i] = temp;
            } else {
                i++;
            }
        }
        for(int index = 0; index < arr.length; index++){
            if(arr[index] != index + 1)
                ansList.add(arr[index]);
        }
            return ansList;

    }
    public static int findDuplicate(int[] arr) {
        int i = 0;
        while (i < arr.length){

            int corrIndex = arr[i] - 1;

            if(arr[i] < arr.length && arr[i] != arr[corrIndex]){
                int temp = arr[corrIndex];
                arr[corrIndex] = arr[i];
                arr[i] = temp;
            }else {
                if(arr[i] != i+1) return arr[i];
                i++;
            }
        }
        return -1;
    }

}
