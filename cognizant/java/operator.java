public class operator {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;  // Multiplication has higher precedence than addition
        System.out.println("10 + 5 * 2 = " + result1 + " (Multiplication is performed first)");
        
        int result2 = (10 + 5) * 2;  // Parentheses change the order
        System.out.println("(10 + 5) * 2 = " + result2 + " (Parentheses have highest precedence)");
        
        int result3 = 10 + 5 * 2 - 8 / 4;
        System.out.println("10 + 5 * 2 - 8 / 4 = " + result3 + 
                          " (* and / have higher precedence than + and -, evaluated left to right)");
    }
}