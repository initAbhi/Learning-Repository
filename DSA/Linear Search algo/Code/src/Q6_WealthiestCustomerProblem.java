public class Q6_WealthiestCustomerProblem {
    public static void main(String[] args) {
        //Solution for the wealthiest custome problem on leetcode -
        int[][] accounts = {{45,56,32,45,56},{34,23,23,56,44,34},{54,34,65,88}};
        System.out.println(wealthOfWealthiestCustomer(accounts));

    }
    static int wealthOfWealthiestCustomer(int[][] arr){
        int max = 0;
        for(int i = 0; i<arr.length; i++){
            int currentCusWealth = 0;
            for(int j = 0; j<arr[i].length; j++){
                currentCusWealth = currentCusWealth + arr[i][j];
            }
            if(currentCusWealth > max) max = currentCusWealth;
        }
        return max;
    }
}
