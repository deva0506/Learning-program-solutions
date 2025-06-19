
public class ForecastTest {

	public static void main(String[] args) {
		double presentValue = 10000.0;
        double growthRate = 0.05;
        int years = 5;

        double forecast = FinancialForecaster.forecastRecursive(presentValue, growthRate, years);
        System.out.println("Recursive Forecast after " + years + " years: ₹" + forecast);

        Double[] memo = new Double[years + 1];
        double forecastMemoized = FinancialForecaster.forecastMemo(presentValue, growthRate, years, memo);
        System.out.println("Optimized Forecast with Memoization: ₹" + forecastMemoized);

	}

}
