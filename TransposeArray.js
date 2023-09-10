function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const transposedMatrix = new Array(cols);
    
    for (let col = 0; col < cols; col++) {
        transposedMatrix[col] = new Array(rows);
        for (let row = 0; row < rows; row++) {
            transposedMatrix[col][row] = matrix[row][col];
        }
    }

    return transposedMatrix;
}

function printMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    console.log("Matrix:");
    for (let row = 0; row < rows; row++) {
        let rowString = "";
        for (let col = 0; col < cols; col++) {
            rowString += matrix[row][col] + "\t";
        }
        console.log(rowString);
    }
}

function main() {
    const n = 3; // Change n to the desired size of the square matrix (e.g., 3x3)
    const originalArray = [];

    // Initialize the original array with values (for demonstration purposes)
    let value = 1;
    for (let row = 0; row < n; row++) {
        originalArray[row] = [];
        for (let col = 0; col < n; col++) {
            originalArray[row][col] = value++;
        }
    }

    console.log("Original Matrix:");
    printMatrix(originalArray);

    // Transpose the matrix
    const transposedArray = transposeMatrix(originalArray);

    console.log("Transposed Matrix:");
    printMatrix(transposedArray);
}

main();
