import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class LambdaSorting {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob", "Charlie", "Diana");
        
        // Sort using lambda expression
        Collections.sort(names, (a, b) -> a.compareTo(b));
        
        System.out.println("Sorted names:");
        names.forEach(System.out::println);
    }
}