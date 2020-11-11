// YOUR CODE BELOW
function removeColumns(grid, n) {

    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];

        for (let j = 0; j < n; j++) {
            row.pop();
        }
    }
    return grid;
}