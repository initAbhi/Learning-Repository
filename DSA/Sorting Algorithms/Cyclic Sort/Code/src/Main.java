// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;

public class Main{

    public static int[] selectionSort( int[] arr){
        int min = 0;
        int ind = 0;
        for(int i = 0; i< arr.length; i++){
            min = arr[i];
            ind = i;
            for(int j = i; j < arr.length -1; j++){
                if(arr[j] < min){
                    min = arr[j];
                    ind = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[ind];
            arr[ind] = temp;
//            System.out.println(Arrays.toString(arr));
        }
        return arr;
    }

    public static void main(String args[]){
        int[] arr = {6,4,8,2,9};
        System.out.println(Arrays.toString(selectionSort(arr)));
    }
}