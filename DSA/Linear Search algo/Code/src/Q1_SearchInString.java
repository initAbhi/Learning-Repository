public class Q1_SearchInString {
        public static void main(String[] args){
            String arr = "He is a good guy";
            char target = 'i';
            System.out.println(searchForChar(arr,target));

        }

        static int searchForChar(String arr, char target){
          for(int i = 0; i < arr.length(); i++){
              if(arr.charAt(i) == target) return i;
          }
          return  -1;
        }
}
