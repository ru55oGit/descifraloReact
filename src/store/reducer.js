import actions from './actions'

export const initialState = {
  game: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_LEVEL: {
      return {
        ...state,
        game: action.game,
      }
    }
    default:
      return state
  }
}

export default reducer
