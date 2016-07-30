import { List } from 'immutable'

import createGrid from './create-grid'
import { ActionTypes } from './ActionTypes'
import { IAction } from './IAction'

type Reducer = (state: List<number>, action?: IAction) => List<number>

const MINIMUM_GRID_SIZE: number = 3
const MAXIMUM_GRID_SIZE: number = 9

export default function reducerFactory(gridSize: number): Reducer {
  if (gridSize < MINIMUM_GRID_SIZE) {
    throw `requested gridSize is below the minimum ${MINIMUM_GRID_SIZE}`
  }

  if (gridSize > MAXIMUM_GRID_SIZE) {
    throw `requested gridSize is above the maximum ${MAXIMUM_GRID_SIZE}`
  }

  const initialState: List<number> = createGrid(gridSize)

  return (state: List<number> = initialState, action?: IAction): List<number> => {
    switch (action.type) {
      case ActionTypes.MoveTile:
        return state
      default:
        return state
    }
  }
}
