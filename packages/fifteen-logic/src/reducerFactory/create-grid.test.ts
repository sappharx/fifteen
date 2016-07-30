import test, { ContextualTestContext } from 'ava'

import { List } from 'immutable'

import createGrid from './create-grid'

test('#createGrid returns a length of n squared', (t: ContextualTestContext) => {
  t.is(createGrid(4).size, 16)
})

test('#createCrid returns an Array whose last element is 0', (t: ContextualTestContext) => {
  const grid = createGrid(4)
  t.is(grid.get(grid.size - 1), 0)
})

test('#createCrid returns a Array free of duplicates', (t: ContextualTestContext) => {
  const grid: List<number> = createGrid(8)
  const uniqueSet: Set<number> = new Set(grid.toArray())
  t.is(uniqueSet.size, grid.size)
})
