import java.util.HashMap;
import java.util.Scanner;

public class HashMapDemo {
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);
        
        // Adding entries
        studentMap.put(101, "Alice");
        studentMap.put(102, "Bob");
        studentMap.put(103, "Charlie");
        
        // User interaction
        System.out.print("Enter student ID to lookup: ");
        int id = scanner.nextInt();
        
        String name = studentMap.get(id);
        if (name != null) {
            System.out.println("Student name: " + name);
        } else {
            System.out.println("Student ID not found");
        }
    }
}