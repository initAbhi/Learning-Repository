public class Q5_NumberWithEvenDigitOfNumbers {
    public static void main(String[] args){
        //Given an array nums of integers,  return how many of them contain an even number of digits

        int[] nums = {2,3,4,456,453,567,34567};
        System.out.println(searchForEvenDig(nums));
    }
    static int searchForEvenDig(int[] arr){
        int temp;
        int count = 0;
        int numOfDigits = 0;
        for(int i = 0; i< arr.length; i++){

            int val = arr[i];

            while(val != 0){
              val = val/10;
              count++;
            }
            if(count%2 == 0){
                numOfDigits++;
            }
            count = 0;
        }
        return numOfDigits;
    }
}
