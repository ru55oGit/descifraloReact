import actions from './actions'

export const initialState = {
  language: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_LANGUAGE: {
      return {
        ...state,
        language: action.language,
      }
    }
    default:
      return state
  }
}

export default reducer
