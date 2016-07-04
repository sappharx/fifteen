import createGrid from './create-grid'
import { IAction } from './IAction'

type Grid = Array<Array<number>>
type Reducer = (state: Grid, action?: IAction) => Grid

const MINIMUM_GRID_SIZE: number = 3
const MAXIMUM_GRID_SIZE: number = 9

export default function reducerFactory(gridSize: number): Reducer {
  if (gridSize < MINIMUM_GRID_SIZE) {
    throw `requested gridSize is below the minimum ${MINIMUM_GRID_SIZE}`
  }

  if (gridSize > MAXIMUM_GRID_SIZE) {
    throw `requested gridSize is above the maximum ${MAXIMUM_GRID_SIZE}`
  }

  const initialState: Grid = createGrid(gridSize)

  return (state: Grid = initialState, action?: IAction): Grid => {
    switch (action.type) {
      default:
        return state
    }
  }
}
