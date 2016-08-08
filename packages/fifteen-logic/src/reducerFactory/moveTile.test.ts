import test, { ContextualTestContext } from 'ava'

import { List } from 'immutable'

import { Grid } from './grid'
import ActionCreator from './actionCreator'
import MoveTileAction from './moveTileAction'
import moveTile from './moveTile'

test('#moveTile for adjacent locations', (t: ContextualTestContext) => {
  let mockGrid: Grid = {
    board: List.of(0, 1, 2, 3, 4, 5, 6, 7, 8),
    size: 3
  }

  const action: MoveTileAction = ActionCreator.moveTile(3)
  mockGrid = moveTile(mockGrid, action)

  t.is(mockGrid.board.get(3), 0)
  t.is(mockGrid.board.get(0), 3)
})

test('#moveTile for adjacent locations', (t: ContextualTestContext) => {
  let mockGrid: Grid = {
    board: List.of(0, 1, 2, 3, 4, 5, 6, 7, 8),
    size: 3
  }

  const action: MoveTileAction = ActionCreator.moveTile(6)
  mockGrid = moveTile(mockGrid, action)

  t.is(mockGrid.board.get(6), 6)
  t.is(mockGrid.board.get(0), 0)
})
