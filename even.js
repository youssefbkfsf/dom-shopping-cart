function filterOddGreaterThanEven(arr) {
  const filteredArray = arr.filter(num => num % 2 !== 0 && num > 2); // Filtering odd numbers greater than even numbers

  return filteredArray;
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filterOddGreaterThanEven(inputArray);
console.log("Input Array:", inputArray);
console.log("Filtered Array (Odd > Even):", result);
