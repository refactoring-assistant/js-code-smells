function fibonacci(n) {
    // The function calculates the Fibonacci series
    // The Fibonacci series starts with 0 and 1
    // Then each number is the sum of the two preceding ones
    // n is the number of elements in the series
    // n must be greater than 2
    // The function returns the series as an array
    // The array starts with 0 and 1
    // Then the remaining elements are filled in a loop
    // The loop starts at index 2 and goes up to n
    // In each iteration of the loop, the current element is set to the sum of the two preceding ones
    var series = [0, 1];
    for (var i = 2; i < n; i++) {
        series[i] = series[i-1] + series[i-2];
    }
    return series;
}