import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] nums = {5,3,4,1,2};
//                    1,2,3,4,5,6,7
        System.out.println(Arrays.toString(cyclicSort(nums)));
    }
    public static int[] cyclicSort(int[] arr){
        int i = 0;
        while(i < arr.length){
            int corIndex = arr[i] - 1;
            if(arr[i] != arr[corIndex]){
                int temp = arr[corIndex];
                arr[corIndex] = arr[i];
                arr[i] = temp;
            }else{
                i++;
            }
        }
        return arr;
    }

}