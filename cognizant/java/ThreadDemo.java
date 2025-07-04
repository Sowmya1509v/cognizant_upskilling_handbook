public class ThreadDemo {
    public static void main(String[] args) {
        Thread thread1 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread 1: Message " + i);
                try { Thread.sleep(500); } catch (InterruptedException e) {}
            }
        });
        
        Thread thread2 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread 2: Message " + i);
                try { Thread.sleep(500); } catch (InterruptedException e) {}
            }
        });
        
        thread1.start();
        thread2.start();
    }
}