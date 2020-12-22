// YOUR CODE BELOW
function makeGrid(dim1, dim2) {
    let grid = [];

    for (let i = 0; i < dim2; i++) {
        let row = [];

        for (let j = 0; j < dim1; j++) {
            row.push(j + 1);
        }
        grid.push(row);
    }
    
    return grid;
}