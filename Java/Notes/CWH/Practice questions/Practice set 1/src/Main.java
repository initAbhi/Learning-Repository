import java.util.Scanner;

public class Main {
    static int sum(int a, int b , int c){
        return a + b + c;
    }
    public static void main(String[] args) {

        //wap to sum three numbers
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Enter first number :");
//        int num1 = sc.nextInt();
//        System.out.println("Enter the second number :");
//        int num2 = sc.nextInt();
//        System.out.println("Enter the third number :");
//        int num3 = sc.nextInt();
//        System.out.println("Sum of your numbers is :" + sum(num1, num2, num3));

        //wap to calculate CGPA out of 2 subjects -
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Enter marks of first subject");
//        int sub1 = sc.nextInt();
//        System.out.println("Enter marks for 2nd subject :");
//        int sub2 = sc.nextInt();
//        System.out.println("Enter marks for 3nd subject :");
//        int sub3 = sc.nextInt();
//
//        float CGPA = (sub1 + sub2 + sub3)/300.0f* 100;
//        System.out.println("Your CGPA is : " + CGPA);

        //WAP TO DETECT WHETHER A NUMBER ENTERED BY THE USER IS INTEGER OR NOT.
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number :");
        int a = sc.nextInt();
        boolean wasNumber = sc.hasNextInt();
        if(wasNumber){
            System.out.println("Its a number");
        }else {
            System.out.println("Not a number");
        }
    }
}