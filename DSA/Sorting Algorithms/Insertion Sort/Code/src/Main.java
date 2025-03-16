import java.util.Arrays;

public class Main {
    static int[]  InsertionSort(int[] arr){
        for(int i = 1; i < arr.length; i++){
            int j = i-1;
            int target = arr[i];
            while(arr[j] > arr[i]){
                arr[j+1] = arr[j];
                arr[j] = target;
                if(j>0) j--;
            }
        }
        return arr;
    }
    public static void main(String[] args) {
        int[] arr = {5,4,6,7,8,2};
        int[] sortedArr = InsertionSort(arr);
        System.out.println(Arrays.toString(sortedArr));
    }
}