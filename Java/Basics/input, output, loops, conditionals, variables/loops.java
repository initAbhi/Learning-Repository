

public class loops {
    public static void main(String args[]){
        // for(int i = 0; i<=10; i++){
        //     System.out.println(i);
        // }

        // int j = 0;
        // while(j<10){
        //     System.out.println(j);
        // }

        // int k = 0;
        // do { 
        //     System.out.println(k);
        // } while (k<=10);

        // for(int i = 0; i < 4; i++){
        //     for(int j = 0; j<5; j++){
        //         System.out.print("*");
        //     }
        //     System.out.print("\n");
        // }

        for(int i = 0; i < 4; i++){
            for(int j = 0; j<5; j++){
                if(i != 0 &&  i != 3){
                    if(j == 0 || j == 4){
                        System.out.print("*");
                    }
                    else{
                        System.out.print(" ");
                    }
                }else{
                    System.out.print("*");
                }
            }
            System.out.print("\n");
        }
    }
}
