public class Car {
    String name;
    String make;
    int year;

    Car(String name, String make, int year){
        System.out.println("Constructor Called");
        this.name = name;
        this.make = make;
        this.year = year;
    }
    void carDetails(){
        System.out.println("Car name is " + this.name + "\n your car is made by " + this.make+ " in the year " +this.year);
    }

    void drive(){
        System.out.println("Driving");
    }
    void brake(){
        System.out.println("Applying brakes");
    }
}
