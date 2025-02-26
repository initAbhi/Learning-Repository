public class Q3_FindingMininmumNumber {
    public static void main(String[] args){
        int[] arr = {45,34,6,7,873,34};
        System.out.println(findMin(arr));
    }
    static int findMin(int[] arr){
        int min = arr[0];
        for(int el : arr){
            min = el<min ? el : min;
        }
        return min;
    }
}
