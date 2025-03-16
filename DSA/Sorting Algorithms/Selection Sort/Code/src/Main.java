import java.util.Arrays;

public class Main {
    static int[] SelectionSort(int[] arr){
        for(int i = 0; i < arr.length;i++){
            for(int j = i+1; j < arr.length; j++){
                int min = Integer.MIN_VALUE;
                if(arr[i] > arr[j]){
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
    public static void main(String[] args) {
        int[] arr = {6,5,7,2,9,3};
        int[] ans = SelectionSort(arr);
        System.out.println(Arrays.toString(ans));
    }
}