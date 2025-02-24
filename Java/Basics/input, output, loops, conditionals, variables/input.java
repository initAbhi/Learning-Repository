import java.util.Scanner;

public class input {
    public static void main(String args[]){

        // Scanner sc = new Scanner(System.in);
        // String singleWord = sc.next();
        // System.out.println(singleWord);



        // System.out.print("Enter line:");
        // String fullLine = sc.nextLine();
        // System.out.print(fullLine);

        //take two variables and print their sum 
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first no.");
        int a = sc.nextInt();
        System.out.println("Enter second no.");
        int b = sc.nextInt();

        System.out.println("sum is" + (a+b));
    }
}
