
public class SingletonPattern {

	public static void main(String[] args) {
		Logger logger1 = Logger.getInstance();
        logger1.display("Message from logger1");

        Logger logger2 = Logger.getInstance();
        logger2.display("Message from logger2");

        if (logger1 == logger2) {
            System.out.println("Same Logger instance used (Singleton verified).");
        } else {
            System.out.println("Different Logger instances (Singleton failed).");
        }

	}

}
