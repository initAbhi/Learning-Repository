import java.util.Arrays;

public class MyCyclicSort {
    public static void main(String args[]){
        int[] nums = {5,6,3,4,2,1,7};
        System.out.println(Arrays.toString(cyclicSort(nums)));
    }

    public  static int[] cyclicSort(int[] nums){
        int i = 0;
        while(i < nums.length){
            if(nums[i] != i + 1){
                System.out.println("i running for " + i);
                int j = i + 1;
                while(j < nums.length) {
                    if(nums[j] == (i + 1) % nums.length){
                        System.out.println("j running for " + j);

                        System.out.println((i + 1) % nums.length);
                        int temp;
                        temp = nums[i];
                        nums[i] = nums[j];
                        nums[j] = temp;
                    }
                    j++;
                }
            }
            i++;
        }
        return nums;
    }
}
