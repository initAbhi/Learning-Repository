
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        //Arrays
//    int[] a = new int[5];
//    String[] b = new String[3];

        Scanner in = new Scanner(System.in);
//        for(int i = 0; i < a.length; i++){
////            System.out.println("enter number");
//            a[i] = in.nextInt();
////            in.nextLine();
//        }
//        for(int el : a){
//            el = in.nextInt();
//        } //I cannot use for each loop for assigning values in array
//        for(int element : a){
//            System.out.print(element + " ");
//        }
//        System.out.println(b[2]);



        // 2D ARRAYS -
//        int[][] arr = new int[3][3];
//
//        for(int i = 0; i < arr.length; i++){
//            for(int j = 0; j < arr[i].length; j++){
//                arr[i][j] = in.nextInt();
//            }
//        }
//        for (int[] ints : arr) {
//            for (int anInt : ints) {
//                System.out.print(anInt);
//            }
//            System.out.println();
//        }
//        for(int i = 0; i < arr.length; i++){
//
//                System.out.print(Arrays.toString(arr[i]));
//
//        }


        //Array Lists -
//        ArrayList<ArrayList<Integer>> list = new ArrayList<>();
//
//        for(int i = 0; i< 3; i++){
//            list.add(new ArrayList<>());
//        }
//
//        for(int i = 0; i < 3; i++){
//            for(int j = 0; j < 3; j++){
//
//            list.get(i).add(in.nextInt());
//            }
//        }
//        System.out.println(list);


        //PRACTICE QUESTIONS WITH ARRAYS
        //Q1 Swap -
//        int[] arr = {3,4,5,6,7};
//        swap(arr, 0, 4);
//        System.out.println(Arrays.toString(arr));

        //Q2 Max -
//        int[] arr = {45,34,76,56,43, 99,4,76};
//        System.out.println(max(arr));

        //Q3 Max in rage -
//        int[] arr = {45,34,56,7,63,42,78,45};
//        System.out.println(max(arr, 0,6));

        //Q4 Reversing an array -
        int[] arr = new int[5];
        arr = new int[]{4, 3, 7, 6, 8};
        reverseArray(arr);
        System.out.println(Arrays.toString(arr));

    }
    static void reverseArray(int[] arr){
        //Using 2 Pointer methods
//        for(int i = 0 ; i < arr.length / 2; i++){
////            swap(arr,i, arr.length - i - 1);
//            arr[i] = arr[i] + arr[arr.length - i -1];
//            arr[arr.length - i - 1] = arr[i] - arr[arr.length - i - 1];
//            arr[i] = arr[i] - arr[arr.length - i - 1];
//        }

        //using while loop
        int start = 0;
        int end = arr.length-1;
        while(start < end){
            swap(arr, start , end);
            start++;
            end--;
        }

    }
    static int max(int[] arr, int start, int end){
        int max = 0;
        for(int i = start; i <= end; i++){
            max = (arr[i] > max) ? arr[i] : max;
//            if(arr[i] > max) max = arr[i];
        }
        return  max;
    }
    static int max(int[] arr){
        int max = 0;
        for(int i = 0; i< arr.length; i++){
            if(arr[i] > max) max = arr[i];
        }
        return max;
    }
    static void swap(int[] arr, int a ,int b){
        arr[a] = arr[a] + arr[b];
        arr[b] = arr[a] - arr[b];
        arr[a] = arr[a] - arr[b];
    }
}

