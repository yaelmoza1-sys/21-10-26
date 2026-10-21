let grid=[
["a","b","x","X","B"],
["D","X","f","g","x"],
["X","k","M","s","w"],
["X","X","F","d","w"],
["a","t","r","W","X"]
]
let count=0

function Xcount(grid)
{
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === "X"){
                console.log("X found at row:", i, "and column:", j)                
                count++
            }
        }
    }
    console.log("X appears", count, "times.")
}
Xcount(grid)