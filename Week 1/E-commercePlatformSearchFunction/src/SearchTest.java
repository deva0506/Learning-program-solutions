
public class SearchTest {

	public static void main(String[] args) {
		Product[] products = {
	            new Product(101, "Shoes", "Footwear"),
	            new Product(102, "T-shirt", "Clothing"),
	            new Product(103, "Laptop", "Electronics"),
	            new Product(104, "Mobile", "Electronics"),
	            new Product(105, "Socks", "Footwear")
	        };

	        String searchTarget = "Laptop";

	        System.out.println("🔎 Linear Search:");
	        Product result1 = SearchUtility.linearSearch(products, searchTarget);
	        System.out.println(result1 != null ? result1 : "Product not found.");

	        System.out.println("🔎 Binary Search:");
	        Product result2 = SearchUtility.binarySearch(products, searchTarget);
	        System.out.println(result2 != null ? result2 : "Product not found.");

	}

}
