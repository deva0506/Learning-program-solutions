
public class FinancialForecaster {
	public static double forecastRecursive(double presentValue, double growthRate, int years) {
        if (years == 0) return presentValue;
        return (1 + growthRate) * forecastRecursive(presentValue, growthRate, years - 1);
    }

    // Optimized version using memoization
    public static double forecastMemo(double presentValue, double growthRate, int years, Double[] memo) {
        if (years == 0) return presentValue;
        if (memo[years] != null) return memo[years];

        memo[years] = (1 + growthRate) * forecastMemo(presentValue, growthRate, years - 1, memo);
        return memo[years];
    }

}
