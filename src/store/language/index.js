import { createContext, useContext, useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'
import { LAT } from 'constants/const'
import reducer from './reducer'
import actions from './actions'

const LanguageContext = createContext(false)

const useLanguageContext = () => {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error(
      'useLanguageContext::useStateContext must be used within a provider'
    )
  }

  return context
}

const initialActions = { language: localStorage.getItem('lang') || LAT }

const LanguageProvider = ({ children, defaultState }) => {
  const [state, dispatch] = useReducer(reducer, defaultState || initialActions)

  const value = useMemo(
    () => ({
      languageDispatch: dispatch,
      languageState: state,
    }),
    [state, dispatch]
  )

  localStorage.setItem('lang', value?.languageState.language)

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  defaultState: PropTypes.shape({}),
}

LanguageProvider.defaultProps = {
  defaultState: null,
}

export { LanguageProvider, useLanguageContext, actions as Actions }
