function analyzeData(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }

    let mean = sum / data.length;
    
    let deviations = [];
    for (let i = 0; i < data.length; i++) {
        deviations.push(Math.pow(data[i] - mean, 2));
    }

    let variance = 0;
    for (let i = 0; i < deviations.length; i++) {
        variance += deviations[i];
    }
    variance = variance / (deviations.length - 1);

    let standardDeviation = Math.sqrt(variance);

    let min = data[0], max = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i] < min) min = data[i];
        if (data[i] > max) max = data[i];
    }

    return {
        sum: sum,
        mean: mean,
        variance: variance,
        standardDeviation: standardDeviation,
        min: min,
        max: max
    };
}