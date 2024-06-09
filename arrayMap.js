function hasSubarrayWithSum(arr, target) {
    let cumulativeSum = 0;
    const sumMap = new Map();

    // Initialize the map with zero sum at index -1
    sumMap.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i];

        if (sumMap.has(cumulativeSum - target)) {
            return true;
        }

        // Store the cumulative sum with the corresponding index
        if (!sumMap.has(cumulativeSum)) {
            sumMap.set(cumulativeSum, i);
        }
    }

    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true
