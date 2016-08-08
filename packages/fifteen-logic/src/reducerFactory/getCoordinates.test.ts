import test, { ContextualTestContext } from 'ava'

import { List } from 'immutable'

import { Grid } from './grid'
import getCoordinates from './getCoordinates'
import coordinate from './coordinate'

test('#getCoordiates has a return value coordinate', (t: ContextualTestContext) => {
  const grid: Grid = {
    board: List.of(1, 2, 3, 4),
    size: 2
  }
  const tile: number = 2

  const result: coordinate = getCoordinates(grid, tile)

  t.is(typeof result.x, 'number')
  t.is(typeof result.y, 'number')
})

test('#getCoordinates works', (t: ContextualTestContext) => {
  const grid: Grid = {
    board: List.of(7, 2, 4, 0, 1, 5, 8, 6, 3),
    size: 3
  }
  const tile: number = 5

  const result: coordinate = getCoordinates(grid, tile)

  t.is(result.x, 2)
  t.is(result.y, 1)
})
