import ActionTypes from './ActionTypes'
import MoveTileAction from './moveTileAction'

export default class ActionCreator {
  static moveTile(tile: number): MoveTileAction {
    return {
      type: ActionTypes.MoveTile,
      tile
    }
  }
}
