import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
//        double x = 3.14;
//        double y = -10;
//        double a = Math.max(x,y);
//        double b = Math.min(x,y);
//        double c = Math.abs(x);
//        double d = Math.sqrt(y);
//        double e = Math.round(x) ;// used to round down - 3
//        double f = Math.ceil(x); // used to round up - 4


        // program to calculate hypotenuse of a triangle
        System.out.println("Enter the fist side : ");
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter the second side :");
        int b = sc.nextInt();

        double hypotenuse = (a * a) + (b*b);
        System.out.println("Hypotenuse is - " + hypotenuse);
    }
}