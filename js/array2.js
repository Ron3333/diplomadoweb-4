let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

console.log(matrix[1][1]);

console.log("********** FOR START ***********");

// Iterar sobre un array de dos dimensiones
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
console.log("********** FOR END ***********");