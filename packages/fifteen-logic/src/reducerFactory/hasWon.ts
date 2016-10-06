import { List } from 'immutable'

export default function hasWon(board: List<number>): boolean {
    if (board.get(board.size - 1) !== 0) {
        return false
    }
    for (let i: number = 0; i < board.size - 2; i++) {
        if ((board.get(i) !== i + 1)) {
            return false
        }
    }
    return true
}
