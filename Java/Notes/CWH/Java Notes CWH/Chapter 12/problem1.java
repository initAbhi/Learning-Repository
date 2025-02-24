package calc;


class Calculator{
    public void calculate(int a, int b){
        System.out.println("Your result is: " + a+b);
    }
}

class ScCalculator{
    public void calculate(int a, int b){
        System.out.println("Your result is: " + Math.sin(a+b));
    }
}

class HyCalculator{
    public void calculate(int a, int b){
        System.out.println("Your result is: " + a+b);
        System.out.println("Your result is: " + Math.sin(a+b));
    }
}

public class problem1 {
     
    public static void main(String[] args) {
        System.out.println("I am main method!");
    }
}
