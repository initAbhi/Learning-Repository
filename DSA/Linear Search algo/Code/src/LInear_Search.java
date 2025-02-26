public class LInear_Search {
    public static void main(String[] args){
        //searching a element in array using linear search -
        int[] arr = {3,2,6,8,67,34,23,9,7};
        int target = 88;
        System.out.println(linearSearch(arr, target));


    }

    static int linearSearch(int[] arr, int target){
        for(int i = 0; i < arr.length; i++){
            if(arr[i] == target){
                return i;
            }

        }
        return -1;
    }
}
