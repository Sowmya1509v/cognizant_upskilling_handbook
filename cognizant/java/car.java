public class car {
    String make;
    String model;
    int year;
    
    public car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    public void displayDetails() {
        System.out.println("Car Details:");
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
    
    public static void main(String[] args) {
        car car1 = new car("Toyota", "Camry", 2020);
        car car2 = new car("Honda", "Civic", 2018);
        
        car1.displayDetails();
        car2.displayDetails();
    }
}