import { Action, Reducer } from 'redux'

import { Grid } from './grid'
import MoveTileAction from './moveTileAction'
import createGrid from './create-grid'
import moveTile from './moveTile'
import ActionTypes from './actionTypes'

const MINIMUM_GRID_SIZE: number = 3
const MAXIMUM_GRID_SIZE: number = 9

export default function reducerFactory(gridSize: number): Reducer<Grid> {
  if (gridSize < MINIMUM_GRID_SIZE) {
    throw `requested gridSize is below the minimum ${ MINIMUM_GRID_SIZE }`
  }

  if (gridSize > MAXIMUM_GRID_SIZE) {
    throw `requested gridSize is above the maximum ${ MAXIMUM_GRID_SIZE }`
  }

  const initialState: Grid = createGrid(gridSize)

  return (state: Grid = initialState, action: Action): Grid => {
    // hackery
    if (!action) {
      return state
    }

    switch (action.type) {
      case ActionTypes.MoveTile:
        return moveTile(state, <MoveTileAction>action)
      default:
        return state
    }
  }
}
