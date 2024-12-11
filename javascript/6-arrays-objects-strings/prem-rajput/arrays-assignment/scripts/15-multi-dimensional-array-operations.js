function transposeMatrix() {
    const input = document.getElementById("matrixInput").value;
    const matrix = JSON.parse(input);
    const transposed = matrix[0].map((_, colIndex) =>
        matrix.map((row) => row[colIndex])
    );
    document.getElementById("result").innerText = JSON.stringify(
        transposed,
        null,
        2
    );
}
