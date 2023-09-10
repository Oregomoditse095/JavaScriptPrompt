# TransposeArrayValues
One of my JavaScript practice codes

```markdown
# Matrix Transposition and Printing

This JavaScript code includes functions to transpose a square matrix and print both the original and transposed matrices. The main purpose of this code is to demonstrate how to perform matrix transposition in JavaScript.

## TransposeMatrix Function

The `transposeMatrix` function takes a 2D array (matrix) as input and returns a new matrix that is the transpose of the input matrix. The transpose operation swaps rows with columns and columns with rows.

```javascript
function transposeMatrix(matrix) {
    // Implementation details...
}
```

## PrintMatrix Function

The `printMatrix` function takes a 2D array (matrix) as input and prints its elements in a tabular format to the console. It is used to display both the original and transposed matrices.

```javascript
function printMatrix(matrix) {
    // Implementation details...
}
```

## Usage

To use this code, you can follow these steps:

1. Adjust the value of `n` to set the desired size of the square matrix (e.g., 3x3). The code initializes the `originalArray` with values for demonstration purposes.

2. Run the `main` function to perform the following actions:
   - Initialize the original matrix.
   - Display the original matrix using the `printMatrix` function.
   - Transpose the matrix using the `transposeMatrix` function.
   - Display the transposed matrix using the `printMatrix` function.

```javascript
function main() {
    const n = 3; // Change n to the desired size of the square matrix (e.g., 3x3)
    const originalArray = [];

    // Initialize the original array with values (for demonstration purposes)
    // Implementation details...

    console.log("Original Matrix:");
    printMatrix(originalArray);

    // Transpose the matrix
    const transposedArray = transposeMatrix(originalArray);

    console.log("Transposed Matrix:");
    printMatrix(transposedArray);
}

main();
```
