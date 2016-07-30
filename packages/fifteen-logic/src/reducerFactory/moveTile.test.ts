import test, { ContextualTestContext } from 'ava'

import { List } from 'immutable'

import moveTile from './moveTile'



test('#moveTile for adjacent locations', (t: ContextualTestContext) => {
  let mockGrid: List<number> = List.of(0, 1, 2, 3, 4, 5, 6, 7, 8)
  const SIZE: number = 3
  mockGrid = moveTile(mockGrid, SIZE, 3)
  t.is(mockGrid.get(3), 0)
  t.is(mockGrid.get(0), 3)
})

test('#moveTile for adjacent locations', (t: ContextualTestContext) => {
  let mockGrid: List<number> = List.of(0, 1, 2, 3, 4, 5, 6, 7, 8)
  const SIZE: number = 3
  mockGrid = moveTile(mockGrid, SIZE, 6)
  t.is(mockGrid.get(6), 6)
  t.is(mockGrid.get(0), 0)
})
