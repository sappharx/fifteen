import test, { ContextualTestContext } from 'ava'

import { Grid } from './grid'
import createGrid from './create-grid'

test('#createGrid returns a length of n squared', (t: ContextualTestContext) => {
  t.is(createGrid(4).board.size, 16)
})

test('#createGrid returns an Array whose last element is 0', (t: ContextualTestContext) => {
  const grid: Grid = createGrid(4)

  t.is(grid.board.get(grid.size ** 2 - 1), 0)
})

test('#createGrid returns a Array free of duplicates', (t: ContextualTestContext) => {
  const grid: Grid = createGrid(8)
  const uniqueSet: Set<number> = new Set(grid.board.toArray())

  t.is(uniqueSet.size, grid.size ** 2)
})
