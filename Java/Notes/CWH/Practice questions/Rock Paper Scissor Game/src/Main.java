import java.util.Scanner;
import java.util.Random;

public class Main {
//0 - rock
    //1 - paper
    //2 - scissor
    static void checkWhoWon(int userInput, int compInput){
        if(userInput == compInput){
            String arr[] = {"Rock", "Paper", "Scissor"};
            System.out.println("Draw computer also chose" + arr[compInput]);
//            return;
        }else if(userInput == 0 && compInput == 2)
            System.out.println("User wins computer chose scissor");
        else if(userInput == 1 && compInput == 2)
            System.out.println("Computer wins computer chose scissor");
        else if (userInput == 2 && compInput == 0)
            System.out.println("Computer wins computer chose Rock");
        else if( userInput == 2 && compInput == 1)
            System.out.println("User wins computer chose paper");
        else if(userInput == 1 && compInput == 0)
            System.out.println("User wins computer chose Rock");
        else if(userInput == 0 && compInput == 1)
            System.out.println("Comp wins computer chose paper");

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random Random = new Random();
        System.out.println("Enter Your symbol : \n 0 for rock \n1 for paper\n2 for scissor");
        int userInput = sc.nextInt();
        int compInput = Random.nextInt(3);

        checkWhoWon(userInput, compInput);

        System.out.println(compInput);
    }
}