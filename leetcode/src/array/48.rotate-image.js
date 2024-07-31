// Learn different rotation pattern

var rotate = function(matrix) {
    let matrixlen = matrix.length;
    for(let i = 0; i < matrixlen; i++) {
        for(let j = i + 1; j < matrixlen; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;   
        }
    }
    for (let i = 0; i < matrixlen; i++) {
        matrix[i].reverse();
    }
    return matrix
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));