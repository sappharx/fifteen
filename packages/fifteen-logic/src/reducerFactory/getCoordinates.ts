import { List } from 'immutable'

import coordinate from './coordinate'

function getCoordinates(grid: List<number>, gridSize: number, tile: number): coordinate {
  const z: number = grid.indexOf(tile)

  return {
    x: z % gridSize,
    y: Math.floor(z / gridSize)
  }
}

export default getCoordinates
