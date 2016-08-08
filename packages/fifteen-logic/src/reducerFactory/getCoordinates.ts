import { Grid } from './grid'
import coordinate from './coordinate'

function getCoordinates(grid: Grid, tile: number): coordinate {
  const z: number = grid.board.indexOf(tile)

  return {
    x: z % grid.size,
    y: Math.floor(z / grid.size)
  }
}

export default getCoordinates
