public class Human
{
    String name;
    int age;

    Human(String name, int age){
        this.name = name;
        this.age = age;
    }

    Human(Human dummy){
        this.name = dummy.name;
        this.age = dummy.age;
    }

    void getDetails(){
        System.out.println("Your name is " + name + " and your age is "+ age);
    }
}
