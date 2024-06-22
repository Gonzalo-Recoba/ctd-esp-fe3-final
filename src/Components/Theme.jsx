import React from 'react'
import { useGlobalStates } from './utils/global.context'

const Theme = () => {
  const {state, dispatch} = useGlobalStates()
  return (
    <button onClick={() => dispatch({type: "CHANGE_THEME"})}>{state.theme === 'light' ? "🌙" : "☀️"}</button>
  )
}

export default Theme