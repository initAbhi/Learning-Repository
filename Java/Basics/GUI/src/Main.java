import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) {

//        String name = JOptionPane.showInputDialog("Enter your name");
//        JOptionPane.showMessageDialog(null, "Hello " + name);

        //parsing to int - as the showInputDailog will return a string we need to convert it into integer
        int age = Integer.parseInt(JOptionPane.showInputDialog("Enter your age -"));
        JOptionPane.showMessageDialog(null, "Your age is : "+ age);



    }
}