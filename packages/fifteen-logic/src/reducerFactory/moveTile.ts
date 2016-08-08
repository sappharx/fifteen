import { List } from 'immutable'

import { Grid } from './grid'
import MoveTileAction from './moveTileAction'
import coordinate from './coordinate'
import getCoordinates from './getCoordinates'

function moveTile(state: Grid, action: MoveTileAction): Grid {
  const tileCoords: coordinate = getCoordinates(state, action.tile)
  const zeroCoords: coordinate = getCoordinates(state, 0)

  const isValidMove: boolean = (tileCoords.x === zeroCoords.x && Math.abs(tileCoords.y - zeroCoords.y) === 1)
    || (tileCoords.y === zeroCoords.y && Math.abs(tileCoords.x - zeroCoords.x) === 1)

  if (isValidMove) {
    state.board = swap(state.board, action.tile, 0)
  }

  return state
}

function swap(grid: List<number>, a: number, b: number): List<number> {
  const aIndex: number = grid.indexOf(a)
  const bIndex: number = grid.indexOf(b)

  let newBoard: List<number> = grid.set(aIndex, b)
  newBoard = newBoard.set(bIndex, a)

  return newBoard
}

export default moveTile
