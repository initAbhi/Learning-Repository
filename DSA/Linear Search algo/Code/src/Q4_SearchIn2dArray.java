import java.util.ArrayList;
import java.util.Arrays;

public class Q4_SearchIn2dArray {
    public static void main(String[] args){
        //Searching for a number in 2d array.
        int[][] arr = {{12,4,6,7,5}, {43,54,6,576,6,}, {3,566,45,34,45}};
        int[] result = Search(arr, 45);
        System.out.println(Arrays.toString(result));
        //Finding maximum in 2d arrays
        System.out.println(max(arr));

    }
    static int max(int[][] arr) {
        int max = arr[0][0];
        for(int[] el : arr) {
            for(int ele : el) {
                max = ele > max ? ele : max;
            }
        }
        return  max;
    }


    static int[] Search(int[][] arr, int target){
        for(int i = 0; i<arr.length; i++){
            for(int j = 0; j < arr[i].length; j++){
                if(arr[i][j] == target)
                    return new int[]{i,j};
            }
        }
            return new int[]{-1};
    }
}
