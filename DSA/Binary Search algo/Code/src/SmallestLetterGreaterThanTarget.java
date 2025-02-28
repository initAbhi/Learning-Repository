public class SmallestLetterGreaterThanTarget {
    public static void main(String[] args) {
        char[] arr = {'e','e','e','e','e','e','n','n','n','n'};
        char target = 'e';
        System.out.println(ceilingChar(arr, target));

    }
    static char ceilingChar(char[] arr,char target){
        int start = 0;
        int end = arr.length-1;
            int mid = start + (end - start)/2;
        while (start <= end){
            if((int)arr[mid] == (int)target){
                if(arr[mid] == arr[arr.length - 1]){
                    return arr[0];
                }
                if(mid == arr.length - 1){

                    return arr[mid];
                }else{

                return arr[mid + 1];
                }
            }
            if((int)arr[mid] > (int)target) end = mid -1;
            if((int)arr[mid] < (int)target) start = mid +1;
            mid = start + (end - start)/2;
        }
        if(start > arr.length - 1) start = 0;
        return arr[start];
    }
}
