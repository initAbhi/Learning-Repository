public class Q2_SearchInRange {
    public static void main(String[] args) {
        //Search in range

            String arr = "He is a good guy";
            char target = 'a';
            System.out.println(searchInRange(arr,target,3,7));

        }

        static int searchInRange(String arr, char target,int start, int end){
            for(int i = start; i <= end; i++){
                if(arr.charAt(i) == target) return i;
            }
            return  -1;
        }
    }
