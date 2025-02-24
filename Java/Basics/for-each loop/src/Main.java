import java.util.*;

public class Main {
    public static void main(String[] args) {

//        String[] animals = {"cat", "dog", "lion", "giraffe"};
        ArrayList<String> animals = new ArrayList<>();

        animals.add("Lion");
        animals.add("Dog");
        animals.add("Cat");

        for(String i : animals){
        System.out.println(i);
        }
    }
}