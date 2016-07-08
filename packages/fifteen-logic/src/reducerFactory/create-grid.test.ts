import test, { ContextualTestContext } from 'ava'

import createGrid from './create-grid'

test('#createCrid returns a length of n squared', (t: ContextualTestContext) => {
  t.is(createGrid(4).length, 16)
})

test('#createCrid returns an Array whose last element is 0', (t: ContextualTestContext) => {
  const grid = createGrid(4)
  t.is(grid[grid.length -1], 0)
})

test('#createCrid returns a Array free of duplicates', (t: ContextualTestContext) => {
  const grid = createGrid(7)
  const uniqueSet = new Set(grid)
  t.is(uniqueSet.size, grid.length)
})
