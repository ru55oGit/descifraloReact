import { createContext, useContext, useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'
import reducer from './reducer'
import actions from './actions'

const GameContext = createContext(false)

const useGameContext = () => {
  const context = useContext(GameContext)

  if (context === undefined) {
    throw new Error(
      'useGameContext::useStateContext must be used within a provider'
    )
  }

  return context
}

const initialActions = { game: null }

const GameProvider = ({ children, defaultState }) => {
  const [state, dispatch] = useReducer(reducer, defaultState || initialActions)

  const value = useMemo(
    () => ({
      gameDispatch: dispatch,
      gameState: state,
    }),
    [state, dispatch]
  )

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

GameProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  defaultState: PropTypes.shape({}),
}

GameProvider.defaultProps = {
  defaultState: null,
}

export { GameProvider, useGameContext, actions as Actions }
