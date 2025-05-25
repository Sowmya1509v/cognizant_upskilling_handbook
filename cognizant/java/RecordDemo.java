import java.util.List;
import java.util.stream.Collectors;

record Person(String name, int age) {}

public class RecordDemo {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 25),
            new Person("Bob", 30),
            new Person("Charlie", 20),
            new Person("Diana", 35)
        );
        
        // Print all people
        people.forEach(System.out::println);
        
        // Filter people over 25
        List<Person> filtered = people.stream()
                .filter(p -> p.age() > 25)
                .collect(Collectors.toList());
        
        System.out.println("\nPeople over 25:");
        filtered.forEach(System.out::println);
    }
}