import java.util.*;

public class Main {
    public static void main(String[] args) {
//
//        Car myCar1 = new Car("Innova", "Toyota", 2023);
//        myCar1.drive();
//        myCar1.carDetails();
//        Human Rohan = new Human("Rohan", 23);
//        Rohan.getDetails();
//
//        Human Rahul = new Human(Rohan);
//        Rahul.getDetails();

        Friends Rohan = new Friends("Rohan");
        Friends Rahul = new Friends("Rahul");

        System.out.println(Rohan.numberOfFriends);
        System.out.println(Friends.numberOfFriends);
    }
}