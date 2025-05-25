public class typecast{
    public static void main(String[] args) {
        // Double to int
        double doubleNum = 123.456;
        int intNum = (int) doubleNum;
        System.out.println("Double to int: " + doubleNum + " -> " + intNum);
        
        // Int to double
        int anotherInt = 100;
        double anotherDouble = anotherInt;
        System.out.println("Int to double: " + anotherInt + " -> " + anotherDouble);
    }
}