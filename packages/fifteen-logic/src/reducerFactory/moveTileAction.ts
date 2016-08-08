import { Action } from 'redux'

interface MoveTileAction extends Action {
  tile: number
}

export default MoveTileAction
