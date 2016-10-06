import test, { ContextualTestContext } from 'ava'

import { List } from 'immutable'

import hasWon from './hasWon'

test('#hasWon winning', (t: ContextualTestContext) => {
    const board: List<number> =  List.of(1, 2, 3, 4, 5, 6, 7, 8, 0)

    t.is(hasWon(board), true)
})

test('#hasWon losing', (t: ContextualTestContext) => {
    const board: List<number> =  List.of(0, 8, 1, 2, 3, 4, 5, 6, 7)

    t.is(hasWon(board), false)
})

test('#hasWon losing with zero in last index', (t: ContextualTestContext) => {
    const board: List<number> =  List.of(8, 1, 2, 3, 4, 5, 6, 7, 0)

    t.is(hasWon(board), false)
})
