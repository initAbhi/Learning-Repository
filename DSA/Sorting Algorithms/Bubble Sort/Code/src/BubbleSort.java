import javax.swing.*;
import java.util.Arrays;

public class BubbleSort {
    public static int[] BubbbleSortAlgo(int[] arr){
        boolean swapped;
        for(int i = 0; i <= arr.length -1; i++){
            swapped = false;
            for(int j = 0; j<= arr.length - i -2; j++){
                if(arr[j]>=arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // If no swaps occurred, array is already sorted
        }
            return arr;
    }
    public static void main(String[] args) {
        int[] arr = {5,4,6,6,8,2};
        int[] sortedArr = BubbbleSortAlgo(arr);
        System.out.println(Arrays.toString(sortedArr));
    }
}