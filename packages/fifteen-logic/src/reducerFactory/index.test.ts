import test, { ContextualTestContext } from 'ava'

import { List } from 'immutable'

import createGrid from './create-grid'
import moveTile from './moveTile'
import { ActionTypes } from './ActionTypes'
import { IAction } from './IAction'

import reducerFactory from './index'
type Reducer = (state: List<number>, action?: IAction) => List<number>

test('#reducerFactory move tile action', (t: ContextualTestContext) => {
  const reducer: Reducer = reducerFactory(3)
  // let grid: List<number> = createGrid(3)

  // initialize state
  let grid: List<number> = reducer()

  // move tile
  const tile: number = grid.get(7)
  grid = reducer(grid, { type: ActionTypes.MoveTile, value: tile })

  t.is(grid.indexOf(0), 7)
  t.is(grid.indexOf(tile), 8)
})
