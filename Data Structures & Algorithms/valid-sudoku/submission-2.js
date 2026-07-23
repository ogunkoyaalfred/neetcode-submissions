class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    /**
     * initialize your three lists of 9 empty sets
       loop over every cell
       skip empty cells
       compute box index
       check for duplicates / return false
       add to sets
       return true at the end
     */
    isValidSudoku(board) {
        const rowSet = Array.from({length: 9}, ()=> new Set())
        const colSet = Array.from({length: 9}, ()=> new Set())
        const boxSet = Array.from({length: 9}, ()=> new Set())

        for(let i=0; i<board.length; i++){
            for(let j=0; j<board[i].length; j++){
                if (board[i][j] === "."){
                    continue
                }
                if (rowSet[i].has(board[i][j])){
                    return false
                } else{
                    rowSet[i].add(board[i][j])
                }
                if (colSet[j].has(board[i][j])){
                    return false
                } else{
                    colSet[j].add(board[i][j])
                }
                if (boxSet[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(board[i][j])){
                    return false
                } else{
                    boxSet[Math.floor(i / 3)* 3 + Math.floor(j / 3)].add(board[i][j])
                }
            }
        }

        return true
    }
}
