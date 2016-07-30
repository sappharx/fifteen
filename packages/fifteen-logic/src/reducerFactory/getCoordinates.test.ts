import test, { ContextualTestContext } from 'ava'

import { List } from 'immutable'

import getCoordinates from './getCoordinates'
import coordinate from './coordinate'

test('#getCoordiates has a return value coordinate', (t: ContextualTestContext) => {
  const MOCK_GRID: List<number> = List.of(1, 2, 3, 4)
  const GRID_SIZE: number = 2
  const TILE: number = 2

  const result: coordinate = getCoordinates(MOCK_GRID, GRID_SIZE, TILE)

  t.is(typeof result.x, 'number')
  t.is(typeof result.y, 'number')
})

test('#getCoordinates works', (t: ContextualTestContext) => {
  const MOCK_GRID: List<number> = List.of(7, 2, 4, 0, 1, 5, 8, 6, 3)
  const GRID_SIZE: number = 3
  const TILE: number = 5

  const result: coordinate = getCoordinates(MOCK_GRID, GRID_SIZE, TILE)

  t.is(result.x, 2)
  t.is(result.y, 1)
})
