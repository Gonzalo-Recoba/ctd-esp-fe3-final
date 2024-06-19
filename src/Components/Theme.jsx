import React, { useReducer } from 'react'
import { useGlobalStates } from './utils/global.context'

// const reducer = (state, action) => {
//     switch(action){
//         case "changeTheme":
//             if(state.theme == 'dark') { return {theme: 'light'}}
//             if(state.theme == 'light')  {return {theme: 'dark'}}
//         default:
//             throw new Error();
//     }
// }
// const initialState = {theme: 'dark'}


const Theme = () => {
    const {theme, setTheme} = useGlobalStates()
    // const [state, dispatch] = useReducer(reducer, initialState)

  const changeTheme = () =>{
    if(theme == 'dark') setTheme('light')
    if(theme == 'light') setTheme('dark')
  }

  return (
    <button onClick={changeTheme}>{theme == 'light' ? "🌙" : "☀️"}</button>
    //<button onClick={() => dispatch({type: 'changeTheme'})}>{theme == 'light' ? "🌙" : "☀️"}</button>
  )
}

export default Theme