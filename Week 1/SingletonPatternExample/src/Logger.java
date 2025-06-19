
public class Logger {
	private static Logger logger=null;
	private Logger() {
		
	}
	public static Logger getInstance() {
		if(logger==null) {
			logger=new Logger();
		}
		return logger;
	}
	public void display(String str) {
		System.out.println(str);
	}

}
