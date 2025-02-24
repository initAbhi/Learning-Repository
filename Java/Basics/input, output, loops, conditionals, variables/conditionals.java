import java.util.Scanner;

public class conditionals{
    public static void main(String args[]){
        // Scanner sc = new Scanner(System.in);
        // int age = sc.nextInt();
        // if(age < 18){
        //     System.out.println("Child");
        // }else{
        //     System.out.println("Adult");
            
        // }

        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        switch (a) {
            case 1 -> System.out.println("Hello");
            case 2 -> System.out.println("Namaste");
            case 3 -> System.out.println("Bonjour");
            default -> System.out.println("Wrong input");
        }

    }
}