// Test case 1: Addition
console.log(calculator(2, '+', 3)); // Output: 5

// Test case 2: Subtraction
console.log(calculator(5, '-', 2)); // Output: 3

// Test case 3: Multiplication
console.log(calculator(4, '*', 2)); // Output: 8

// Test case 4: Division
console.log(calculator(10, '/', 2)); // Output: 5

// Test case 5: Division by zero
console.log(calculator(10, '/', 0)); // Output: "Error: Division by zero is not allowed."

// Test case 6: Invalid operator
console.log(calculator(5, '%', 2)); // Output: "Error: Invalid operator."