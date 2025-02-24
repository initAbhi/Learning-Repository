import java.sql.SQLOutput;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Marks of 1st subject :");
        int sub1 = sc.nextInt();
        System.out.println("Enter Marks of 2nd Subject :");
        int sub2 = sc.nextInt();
        System.out.println("Enter Marks of 3rd Subject :");
        int sub3 = sc.nextInt();
        System.out.println("Enter Marks of 4rd Subject :");
        int sub4 = sc.nextInt();
        System.out.println("Enter Marks of 5rd Subject :");
        int sub5 = sc.nextInt();

        float percentage = ((sub1 + sub2 + sub3 + sub4 + sub5)/500.0f) * 100;
        System.out.println("Your percentage is : " + percentage);



    }
}