import { List } from 'immutable'

import coordinate from './coordinate'
import getCoordinates from './getCoordinates'

function moveTile(grid: List<number>, gridSize: number, tile: number): List<number> {
  const tileCoords: coordinate = getCoordinates(grid, gridSize, tile)
  const zeroCoords: coordinate = getCoordinates(grid, gridSize, 0)

  const isValidMove: boolean = (tileCoords.x === zeroCoords.x && Math.abs(tileCoords.y - zeroCoords.y) === 1)
    || (tileCoords.y === zeroCoords.y && Math.abs(tileCoords.x - zeroCoords.x) === 1)

  return isValidMove ? swap(grid, tile, 0) : grid
}

function swap(grid: List<number>, a: number, b: number): List<number> {
  const aIndex: number = grid.indexOf(a)
  const bIndex: number = grid.indexOf(b)

  let newGrid = grid.set(aIndex, b)
  newGrid = newGrid.set(bIndex, a)

  return newGrid
}

export default moveTile
