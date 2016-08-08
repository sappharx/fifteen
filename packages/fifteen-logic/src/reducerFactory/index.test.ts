import test, { ContextualTestContext } from 'ava'

import { Reducer } from 'redux'

import { Grid } from './grid'
import ActionCreator from './actionCreator'
import MoveTileAction from './moveTileAction'

import reducerFactory from './index'

test('#reducerFactory move tile action', (t: ContextualTestContext) => {
  const reducer: Reducer<Grid> = reducerFactory(3)

  // initialize state
  let grid: Grid = reducer()

  // move tile
  const tile: number = grid.board.get(7)
  const action: MoveTileAction = ActionCreator.moveTile(tile)

  grid = reducer(grid, action)

  t.is(grid.board.indexOf(0), 7)
  t.is(grid.board.indexOf(tile), 8)
})
